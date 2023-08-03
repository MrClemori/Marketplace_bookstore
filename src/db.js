import mysql from 'mysql'

export const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "marketplace_book",
    password: "root",
    //port: 3336,
    connectionLimit : 10
})