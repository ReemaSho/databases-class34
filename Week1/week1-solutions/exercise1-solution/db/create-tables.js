import connection from "./connect.js";
import tables from "./tables-schema.js";
import insertRecords from "./tables-records.js";

const createTables = () => {
    connection.changeUser({ database: "meetup" }, (err) => {
        if (err) throw err;
    });
    for (const table in tables) {
        connection.query(tables[table], (err, result) => {
            if (err) throw err;
            console.log(`table ${table}  is created`);
        });
    }
    insertRecords();
};

export default createTables;