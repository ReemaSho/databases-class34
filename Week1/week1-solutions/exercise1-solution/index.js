import connection from "./db/connect.js";
import createDB from "./db/createDB.js";
import insertRecords from "./db/tables-records.js";
import createTables from "./db/create-tables.js";
const executeMysql = () => {
    createDB();
    createTables();
    insertRecords();
};

executeMysql();
connection.end();