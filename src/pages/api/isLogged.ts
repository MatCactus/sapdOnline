// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import DBConnect from './utils/DBConnection';
import genHash from './utils/genHash';
const bcrypt = require("bcrypt");

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<{ message: string } | any>
) {
    if (req.method != "GET")
        return res.status(405).json({ message: "Not allowed" });

    const headers = req.headers

    if (!headers.authorization)
        return res.status(403).json({ message: "Not allowed" });

    const [headerHash, creationDate, username] = headers.authorization.split(".");

    const userPasswdHash: { passwd: string }[] = await DBConnect(`SELECT passwd from users WHERE username = \"${username}\"`) as any;

    if (userPasswdHash.length == 0)
        return res.status(401).json({ message: "Invalid Username" })

    const key = JSON.stringify({ dateOfCreation: parseInt(creationDate), username: username, passwordHash: userPasswdHash[0].passwd, privateKey: "q65s4d1;:-sdf+-fsd,s" });

    if (await bcrypt.compare(key, headerHash.replace("$F$D54/", ".")) && (Date.now() - parseInt(creationDate)) <= 7 * 24 * 3600 * 1000)
        return res.status(200).json({ message: "Connected" });

    return res.status(401).json({ message: "Invalid Token" });
}


/*

{
    dateOfCreation: ...,
    username: ...,
    passwordHash: ...,
    privateKey: "sapdonline564654641654"
} => hash

hash.dateOfCreation.username

*/