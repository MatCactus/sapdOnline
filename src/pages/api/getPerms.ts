// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { GetPermsRes } from './types';
import DBConnect from './utils/DBConnection';
import isLogged from './utils/isLogged'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<GetPermsRes>
) {
    if (req.method != "GET")
        return res.status(405).json({ message: "Bad method request" } as any);

    if (!req.headers.authorization)
        return res.status(401).json({ message: "Bad Identification" } as any);

    const isReqLogged = await isLogged(req.headers.authorization);

    if (typeof isReqLogged != "boolean")
        return res.status(isReqLogged.httpCode).json({ message: isReqLogged.message } as any);

    const dbResUser: { perm: string }[] = await DBConnect(`SELECT perm FROM users WHERE username = \"${req.headers.authorization.split(".")[2]}\"`) as any;

    let data: GetPermsRes = {
        actualPerm: parseInt(dbResUser[0].perm ?? "0"),
        perms: {
            0: {
                pages: ["/dashboard", "/complaint", "/report", "/manual", "/profile", "research-citizen", "criminal-records"],
                desc: "Uniquement Lecteur"
            },
            1: {
                pages: ["/dashboard", "/report", "/manual", "/profile", "/users", "/research-citizen", "/criminal-records", "/complait"],
                desc: "Lecteur + Création de Rapport + Création de Casier Judiciaire"
            },
            2: {
                pages: ["/dashboard"],
                desc: "Lecteur + Création de Rapport + Création de Casier Judiciaire + Administration"
            }
        }
    };



    return res.status(200).json(data);
}
