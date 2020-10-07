import numpy as np
import psycopg2
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
from flask import Flask, jsonify

#############################################################################
##DATABASE SET UP
engine = create_engine('postgresql://postgres:Emzy3314@localhost/d&g')

##REFLECT EXISTING DB INTO NEW MODEL 
Base = automap_base()

##reflect the tables
Base.prepare(engine, reflect=True)

#Print all of the classes mapped to the Base
Base.classes.keys()

##Flask Setup
app = Flask(__name__)

##Flask Routes
@app.route("/")