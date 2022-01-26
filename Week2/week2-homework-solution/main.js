import mysql from "mysql";
import util from "util";
import { queries, SQLMentorRecords } from "./queries.js";

import {
    authorsRecords,
    researchPapersRecords,
    authorPapersRecords,
} from "./dataRecords.js";
//
const CONNECTION_CONFIG = {
    host: "localhost",
    user: "hyfuser",
    password: "hyfpassword",
};

const sql = [
    "DROP DATABASE IF EXISTS  universities_data",
    "CREATE DATABASE universities_data",
    "USE universities_data",
    "CREATE TABLE IF NOT EXISTS authors(author_no int AUTO_INCREMENT Primary Key, author_name VARCHAR(100), university VARCHAR (225), date_of_birth DATE, h_index int, gender ENUM('M','F'))",
    "ALTER TABLE authors ADD mentor int ",
    "ALTER TABLE authors ADD FOREIGN KEY(mentor) REFERENCES authors(author_no)",
    "CREATE TABLE IF NOT EXISTS research_Papers(paper_id int AUTO_INCREMENT Primary Key, paper_title VARCHAR(100), conference VARCHAR(225), publish_date DATETIME)",
    "CREATE TABLE IF NOT EXISTS author_Papers_junction(author_no int NOT NULL , paper_no int NOT NULL , CONSTRAINT  FK_author FOREIGN KEY(author_no) REFERENCES authors(author_no), CONSTRAINT FK_papers FOREIGN KEY(paper_no) REFERENCES  research_Papers(paper_id))",
];

const seedDatabase = async() => {
    const connection = mysql.createConnection(CONNECTION_CONFIG);
    const execQuery = util.promisify(connection.query.bind(connection));

    try {
        //create Database and tables
        sql.forEach(async(command) => {
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
seedDatabase();