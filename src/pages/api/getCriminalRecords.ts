// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { CriminalRecordItems, GetCriminalRecordsRes } from './types';
import DBConnect from './utils/DBConnection';
import isLogged from './utils/isLogged'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<{ message: string } | GetCriminalRecordsRes>
) {
    if (req.method != "GET")
        return res.status(405).json({ message: "Bad method request" });

    if (!req.headers.authorization)
        return res.status(401).json({ message: "Bad Identification" });

    const isReqLogged = await isLogged(req.headers.authorization);

    if (typeof isReqLogged != "boolean")
        return res.status(isReqLogged.httpCode).json({ message: isReqLogged.message });

    let dbRes: GetCriminalRecordsRes = await DBConnect(`SELECT id, criminalrecords.owner_name, criminalrecords.owner_surname, records, users.name, users.surname, users.pon, docreation, photos FROM criminalrecords INNER JOIN users ON criminalrecords.author = users.username`).catch((e) => {
        return res.status(500).json({ message: "Internal server error" }) as any;
    });

    if (!dbRes)
        return res.status(500).json({ message: "Internal server error" });

    dbRes.forEach((record: CriminalRecordItems) => {
        record.records = JSON.parse(record.records as any).length;
        record.photos = JSON.parse(record.photos as any);
    });


    return res.status(200).json(dbRes);
}
