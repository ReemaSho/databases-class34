import mysql from "mysql";

const connection = mysql.createConnection({
    host: "localhost",
    user: "hyfuser",
    password: "hyfpassword",
    database: "world",
});

connection.connect((err) => {
    if (err) throw err;
    console.log("Mysql is connected");
});
export default connection;