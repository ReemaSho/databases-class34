import mysql from "mysql";
import util from "util";
const connection = mysql.createConnection({
    host: "localhost",
    user: "hyfuser",
    password: "hyfpassword",
    database: "transactions",
});

const sql = [
    "INSERT INTO account(balance) VALUES (11900),(5300.13),(2225.45),(1258.30)",
    "INSERT INTO account_changes (from_account, to_account, amount, changed_date, remark) VALUES (100,103,1200,'2021-05-02 15:33:00', 'GIFT'),(101,102,100,'2022-01-01 13:20:00','HOUSE RENT') ",
];
const seedDatabase = async() => {
    const execQuery = util.promisify(connection.query.bind(connection));
    try {
        sql.forEach(async(query) => {
            await execQuery(query);
            console.log(`record has been inserted`);
        });
    } catch (error) {
        console.log(error);
        connection.end();
    }
    connection.end();
};
seedDatabase();