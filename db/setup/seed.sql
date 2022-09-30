CREATE TABLE users(
    user_id SERIAL PRIMARY KEY, 
    email VARCHAR,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
);

CREATE TABLE journal_entry (
    journal_entry_id SERIAL PRIMARY KEY, 
    journal_entry TEXT REFERENCES email,
    journal_timestamp TIMESTAMP,
    );


CREATE TABLE comments (
    comments_id SERIAL PRIMARY KEY, 
    user_comments TEXT REFERENCES email,
    user_comments TIMESTAMP,
    
);
