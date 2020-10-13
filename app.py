import pandas as pd
import numpy as np
import psycopg2
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
from flask import Flask, jsonify, render_template
from flask_cors import CORS


#############################################################################
##DATABASE SET UP
# <<<<<<< HEAD
engine = create_engine('postgresql://postgres:Sunnyisblack182!@localhost/DogsandCats')
# =======
# engine = create_engine('postgresql://postgres:Sunnyisblack182!@localhost/DogsandCats')
# >>>>>>> 622ced76c4443513abbe54cdbebdf6cbed1cecc0
conn = engine.connect()

##Flask Setup
app = Flask(__name__)
CORS(app)

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
    return render_template("markermap.html")  

##Flask Route for lat/long both cats and dogs
@app.route("/both")
def both():
    latLong_df= pd.read_sql("select * from latLong", conn)
    likes_both = latLong_df.loc[latLong_df["pets"] == "likes both",:]
    likes_both = likes_both.to_json(orient='records')
    return likes_both


##Flask Route for lat/long likes cats
@app.route("/cats")
def cats():
    latLong_df= pd.read_sql("select * from latLong", conn)
    likes_cats = latLong_df.loc[latLong_df["pets"] == "likes cats",:]
    cats = likes_cats.to_json(orient='records')
    return cats

##Flask Route for lat/long likes dogs
@app.route("/dogs")
def dogs():
    latLong_df= pd.read_sql("select * from latLong", conn)
    likes_dogs = latLong_df.loc[latLong_df["pets"] == "likes dogs",:]
    likes_dogs = likes_dogs.to_json(orient='records')
    return likes_dogs


##Flask Route for lat/long both cats and dogs
@app.route("/secretsboth")
def secretsboth():
    secrets_df= pd.read_sql("select * from secrets", conn)
    secrets_both_df = secrets_df.loc[secrets_df["pets"] == "likes both",:]
    secrets_both = secrets_both_df.to_json(orient='records')
    return secrets_both

##Flask Route for lat/long likes cats
@app.route("/secretscats")
def secretsscats():
    secrets_df= pd.read_sql("select * from secrets", conn)
    secrets_cats_df = secrets_df.loc[secrets_df["pets"] == "likes cats",:]
    secrets_cats = secrets_cats_df.to_json(orient='records')
    return secrets_cats

##Flask Route for lat/long likes dogs
@app.route("/secretsdogs")
def secretsdogs():
    secrets_df= pd.read_sql("select * from secrets", conn)
    secrets_dogs_df = secrets_df.loc[secrets_df["pets"] == "likes dogs",:]
    secrets_dogs = secrets_dogs_df.to_json(orient='records')
    return secrets_dogs

if __name__ == '__main__':
    app.run(debug=True)