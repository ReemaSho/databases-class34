import mysql from "mysql";
import util from "util";
const connection = mysql.createConnection({
    host: "localhost",
    user: "hyfuser",
    password: "hyfpassword",
});

const sql = [
    "DROP DATABASE IF EXISTS transactions",
    "CREATE DATABASE transactions",
    "USE transactions",
    "CREATE TABLE IF NOT EXISTS account(account_number INT NOT NULL AUTO_INCREMENT Primary Key, balance FLOAT)",
    "ALTER TABLE account AUTO_INCREMENT=100",
    "CREATE TABLE IF NOT EXISTS account_changes(change_number int AUTO_INCREMENT Primary Key, from_account int NOT NULL, to_account int NOT NULL,amount int NOT NULL, changed_date DATETIME,remark VARCHAR(50), CONSTRAINT FK_FromAccount FOREIGN KEY (from_account) REFERENCES account(account_number),CONSTRAINT FK_ToAccount FOREIGN KEY (to_account) REFERENCES account(account_number))",
];

const populateDatabase = async() => {
    const execQuery = util.promisify(connection.query.bind(connection));

    try {
        //create Database and tables
        sql.forEach(async(query) => {
            await execQuery(query);
            console.log(`create Database and tables`);
        });
    } catch (error) {
        console.log(error);
        connection.end();
    }
    connection.end();
};
populateDatabase();