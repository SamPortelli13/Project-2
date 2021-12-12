from flask import Flask, render_template, redirect, jsonify

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, inspect, func
import json


# Database Setup
connection_string = "postgres:Golfer7!@localhost:5432/ufo_db"
engine = create_engine(f'postgresql://{connection_string}')

# reflect an existing database into a new model
Base = automap_base()

# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
usa_table = Base.classes.usa_ufo

# Flask Routes

app = Flask(__name__)

@app.route("/")
def welcome():
    return render_template("dashboard.html")
#    """Available api route."""
#    return (
#        f"Web site for Serving UFO data is up and running!<br/><br/>"
#        f"Available Route:<br/>"
#        f"/data"
#    )

@app.route("/map")
def map():
    return render_template("map.html")


@app.route("/data")
def data(): 

    query = engine.execute('SELECT row_to_json(t) FROM (select city, city_latitude, city_longitude, date, duration, state, shape, summary, time from usa_ufo) t LIMIT 5000').fetchall()
#    query = engine.execute('SELECT row_to_json(usa_ufo) FROM usa_ufo LIMIT 100').fetchall()
    my_list = []

    for i in range(len(query)):
        my_list.append(query[i][0])

    # Convert query results
    # jsonString = json.dumps(my_list)
    # jsonFile = open("./Resources/data.json","w")
    # jsonFile.write(jsonString)
    # jsonFile.close()

    return jsonify(my_list)

if __name__ == "__main__":
    app.run(debug=True )
