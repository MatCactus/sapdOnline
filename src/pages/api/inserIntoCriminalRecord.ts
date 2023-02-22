// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { GetCriminalRecordRes, GetPermsRes } from './types';
import DBConnect from './utils/DBConnection';
import getPerms from './utils/getPerms';
import isLogged from './utils/isLogged'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<{ message: string } | GetCriminalRecordRes>
) {
    if (req.method != "POST")
        return res.status(405).json({ message: "Bad method request" });

    if (!req.headers.authorization)
        return res.status(401).json({ message: "Bad Identification" });

    let { recordId, records, photos } = JSON.parse(req.body);

    if (typeof recordId == "undefined" || !records || !photos)
        return res.status(400).json({ message: "Bad request" });

    records[records.lenght - 1].author = req.headers.authorization.split(".")[0];

    const perms = await getPerms(req.headers.authorization);

    if ((perms as any).message)
        return res.status((perms as any).httpCode).json({ message: (perms as any).message });

    if (![1, 3, 4].includes((perms as GetPermsRes).actualPerm))
        return res.status(403).json({ message: "You don't have the permission to do this" });

    const db = await DBConnect(`UPDATE criminal_records SET records = ${records}, photos = ${photos} WHERE id = ${recordId}`);

    return res.status(200).json({ message: "Added !" });
}
