import DBConnect from "./DBConnection";
const bcrypt = require("bcrypt");

export default async function (token: string): Promise<true | { message: string, httpCode: number }> {

    const [headerHash, creationDate, username] = token.split(".");

    const userPasswdHash: { passwd: string }[] = await DBConnect(`SELECT passwd from users WHERE username = \"${username}\" AND active = 1`) as any;

    if (userPasswdHash.length == 0)
        return { message: "Invalid Username", httpCode: 401 };

    const key = JSON.stringify({ dateOfCreation: parseInt(creationDate), username: username, passwordHash: userPasswdHash[0].passwd, privateKey: "q65s4d1;:-sdf+-fsd,s" });

    if (await bcrypt.compare(key, headerHash.replace("$F$D54/", ".")) && (Date.now() - parseInt(creationDate)) <= 7 * 24 * 3600 * 1000)
        return true

    return { message: "Invalid Token", httpCode: 401 };
}