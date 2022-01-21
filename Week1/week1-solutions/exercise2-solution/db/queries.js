import connection from "./connect.js";

const databaseWorldQuery = () => {
    const queries = {
        sqlQuery1: "SELECT name  FROM country WHERE population > 8000000",
        sqlQuery2: "SELECT name  FROM country WHERE name LIKE '%land%'",
        sqlQuery3: "SELECT name ,population FROM city WHERE population BETWEEN 500000 AND 1000000",
        sqlQuery4: "SELECT name  AS EuropeanCountry FROM country WHERE continent ='Europe'",
        sqlQuery5: "SELECT * FROM country ORDER BY SurfaceArea DESC",
        sqlQuery6: "WITH countryCode AS (SELECT code FROM country WHERE name = 'Netherlands') SELECT name AS DutchCity FROM city ,countryCode WHERE city.countryCode = countryCode.code",
        sqlQuery7: "SELECT population AS RotterdamPopulation FROM city WHERE name = 'Rotterdam'",
        sqlQuery8: "SELECT name AS topSurfaceCountries FROM country ORDER BY SurfaceArea DESC LIMIT 10",
        sqlQuery9: "SELECT name As mostPopulatedCities FROM city ORDER BY population DESC LIMIT 10",
        sqlQuery10: "SELECT SUM(population) AS world_population FROM country ",
    };

    for (const query in queries) {
        connection.query(queries[query], (err, result) => {
            if (err) throw err;
            console.log(result);
        });
    }
};

export default databaseWorldQuery;