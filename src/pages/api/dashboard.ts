// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import DBConnect from './utils/DBConnection'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const result = await DBConnect("SELECT * FROM users")

    res.status(200).json(result)
}

