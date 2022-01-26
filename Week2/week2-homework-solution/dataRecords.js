const authorsRecords = {
    table_name: "authors",
    records: [{
            author_name: "Sam",
            university: "The University of Edinburgh ",
            date_of_birth: "1988-01-03",
            h_index: "7",
            gender: "M",
        },
        {
            author_name: "Ava",
            university: "University of Oxford",
            date_of_birth: "1976-06-010",
            h_index: "4",
            gender: "F",
        },
        {
            author_name: "Luis",
            university: "University of Glasgow",
            date_of_birth: "1984-07-30",
            h_index: "10",
            gender: "M",
        },
        {
            author_name: "Robin",
            university: "The University of Warwick",
            date_of_birth: "1979-11-02",
            h_index: "14",
            gender: "F",
        },
        {
            author_name: "Sebastian",
            university: "The University of Edinburgh",
            date_of_birth: "1990-01-01",
            h_index: "7",
            gender: "M",
        },
        {
            author_name: "Aseel",
            university: "Universiteit Van Amsterdam",
            date_of_birth: "1980-08-24",
            h_index: "5",
            gender: "M",
        },
        {
            author_name: "Adorjan",
            university: "University of Oxford",
            date_of_birth: "1991-10-15",
            h_index: "9",
            gender: "M",
        },
        {
            author_name: " Pietro",
            university: "King's College London",
            date_of_birth: "1979-12-05",
            h_index: "11",
            gender: "M",
        },
        {
            author_name: "Sophie",
            university: "Universiteit Van Amsterdam",
            date_of_birth: "1988-09-25",
            h_index: "7",
            gender: "F",
        },
        {
            author_name: "Oliver",
            university: "Universiteit Van Amsterdam",
            date_of_birth: "1994-04-14",
            h_index: "8",
            gender: "M",
        },
        {
            author_name: "Annalise",
            university: "King's College London",
            date_of_birth: "1972-05-04",
            h_index: "13",
            gender: "F",
        },
        {
            author_name: "Sham",
            university: "University of Cambridge",
            date_of_birth: "1981-04-10",
            h_index: "11",
            gender: "F",
        },
        {
            author_name: "Erik",
            university: "University of Oxford",
            date_of_birth: "1976-05-17",
            h_index: "4",
            gender: "M",
        },
        {
            author_name: "Tamara ",
            university: "University of Oxford",
            date_of_birth: "1971-08-01",
            h_index: "5",
            gender: "F",
        },
        {
            author_name: "Angela",
            university: "King's College London",
            date_of_birth: "1980-12-16",
            h_index: "4",
            gender: "F",
        },
    ],
};

const researchPapersRecords = {
    table_name: "research_Papers",
    records: [{
            paper_title: "What if sword-swallowers ate the swords’ knuсkles?",
            conference: "The Expert Conference ",
            publish_date: "1999-1-01",
        },
        {
            paper_title: "Pop Art and Lady Gaga",
            conference: "Build Your Base",
            publish_date: "2001-05-13",
        },
        {
            paper_title: "Erasing bad memories and keeping good ones",
            conference: "She Leads Conference",
            publish_date: "2001-10-11",
        },
        {
            paper_title: "Cocaine and its effects on bees",
            conference: "She Leads Conference",
            publish_date: "2011-03-15",
        },
        {
            paper_title: "Explore the possibility of unicorns",
            conference: "Build Your Base ",
            publish_date: "2021-02-13",
        },
        {
            paper_title: "Is country music causing suicidal tendencies?",
            conference: "Diversity Conferences ",
            publish_date: "2021-12-24",
        },
        {
            paper_title: "Self-defense using flatulence.",
            conference: "She Leads Conference ",
            publish_date: "2020-07-13",
        },
        {
            paper_title: "Do woodpeckers ever suffer from headaches?",
            conference: "Diversity Conferences ",
            publish_date: "2016-06-24",
        },
        {
            paper_title: "Which breaks a human skull better: Full or empty beer bottles?",
            conference: "She Leads Conference",
            publish_date: "2017-02-01",
        },
        {
            paper_title: "Which is heavier: A pound of lead or feathers?",
            conference: "She Leads Conference",
            publish_date: "2018-03-09",
        },
        {
            paper_title: "Effects of water on breakfast cereal",
            conference: "The Expert Conference ",
            publish_date: "2013-03-14",
        },
        {
            paper_title: "Do falling coconuts pose a threat to people nearby?",
            conference: "The Expert Conference",
            publish_date: "2011-05-26",
        },
        {
            paper_title: "Is alien abduction real? Has it ever taken place?",
            conference: "The Expert Conference",
            publish_date: "2014-11-28",
        },
        {
            paper_title: "Which breaks a human skull better: Full or empty beer bottles?",
            conference: "Conference Creativity ",
            publish_date: "2019-05-07",
        },
        {
            paper_title: "Sex, love, and robots",
            conference: "Conference Creativity ",
            publish_date: "2017-05-28",
        },
        {
            paper_title: "The best music projects of 2020",
            conference: "The Expert Conference ",
            publish_date: "1999-1-01",
        },
        {
            paper_title: "How do reality shows influence teenagers?",
            conference: "Build Your Base",
            publish_date: "2001-05-13",
        },
        {
            paper_title: "Do celebrities form a specific cast in today’s world?",
            conference: "She Leads Conference",
            publish_date: "2001-10-11",
        },
        {
            paper_title: "How much do people depend on heroes? Marvel and DC Cinematic Universes",
            conference: "She Leads Conference",
            publish_date: "2011-03-15",
        },
        {
            paper_title: "How do American and Japanese popular cultures intertwine with each other?",
            conference: "Build Your Base ",
            publish_date: "2021-02-13",
        },
        {
            paper_title: "Sexism and ageism in modern Hollywood",
            conference: "Diversity Conferences ",
            publish_date: "2021-12-24",
        },
        {
            paper_title: "Do shows like American Idol, the Voice, and X-factor really aim to find and develop talents",
            conference: "She Leads Conference ",
            publish_date: "2020-07-13",
        },
        {
            paper_title: "The female role in the world according to Beyonce’s Lemonade",
            conference: "Diversity Conferences ",
            publish_date: "2016-06-24",
        },
        {
            paper_title: "How did YouTube change popular culture?",
            conference: "She Leads Conference",
            publish_date: "2017-02-01",
        },
        {
            paper_title: "The meaning of the Harry Potter Book Series in promoting reading",
            conference: "She Leads Conference",
            publish_date: "2018-03-09",
        },
        {
            paper_title: "How does social media influence interpersonal communication?",
            conference: "The Expert Conference ",
            publish_date: "2013-03-14",
        },
        {
            paper_title: "How can team sports affect social abilities?",
            conference: "The Expert Conference",
            publish_date: "2011-05-26",
        },
        {
            paper_title: "How to deal with social anxiety",
            conference: "The Expert Conference",
            publish_date: "2014-11-28",
        },
        {
            paper_title: "How can one defend privacy issues on Facebook and other social media?",
            conference: "Conference Creativity ",
            publish_date: "2019-05-07",
        },
        {
            paper_title: "How to stop bullying in schools",
            conference: "Conference Creativity ",
            publish_date: "2017-05-28",
        },
    ],
};

const authorPapersRecords = {
    table_name: "author_Papers_junction",
    records: [{
            author_no: 1,
            paper_no: 1,
        },
        {
            author_no: 4,
            paper_no: 1,
        },
        {
            author_no: 1,
            paper_no: 2,
        },
        {
            author_no: 10,
            paper_no: 2,
        },
        {
            author_no: 8,
            paper_no: 2,
        },
        {
            author_no: 2,
            paper_no: 3,
        },
        {
            author_no: 5,
            paper_no: 3,
        },
        {
            author_no: 11,
            paper_no: 4,
        },
        {
            author_no: 10,
            paper_no: 4,
        },
        {
            author_no: 11,
            paper_no: 4,
        },
        {
            author_no: 8,
            paper_no: 5,
        },
        {
            author_no: 1,
            paper_no: 6,
        },
        {
            author_no: 8,
            paper_no: 6,
        },
        {
            author_no: 3,
            paper_no: 7,
        },
        {
            author_no: 9,
            paper_no: 7,
        },
        {
            author_no: 15,
            paper_no: 8,
        },
        {
            author_no: 12,
            paper_no: 9,
        },
        {
            author_no: 14,
            paper_no: 10,
        },
        {
            author_no: 14,
            paper_no: 11,
        },
        {
            author_no: 7,
            paper_no: 12,
        },
        {
            author_no: 5,
            paper_no: 12,
        },
        {
            author_no: 7,
            paper_no: 13,
        },
        {
            author_no: 9,
            paper_no: 14,
        },
        {
            author_no: 3,
            paper_no: 15,
        },
        {
            author_no: 4,
            paper_no: 16,
        },
        {
            author_no: 10,
            paper_no: 17,
        },
        {
            author_no: 7,
            paper_no: 18,
        },
        {
            author_no: 11,
            paper_no: 19,
        },
        {
            author_no: 6,
            paper_no: 20,
        },
        {
            author_no: 9,
            paper_no: 21,
        },
        {
            author_no: 14,
            paper_no: 22,
        },
        {
            author_no: 15,
            paper_no: 23,
        },
        {
            author_no: 8,
            paper_no: 24,
        },
        {
            author_no: 2,
            paper_no: 25,
        },
        {
            author_no: 2,
            paper_no: 20,
        },
        {
            author_no: 14,
            paper_no: 25,
        },
        {
            author_no: 11,
            paper_no: 26,
        },
        {
            author_no: 12,
            paper_no: 27,
        },
        {
            author_no: 7,
            paper_no: 28,
        },
        {
            author_no: 9,
            paper_no: 28,
        },
        {
            author_no: 11,
            paper_no: 29,
        },
        {
            author_no: 13,
            paper_no: 29,
        },
        {
            author_no: 5,
            paper_no: 30,
        },
    ],
};

export { authorsRecords, authorPapersRecords, researchPapersRecords };