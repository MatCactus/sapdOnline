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

    const { username, state } = JSON.parse(req.body);
    if (typeof username == "undefined" || typeof state == "undefined")
        return res.status(400).json({ message: "Bad request" });

    const dbResUser = await DBConnect(`UPDATE users SET active = \"${state ? "1" : "0"}\" WHERE username = \"${username}\"`).then(async () => {
        const dbRes = await DBConnect(`SELECT username FROM users WHERE username = \"${username}\" AND active = \"${state ? "1" : "0"}\"`);
        if (dbRes.length == 0)
            return { message: "Internal server error", code: 500 };
        return { message: "User updated", code: 200 };
    }
    ).catch((e) => {
        return { message: "Internal server error", code: 500 };
    }) as any;

    return res.status(dbResUser.code).json({ message: dbResUser.message });
}
