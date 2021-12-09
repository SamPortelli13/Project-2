from flask import Flask, render_template, redirect, jsonify

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, inspect, func


# Database Setup
connection_string = "postgres:headincloud@localhost:5432/ufo_db"
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
def index():
    return render_template("index.html")

@app.route("/data")
def data():

    query = engine.execute('SELECT row_to_json(usa_ufo) FROM usa_ufo LIMIT 1000').fetchall()

    my_list = []

    for i in range(len(query)):
        my_list.append(query[i][0])

    # Convert query results
    return jsonify(my_list)

if __name__ == "__main__":
    app.run(debug=True)
