CREATE TABLE "country" (
   	country_id INTEGER NOT NULL,
    country_abbreviation VARCHAR,
    country_name VARCHAR   NOT NULL,
	PRIMARY KEY (country_id)
);

CREATE TABLE "sightings" (
    report_id SERIAL PRIMARY KEY,
    country_id INTEGER NOT NULL,
    summary VARCHAR,
    city VARCHAR,
    state VARCHAR,
    shape VARCHAR,
    duration VARCHAR,
    city_latitude FLOAT8,
    city_longitude FLOAT8,
    date DATE,
    time VARCHAR,
    FOREIGN KEY (country_id) REFERENCES country(country_id)
);
