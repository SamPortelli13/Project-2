# Project-2

### Instructions for running the UFO Sightings application
### ------------------------------------------------------------
####  1.  Unzip the file ufo_reports_raw.zip in the static > Resources folder and store the csv file there.
####  2.  In Postgres, create the database called ufo_db and create the tables using the schema.sql sql statements.
####  3. Run the two jupyter notebooks one after the other to transform the csv data into a Postgres database.  First run the cleaning.ipynb notebook followed by the loading.ipynb notebook. At the end of processing these two notebooks, the Postres database will then be available 
####  4. In Postgres, create the combined table, called all_countries_ufos using the schema_post_process.sql sql statements.
####  5. Start up Visual studio code and open the Project-2 folder. Run app.py, which will start up the main index.html page with the filtering options.
####  6. If you press the Filter button, you get all available data displayed on the screen. You can then select any filtering of data based on any of the available fields.  Once you have hit the Filter button, the data is then available in the Maps screen and the Charts screen - see the navigation on the top right hand corner of the screen.  Note:  To return to the main screen, click on the top right hand UFO image "Ufo Sightings".
####  7. You will note that a file is downloaded at the bottom of the screen - please ignore this, as this is a json file that is exchanged between the filter web page and the other web pages.
####  
####  8.  Note re cache clearing:  You will find that with every filter button clicked, that the map/chart web pages will only show the current filter after the previous cache is cleared.  This is done by going to Browser (Chrome) Settings > Privacy and security > Clear browsing data > "tick" cached images and files > click on <clear data>.
