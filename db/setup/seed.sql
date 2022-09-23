CREATE TABLE users(
    email VARCHAR PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
);

CREATE TABLE journal_entry (
    journal_entry TEXT REFERENCES email,
    journal_timestamp TIMESTAMP,
    );


CREATE TABLE comments (
    user_comments TEXT REFERENCES email,
    user_comments TIMESTAMP,
    
);
