CREATE TABLE "sightings" (
    country_id INTEGER NOT NULL,
    summary VARCHAR,
    city_id VARCHAR,
    state VARCHAR,
    shape VARCHAR,
    duration VARCHAR,
    date VARCHAR,
    time VARCHAR
);

table city(
     city_id,
     city_name,
     city_longitude,
     city_latitude,
);

CREATE TABLE "country" (
   	Country_Abbreviation VARCHAR,
    Country_ID INTEGER NOT NULL,
    Developed_Or_Developing VARCHAR,
    Country_Name VARCHAR   NOT NULL,
	PRIMARY KEY (Country_ID)
);
