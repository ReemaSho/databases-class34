import mysql from "mysql";
import util from "util";
import {
    SQLCreateDatabaseAndTables,
    SQLMentorRecords,
    queries,
} from "./queries.js";
import {
    authorsRecords,
    researchPapersRecords,
    authorPapersRecords,
} from "./dataRecords.js";

const populateDatabase = async() => {
    const CONNECTION_CONFIG = {
        host: "localhost",
        user: "hyfuser",
        password: "hyfpassword",
    };
    const connection = mysql.createConnection(CONNECTION_CONFIG);
    const execQuery = util.promisify(connection.query.bind(connection));

    try {
        //create Database and tables
        SQLCreateDatabaseAndTables.forEach(async(command) => {
            await execQuery(command);
            console.log(`create Database and tables`);
        });

        //insert records
        const insertFunction = async(tableRecords) => {
            const { table_name, records } = tableRecords;
            const sql = `INSERT INTO ${table_name} SET ?`;
            records.forEach(async(record) => {
                await execQuery(sql, record, (err, result) => {
                    if (err) throw err;
                    console.log(`Records  of ${table_name} table are inserted`);
                });
            });
        };
        insertFunction(authorsRecords);
        insertFunction(researchPapersRecords);
        insertFunction(authorPapersRecords);

        // update mentor in authors table
        SQLMentorRecords.forEach(async(record) => {
            await execQuery(record, (err, result) => {
                if (err) throw err;
                console.log("mentor field is updated");
            });
        });

        //queries
        queries.forEach(async(query) => {
            await execQuery(query, (err, result) => {
                if (err) throw err;
                console.log(result);
            });
        });
    } catch (error) {
        console.log(error);
        connection.end();
    }
    connection.end();
};
populateDatabase();