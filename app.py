from flask import Flask, render_template, redirect, jsonify

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, inspect, func
import json
from datetime import datetime
from pathlib import Path

import time

  
# Database Setup
connection_string = "postgres:Golfer7!@localhost:5432/ufo_db"
engine = create_engine(f'postgresql://{connection_string}')

# reflect an existing database into a new model
Base = automap_base()

# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
ufo_table = Base.classes.all_countries_ufos

# Flask Routes

app = Flask(__name__)

@app.route("/")
def welcome():
    return render_template("index.html")



@app.route("/map")
def map():
    # File path setup & transfer of filtered file
    from pathlib import Path
    src_files_loc = Path("/Users/sampo/downloads")
    dest_files_loc = Path("./static/Resources")
    print("source files: ", src_files_loc)
    print("dest files: ", dest_files_loc)
    for file in src_files_loc.iterdir():
        if (file.stem == "filtered"): 
            print("found filtered: ",file.stem,"  suffix: ", file.suffix)
            new_file_path = dest_files_loc.joinpath(f"{file.stem}{file.suffix}")
            print("new file path-name: ",new_file_path)
            file.replace(new_file_path)


    return render_template("map.html")

@app.route("/charts")
def charts():
    # File path setup & transfer of filtered file

    return render_template("charts.html")


@app.route("/movefile")
def movefile():
    # File path setup & transfer of filtered file
    from pathlib import Path
    src_files_loc = Path("/Users/sampo/downloads")
    dest_files_loc = Path("./static/Resources")
    print("source files: ", src_files_loc)
    print("dest files: ", dest_files_loc)
    for file in src_files_loc.iterdir():
        if (file.stem == "filtered"): 
            print("found filtered: ",file.stem,"  suffix: ", file.suffix)
            new_file_path = dest_files_loc.joinpath(f"{file.stem}{file.suffix}")
            print("new file path-name: ",new_file_path)
            file.replace(new_file_path)
    return ("Move done")

@app.route("/data")
def data(): 

    query = engine.execute('SELECT row_to_json(t) FROM (select country, city, city_latitude, city_longitude, date, duration, state, shape, summary, time from all_countries_ufos) t LIMIT 10000').fetchall()
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
