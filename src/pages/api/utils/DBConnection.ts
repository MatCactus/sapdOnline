// get the client
const mysql = require("mysql2");

export default function DBConnect(exec: string): Promise<string> {
    // create the connection to database
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "lspdonline",
    });

    return new Promise((resolve, reject) => {
        connection.execute(exec, (err: any, results: {}[], fields: any) => {
            !err ? resolve(results) : reject(err);
        });
    }).then((res: any) => {
        connection.close();
        return res;
    }).catch(e => console.log(e))
}