import mysql from "mysql";

const connection = mysql.createConnection({
    host: "localhost",
    user: "hyfuser",
    password: "hyfpassword",
    database: "world",
});

//1- Give an example of a value that can be passed as name and code that would take advantage of SQL-injection and (fetch all the records in the database).
//Possible SQL statements to inject the database:
//-- "SELECT Population FROM Country WHERE Name = 'x' OR 1=1 AND code = 'x' OR 1=1",
//-- "SELECT Population FROM Country WHERE Name ='' OR ''='' AND code ='' OR ''=''",
//-- "SELECT Population FROM Country WHERE Name LIKE '%';-- AND code ='the value here doesn't matter' "

//"SELECT Population FROM Country WHERE Name = 'x' OR 1=1 AND code = 'x' OR 1=1 UNION SELECT name from country ",

// function getPopulation(Country, name, code, cb) {
//     connection.query(
//         `SELECT Population FROM ${Country} WHERE Name = ${name} and code = ${code}`,
//         function(err, result) {
//             if (err) cb(err);
//             if (result.length == 0) cb(new Error("Not found"));
//             cb(null, result);
//         }
//     );
// }
// getPopulation("Country", "'x' OR 1=1", "'x' OR 1=1", console.log);
//
//
//2.Rewrite the function so that it is no longer vulnerable to SQL injection
function getPopulation(Country, name, code, cb) {
    connection.query(
        `SELECT Population FROM ?? WHERE Name = ? and Code = ?`, [Country, name, code],
        function(err, result) {
            if (err) cb(err);
            if (result.length == 0) cb(new Error("Not found"));
            cb(null, result);
        }
    );
}
getPopulation("Country", "Syria", "SYR", console.log);
connection.end();