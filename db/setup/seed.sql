CREATE TABLE users(
    user_id SERIAL PRIMARY KEY, 
    email VARCHAR,
    first_name VARCHAR(50),
    last_name VARCHAR(50)
);

CREATE TABLE journal_entry (
    journal_entry_id SERIAL PRIMARY KEY, 
    journal_text VARCHAR(500),
    journal_title VARCHAR(50), 
    user_id_fk INT REFERENCES users(user_id),
    date_created TIMESTAMP
    );


CREATE TABLE comments (
    comments_id SERIAL PRIMARY KEY, 
    comment_text VARCHAR(500),
    journal_entry_fk INT REFERENCES journal_entry(journal_entry_id),
    user_id_fk REFERENCES users(user_id),
    date_created TIMESTAMP
    
);
