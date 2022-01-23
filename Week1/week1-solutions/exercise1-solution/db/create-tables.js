import connection from "./connect.js";
import tables from "./tables-schema.js";

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
};

export default createTables;