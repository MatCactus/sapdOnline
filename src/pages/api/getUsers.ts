// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import DBConnect from './utils/DBConnection';
import isLogged from './utils/isLogged'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<{ active: boolean, dept: string, pp: string, pon: string, name: string, surname: string, rank: string }[]>
) {
    if (req.method != "GET")
        return res.status(405).json({ message: "Bad method request" } as any);

    if (!req.headers.authorization)
        return res.status(401).json({ message: "Bad Identification" } as any);

    const isReqLogged = await isLogged(req.headers.authorization);

    if (typeof isReqLogged != "boolean")
        return res.status(isReqLogged.httpCode).json({ message: isReqLogged.message } as any);

    const dbResUser: { dept: string }[] = await DBConnect(`SELECT dept FROM users WHERE username = \"${req.headers.authorization.split(".")[2]}\"`) as any;

    let users: { active: boolean; dept: string; pp: string; pon: string; name: string; surname: string; rank: string }[];

    if (dbResUser[0].dept == "SAPD")
        users = await DBConnect("SELECT active, dept, pp, pon, name, surname, rank, username FROM users") as any;
    else
        users = await DBConnect(`SELECT active, dept, pp, pon, name, surname, rank, username FROM users WHERE dept = \"${dbResUser[0].dept}\"`) as any;

    return res.status(200).json(users);
}
