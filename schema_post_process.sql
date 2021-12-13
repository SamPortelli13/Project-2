CREATE table all_countries_ufos
 AS
 SELECT a.report_id ,
    a.country_id,
    a.summary,
    a.city,
    a.state,
    a.shape,
    a.duration,
    a.city_latitude,
    a.city_longitude,
    a.date,
    a."time",
    b.country_name
   FROM sightings a
     LEFT JOIN country b ON a.country_id = b.country_id;

ALTER TABLE all_countries_ufos ADD PRIMARY KEY (report_id);