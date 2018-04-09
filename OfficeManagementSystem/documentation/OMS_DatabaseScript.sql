
CREATE TABLE USER(
	user_id INT AUTO_INCREMENT,
	user_name VARCHAR(50) NOT NULL UNIQUE,
	PASSWORD VARCHAR(50) NOT NULL,
	first_name VARCHAR (50),
	last_name VARCHAR(50),
	email_id VARCHAR(50),
	PRIMARY KEY(user_id)
)

INSERT INTO USER(user_name, PASSWORD, first_name, last_name, email_id) VALUES( 'admin', 'admin', 'Scott', 'Tiger', 'admin@gmail.com');
INSERT INTO USER(user_name, PASSWORD, first_name, last_name, email_id) VALUES( 'rama', 'admin', 'Scott', 'Tiger', 'rama@gmail.com');

