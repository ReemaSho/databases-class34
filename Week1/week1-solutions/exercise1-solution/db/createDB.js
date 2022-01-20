import connection from "./connect.js";
import createTables from "./create-tables.js";
const createDB = () => {
    connection.query("DROP DATABASE IF EXISTS meetup", (err, results) => {
        if (err) throw err;
        console.log("Database meetup  is deleted");
    });

    connection.query("CREATE DATABASE meetup", (err, result) => {
        if (err) throw err;
        console.log(" New Database meetup is created");
        createTables();
    });
};

export default createDB;