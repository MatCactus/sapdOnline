import genHash from "./genHash"

export default async function genJWT(username: string, passwordHash: string,): Promise<string> {
    const creationDate = Date.now();

    return `${await genHash(username, passwordHash, creationDate)}.${creationDate}.${username}`;
}
