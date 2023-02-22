// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { GetCriminalRecordRes } from './types';
import DBConnect from './utils/DBConnection';
import isLogged from './utils/isLogged'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<{ message: string } | GetCriminalRecordRes>
) {
    if (req.method != "POST")
        return res.status(405).json({ message: "Bad method request" });

    if (!req.headers.authorization)
        return res.status(401).json({ message: "Bad Identification" });

    const isReqLogged = await isLogged(req.headers.authorization);

    if (typeof isReqLogged != "boolean")
        return res.status(isReqLogged.httpCode).json({ message: isReqLogged.message });

    const { recordId } = JSON.parse(req.body);

    if (typeof recordId == "undefined")
        return res.status(400).json({ message: "Bad request" });

    const dbRes: GetCriminalRecordRes = await DBConnect(`SELECT criminalrecords.owner_name, criminalrecords.owner_surname, owner_dob, owner_gender, owner_phone, records, users.name, users.surname, users.pon, docreation, photos FROM criminalrecords INNER JOIN users ON criminalrecords.author = users.username WHERE id = \"${recordId}\"`).catch((e) => {
        return res.status(500).json({ message: "Internal server error" }) as any;
    });

    if (!dbRes || (dbRes as any).length != 1)
        return res.status(500).json({ message: "Internal server error" });

    let data: GetCriminalRecordRes = (dbRes as any)[0];

    data.record = JSON.parse((data as any).records);
    data.photos = JSON.parse(data.photos as any);

    return res.status(200).json(data as any);
}
