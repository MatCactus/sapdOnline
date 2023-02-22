// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { GetPermsRes } from './types';
import getPerms from './utils/getPerms';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<GetPermsRes>
) {
    if (req.method != "GET")
        return res.status(405).json({ message: "Bad method request" } as any);

    if (!req.headers.authorization)
        return res.status(401).json({ message: "Bad Identification" } as any);

    const data = await getPerms(req.headers.authorization);

    if ((data as any).message)
        return res.status((data as any).httpCode).json({ message: (data as any).message } as any);

    return res.status(200).json(data as any);
}
