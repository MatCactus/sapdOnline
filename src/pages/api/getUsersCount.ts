// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import DBConnect from './utils/DBConnection';
import isLogged from './utils/isLogged'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<{ message: string } | { activeUsers: number, dept: string }>
) {
    if (req.method != "GET")
        return res.status(405).json({ message: "Bad method request" });

    if (!req.headers.authorization)
        return res.status(401).json({ message: "Bad Identification" });

    const isReqLogged = await isLogged(req.headers.authorization);

    if (typeof isReqLogged != "boolean")
        return res.status(isReqLogged.httpCode).json({ message: isReqLogged.message });

    const dbResUser: { dept: string }[] = await DBConnect(`SELECT dept FROM users WHERE username = \"${req.headers.authorization.split(".")[2]}\"`) as any;

    if (dbResUser[0].dept == "SAPD")
        return res.status(200).json({ activeUsers: ((await DBConnect("SELECT COUNT(username) FROM users WHERE active = 1"))[0] as any)['COUNT(username)'], dept: "SAPD" });

    return res.status(200).json({ activeUsers: ((await DBConnect(`SELECT COUNT(username) FROM users WHERE active = 1 AND dept = \"${dbResUser[0].dept}\"`))[0] as any)['COUNT(username)'], dept: dbResUser[0].dept })
}
