// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import DBConnect from './utils/DBConnection';
import genJWT from './utils/genJWT'
const bcrypt = require("bcrypt");

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<{ message: string } | { token: string }>
) {
    if (req.method != "POST" || !req.body)
        return res.status(405).json({ message: "Not allowed" });

    const { username, password } = JSON.parse(req.body);

    if (!username || !password)
        return res.status(400).json({ message: "Not allowed" });

    const dbRes: { passwd: string, active: boolean }[] = await DBConnect(`SELECT passwd, active FROM users WHERE username = \"${username}\"`) as any;

    if (dbRes.length == 0)
        return res.status(401).json({ message: "Bad Username or Password" });

    if (!(await bcrypt.compare(password, dbRes[0].passwd)))
        return res.status(401).json({ message: "Bad Username or Password" });

    return res.status(200).json({ token: await genJWT(username, dbRes[0].passwd) });
}
