import pandas as pd
import numpy as np
import psycopg2
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
from flask import Flask, jsonify

#############################################################################
##DATABASE SET UP
engine = create_engine('postgresql://postgres:Emzy3314@localhost/DogsandCats')
conn = engine.connect()

##REFLECT EXISTING DB INTO NEW MODEL 
#Base = automap_base()

##reflect the tables
#Base.prepare(engine, reflect=True)

#Print all of the classes mapped to the Base
#Base.classes.keys()

# Assign the demographics class to a variable called `Dogs&Cats`
#DogsCats = Base.classes.demographics

# Create a session
#session = Session(engine)

#Use the session to query Demographics table and display the first 5 locations
#for row in session.query().limit(5).all():
    #print(row)

##Flask Setup
app = Flask(__name__)

##Flask Routes
@app.route("/jobs")
def jobs():
    jobs_df= pd.read_sql("select * from jobs", conn)
    jobs_data = jobs_df.to_json(orient='records')
    return jobs_data

if __name__ == '__main__':
    app.run(debug=True)