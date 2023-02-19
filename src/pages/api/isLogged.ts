// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import isLogged from './utils/isLogged';
const bcrypt = require("bcrypt");

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<{ message: string }>
) {
    if (req.method != "GET")
        return res.status(405).json({ message: "Not allowed" });

    const headers = req.headers

    if (!headers.authorization)
        return res.status(403).json({ message: "Not allowed" });

    const result = await isLogged(headers.authorization)

    if (typeof result == 'boolean')
        return res.status(200).json({ message: "Connected!" });

    return res.status(result.httpCode).json({ message: result.message })
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