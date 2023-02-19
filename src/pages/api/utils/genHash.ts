const bcrypt = require("bcrypt");

export default async function genHash(username: string, passwordHash: string, dateOfCreation: number): Promise<string> {

    const privateKey = "q65s4d1;:-sdf+-fsd,s";

    const hash: string = await bcrypt.hash(JSON.stringify({ dateOfCreation: dateOfCreation, username: username, passwordHash: passwordHash, privateKey: privateKey }), 10);

    return hash.replace(".", "$F$D54/");
}

export async function genPasswordHash(password: string): Promise<string> {

    const hash = await bcrypt.genSalt(10).then((salt: any) => {
        return bcrypt.hash(password, salt);
    });

    return hash;
}
