#!/usr/bin/env python3

from flask import Flask, request, make_response
from flask_migrate import Migrate
from flask_restful import Api, Resource
from config import *
from models import Customer, Movie, Rental



# Views go here!

if __name__ == '__main__':
    app.run(port=5555, debug=True)
