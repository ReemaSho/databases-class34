import connection from "./connect.js";

const databaseWorldQuery = () => {
    //1- What are the names of countries with population greater than 8 million
    const sqlQuery1 = "SELECT name  FROM country WHERE population > 8000000";
    connection.query(sqlQuery1, (err, result) => {
        if (err) throw err;
        console.log(result);
    });
    //
    //2- What are the names of countries that have “land” in their names?
    const sqlQuery2 = "SELECT name  FROM country WHERE name LIKE '%land%'";
    connection.query(sqlQuery2, (err, result) => {
        if (err) throw err;
        console.log(result);
    });
    //
    //3- What are the names of the cities with population in between 500,000 and 1 million
    const sqlQuery3 =
        "SELECT name ,population FROM city WHERE population BETWEEN 500000 AND 1000000";
    connection.query(sqlQuery3, (err, result) => {
        if (err) throw err;
        console.log(result);
    });
    //
    //4- What's the name of all the countries on the continent ‘Europe’?
    const sqlQuery4 =
        "SELECT name  AS EuropeanCountry FROM country WHERE continent ='Europe'";
    connection.query(sqlQuery4, (err, result) => {
        if (err) throw err;
        console.log(result);
    });
    //
    //5- List all the countries in the descending order of their surface areas.
    const sqlQuery5 = "SELECT * FROM country ORDER BY SurfaceArea DESC";
    connection.query(sqlQuery5, (err, result) => {
        if (err) throw err;
        console.log(result);
    });
    //
    //6- What are the names of all the cities in the Netherlands?
    const sqlQuery6 =
        "WITH countryCode AS (SELECT code FROM country WHERE name = 'Netherlands') SELECT name AS DutchCity FROM city ,countryCode WHERE city.countryCode = countryCode.code";
    connection.query(sqlQuery6, (err, result) => {
        if (err) throw err;
        console.log(result);
    });

    //
    //7- What is the population of Rotterdam?
    const sqlQuery7 =
        "SELECT population AS RotterdamPopulation FROM city WHERE name = 'Rotterdam'";
    connection.query(sqlQuery7, (err, result) => {
        if (err) throw err;
        console.log(result);
    });
    //
    //8. What's the top 10 countries by Surface Area?
    const sqlQuery8 =
        "SELECT name AS topSurfaceCountries FROM country ORDER BY SurfaceArea DESC LIMIT 10";
    connection.query(sqlQuery8, (err, result) => {
        if (err) throw err;
        console.log(result);
    });
    //
    //9. What's the top 10 most populated cities?
    const sqlQuery9 =
        "SELECT name As mostPopulatedCities FROM city ORDER BY population DESC LIMIT 10";
    connection.query(sqlQuery9, (err, result) => {
        if (err) throw err;
        console.log(result);
    });
    //
    //10. What is the population number of the world?

    const sqlQuery10 = "SELECT SUM(population) AS world_population FROM country ";
    connection.query(sqlQuery10, (err, result) => {
        if (err) throw err;
        console.log(result);
    });
};

export default databaseWorldQuery;