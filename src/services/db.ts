import mysql from "mysql2/promise";
import dotenv from "dotenv";

type result = {
    result:
        | mysql.RowDataPacket[]
        | mysql.RowDataPacket[][]
        | mysql.OkPacket
        | mysql.OkPacket[]
        | mysql.ResultSetHeader;
    error: undefined;
};
type error = { result: undefined; error: { message: any } };

dotenv.config();

const dbConfig = {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
};

export async function query(
    sql: string,
    params?: any
): Promise<result | error> {
    if (!Array.isArray(params)) {
        params = [params];
    }

    const connection = await mysql.createConnection(dbConfig);
    try {
        const [results] = await connection.execute(sql, params);
        return { result: results, error: undefined };
    } catch (error) {
        return { error: { message: error }, result: undefined };
    }
}