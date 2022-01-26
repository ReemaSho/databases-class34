const SQLCreateDatabaseAndTables = [
    "DROP DATABASE IF EXISTS  universities_data",
    "CREATE DATABASE universities_data",
    "USE universities_data",
    "CREATE TABLE IF NOT EXISTS authors(author_no int AUTO_INCREMENT Primary Key, author_name VARCHAR(100), university VARCHAR (225), date_of_birth DATE, h_index int, gender ENUM('M','F'))",
    "ALTER TABLE authors ADD mentor int ",
    "ALTER TABLE authors ADD FOREIGN KEY(mentor) REFERENCES authors(author_no)",
    "CREATE TABLE IF NOT EXISTS research_Papers(paper_id int AUTO_INCREMENT Primary Key, paper_title VARCHAR(100), conference VARCHAR(225), publish_date DATETIME)",
    "CREATE TABLE IF NOT EXISTS author_Papers_junction(author_no int NOT NULL , paper_no int NOT NULL , CONSTRAINT  FK_author FOREIGN KEY(author_no) REFERENCES authors(author_no), CONSTRAINT FK_papers FOREIGN KEY(paper_no) REFERENCES  research_Papers(paper_id))",
];

const SQLMentorRecords = [
    "UPDATE authors SET mentor = 1 WHERE author_no = 1",
    "UPDATE authors SET mentor = 5 WHERE author_no = 3",
    "UPDATE authors SET mentor = 11 WHERE author_no = 4",
    "UPDATE authors SET mentor = 14 WHERE author_no = 5",
    "UPDATE authors SET mentor = 2 WHERE author_no = 6",
    "UPDATE authors SET mentor = 3 WHERE author_no = 7",
    "UPDATE authors SET mentor = 14 WHERE author_no = 8",
    "UPDATE authors SET mentor = 4 WHERE author_no = 10",
    "UPDATE authors SET mentor = 2 WHERE author_no = 11",
    "UPDATE authors SET mentor = 6 WHERE author_no = 12",
    "UPDATE authors SET mentor = 8 WHERE author_no = 13",
    "UPDATE authors SET mentor = 9 WHERE author_no = 15",
];

const queries = [
    //JOINS ex3
    //Write a query that prints names of all authors and their corresponding mentors.
    "SELECT A.author_name , B.author_name AS mentor FROM  authors AS A JOIN authors AS B WHERE A.author_no = B.mentor ",
    //Write a query that prints all columns of authors and their published paper_title. If there is an author without any research_Papers, print the information of that author too.
    "SELECT authors.* , papers.paper_title FROM authors LEFT JOIN author_Papers_junction AS link_table ON authors.author_no = link_table.author_no LEFT JOIN research_Papers AS papers ON papers.paper_id = link_table.paper_no",
    //Aggregate Functions ex4
    //All research papers and the number of authors that wrote that paper.
    "SELECT papers.paper_title , count(authors.author_no) AS authors_Number FROM research_Papers AS papers JOIN  author_Papers_junction AS link_table ON papers.paper_id = link_table.paper_no JOIN authors ON authors.author_no = link_table.author_no GROUP BY papers.paper_title ",
    //Sum of the research papers published by all female authors.
    "SELECT count(paper_id) AS papers_by_female_authors from research_Papers AS papers JOIN  author_Papers_junction AS link_table ON papers.paper_id = link_table.paper_no JOIN authors ON authors.author_no = link_table.author_no WHERE authors.gender ='F'",
    //Average of the h-index of all authors per university.
    "SELECT university , AVG(h_index) AS h_index_Average FROM authors GROUP BY university",
    //Sum of the research papers of the authors per university.
    "SELECT university , count(paper_id) AS number_OF_research_paper_per_this_university from research_Papers AS papers JOIN  author_Papers_junction AS link_table ON papers.paper_id = link_table.paper_no JOIN authors ON authors.author_no = link_table.author_no GROUP BY university",
    // Minimum and maximum of the h-index of all authors per university.
    "SELECT university , MAX(h_index), MIN(h_index) from authors  GROUP BY university",
];

export { SQLCreateDatabaseAndTables, SQLMentorRecords, queries };