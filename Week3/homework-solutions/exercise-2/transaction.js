import mysql from "mysql";
import util from "util";
const connection = mysql.createConnection({
    host: "localhost",
    user: "hyfuser",
    password: "hyfpassword",
    database: "transactions",
});

const sql = [
    "SET autoCommit = 0",
    "START TRANSACTION",
    "UPDATE account SET balance=balance-1000 WHERE account_number= 101",
    "UPDATE account SET balance=balance+1000 WHERE account_number=102",
    "INSERT INTO account_changes(from_account, to_account ,amount, changed_date, remark) VALUES(101 , 102, 1000 , '2022-01-31 17:21:00','tuition fee')",
    "COMMIT",
];

const transferMoney = async() => {
    const execQuery = util.promisify(connection.query.bind(connection));
    try {
        sql.forEach(async(query) => {
            await execQuery(query);
            console.log(`Processing transaction`);
        });
    } catch (error) {
        console.log(error);
        connection.end();
    }

    connection.end();
};
transferMoney();