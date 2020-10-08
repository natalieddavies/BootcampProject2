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

##Flask Setup
app = Flask(__name__)

##Flask Route to ipynb jobs dataframe
@app.route("/jobs")
def jobs():
    jobs_df= pd.read_sql("select * from jobs", conn)
    jobs_data = jobs_df.to_json(orient='records')
    return jobs_data

##Flask Route to ipynb latitude/longitude dataframe
@app.route("/latlong")
def latlong():
    latLong_df= pd.read_sql("select * from latLong", conn)
    latlong_data = latLong_df.to_json(orient='records')
    return latlong_data

##Flask Route to ipynb star signs jobs dataframe
@app.route("/starsigns")
def starsigns():
    signs_df= pd.read_sql("select * from starsigns", conn)
    signs_data = signs_df.to_json(orient='records')
    return signs_data   

##Create Landing page
@app.route("/")
def home():
    return "/jobs for jobs, /latlong for locations, /starsigns for starsigns"    

##Flask Route for lat/long both cats and dogs
@app.route("/both")
def both():
    likes_both = likes_both.to_json(orient='records')
    return likes_both


##Flask Route for lat/long likes cats
@app.route("/cats")
def cats():
    likes_cats = likes_cats.to_json(orient='records')
    return likes_cats

##Flask Route for lat/long likes dogs
@app.route("/dogs")
def dogs():
    likes_dogs = likes_dogs.to_json(orient='records')
    return likes_dogs


if __name__ == '__main__':
    app.run(debug=True)