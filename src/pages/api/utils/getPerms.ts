import { GetPermsRes } from "../types";
import DBConnect from "./DBConnection";
import isLogged from "./isLogged";

export default async function getPerms(token: string): Promise<GetPermsRes | { message: string, httpCode: number }> {

    const isReqLogged = await isLogged(token);

    if (typeof isReqLogged != "boolean")
        return isReqLogged;

    const dbResUser: { perm: string }[] = await DBConnect(`SELECT perm FROM users WHERE username = \"${token.split(".")[2]}\"`) as any;

    let data: GetPermsRes = {
        actualPerm: parseInt(dbResUser[0].perm ?? "0"),
        perms: {
            0: {
                pages: ["/dashboard", "/complaint", "/report", "/manual", "/profile", "research-citizen", "criminal-records"],
                desc: "Uniquement Lecteur"
            },
            1: {
                pages: ["/dashboard", "/report", "/manual", "/profile", "/users", "/research-citizen", "/criminal-records", "/complait"],
                desc: "Lecteur + Création de Rapport + Création de Casier Judiciaire + Déposition de Plainte"
            },
            2: {
                pages: ["/dashboard", "/report", "/manual", "/profile", "/research-citizen", "/criminal-records", "/complait"],
                desc: "Lecteur + Création de Rapport + Création de Casier Judiciaire + Déposition de Plainte + Administration"
            },
            3: {
                pages: ["/dashboard", "/report", "/manual", "/profile", "/users", "/research-citizen", "/criminal-records", "/complait"],
                desc: "Lecteur + Création de Rapport + Création de Casier Judiciaire + Déposition de Plainte + Administration + Création de Compte"
            },
            4: {
                pages: ["/dashboard", "/report", "/manual", "/profile", "/users", "/research-citizen", "/criminal-records", "/complait"],
                desc: "Full Access - Perm ADMIN"
            },
        }
    };
    return data;
}