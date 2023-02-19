// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import DBConnect from './utils/DBConnection';
import { genPasswordHash } from './utils/genHash';
import isLogged from './utils/isLogged'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<{ message: string }>
) {
    if (req.method != "POST")
        return res.status(405).json({ message: "Bad method request" });

    if (!req.headers.authorization)
        return res.status(401).json({ message: "Bad Identification" });

    const isReqLogged = await isLogged(req.headers.authorization);

    if (typeof isReqLogged != "boolean")
        return res.status(isReqLogged.httpCode).json({ message: isReqLogged.message });

    const { username, password, perm, name, surname, dob, rank, dept, pon, pp } = req.body;

    const passwd = await genPasswordHash(password);

    if (!username || !passwd || !perm || !name || !surname || !dob || !rank || !dept)
        return res.status(400).json({ message: "Bad request" });

    let dbResUser = await DBConnect(`SELECT username FROM users WHERE username = \"${username}\"`);

    if (dbResUser.length != 0)
        return res.status(400).json({ message: "Username already exists! You should contact an administrator." });

    const creationRes: { message: string, code: number } = await DBConnect(`INSERT INTO users (username, passwd, perm, active, name, surname, dob, dorecruitment, rank, dept${pon ? ", pon" : ""}${pp ? ", pp" : ""}) VALUES (\"${username}\", \"${passwd}\", \"${perm}\", \"1\", \"${name}\", \"${surname}\", \"${dob}\", \"${Date.now()}\", \"${rank}\", \"${dept}\"${pon ? `, \"${pon}\"` : ""}${pp ? `, \"${pp}\"` : ""})`).then(async () => {
        const dbRes = await DBConnect(`SELECT username FROM users WHERE username = \"${req.body.username}\"`);
        if (dbRes.length == 0)
            return { message: "Internal server error", code: 500 };
        return { message: "User created", code: 200 };
    }).catch((e) => {
        return { message: "Internal server error", code: 500 };
    }) as any;

    return res.status(creationRes.code).json({ message: creationRes.message });
}
