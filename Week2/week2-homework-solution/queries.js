const queries = [
    //JOINS ex3
    //Write a query that prints names of all authors and their corresponding mentors.
    "SELECT A.author_name , B.author_name AS mentor FROM  authors AS A JOIN authors AS B WHERE A.author_no = B.mentor ",
    //Write a query that prints all columns of authors and their published paper_title. If there is an author without any research_Papers, print the information of that author too.
    "SELECT authors.* , papers.paper_title FROM authors LEFT JOIN author_Papers_junction AS link_table ON authors.author_no = link_table.author_no LEFT JOIN research_Papers AS papers ON papers.paper_id = link_table.paper_no",
    //Aggregate Functions ex4
    //All research papers and the number of authors that wrote that paper.
    "SELECT papers.paper_title ,authors.author_no FROM research_Papers AS papers JOIN  author_Papers_junction AS link_table ON papers.paper_id = link_table.paper_no JOIN authors ON authors.author_no = link_table.author_no",
    //Sum of the research papers published by all female authors.
    "SELECT count(paper_id) AS papers_by_female_authors from research_Papers AS papers JOIN  author_Papers_junction AS link_table ON papers.paper_id = link_table.paper_no JOIN authors ON authors.author_no = link_table.author_no WHERE authors.gender ='F'",
    //Average of the h-index of all authors per university.
    "SELECT university , AVG(h_index) AS h_index_Average FROM authors GROUP BY university",
    //Sum of the research papers of the authors per university.
    "SELECT university , count(paper_id) AS number_OF_research_paper_per_this_university from research_Papers AS papers JOIN  author_Papers_junction AS link_table ON papers.paper_id = link_table.paper_no JOIN authors ON authors.author_no = link_table.author_no GROUP BY university",
    // Minimum and maximum of the h-index of all authors per university.
    "SELECT university , MAX(h_index), MIN(h_index) from authors  GROUP BY university",
];

export default queries;