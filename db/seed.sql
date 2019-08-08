CREATE TABLE user_info(
user_id SERIAL PRIMARY KEY,
usename VARCHAR(50),
email VARCHAR(100)
);

CREATE TABLE credentials(
user_id INT,
hash TEXT
);

CREATE TABLE account(
account_id SERIAL PRIMARY KEY,
user_id INT REFERENCES user_info(user_id),
account_number INT,
account_balance INT
);

CREATE TABLE transfer(
transfer_id SERIAL PRIMARY KEY,
account_id INT REFERENCES account(account_id),
transfer_type VARCHAR(20),
transfer_amount INT
);

SELECT * FROM user_info
WHERE email = "spencer.com";

INSERT INTO credentials(user_id, hash)
VALUES
(${user_id}, ${hash})
RETURNING *;

INSERT INTO user_info(username, email)
VALUES
(${username}, ${email})
RETURNING *;

SELECT * FROM user_info
WHERE email = $1