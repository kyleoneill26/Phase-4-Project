#!/usr/bin/env python3

from flask import Flask, request, make_response
from flask_migrate import Migrate
from flask_restful import Api, Resource
from config import app, db, api
from models import Customer, Movie, Rental, Review



class Customer(Resource):
    def get(self):
        customers = Customer.query.all()
        customers_dict = [customer.to_dict() for customer in customers]
        if customers == None:
            return make_response( { 'error' : '404: Customers Not Found' } )
        return make_response( customers_dict, 200 )

    def post(self):

        ### does there need to be a try block here?
        data = request.get_json()
        new_customer = Customer(
            fname = data['fname'],
            lname = data['lname'],
            age = data['age'],
            phone = data['phone'],
            address = data['address'],
        )
        db.session.add( new_customer )
        db.session.commit()
        customer_dict = new_customer.to_dict()
        return make_response(customer_dict, 201)

api.add_resource( Customer, '/customer' )

class CustomerById(Resource):
    pass
api.add_resource( CustomerById, '/customer/<int:id>')

class Movie(Resource):
    pass
api.add_resource( Movie, '/movie' )

class MovieById(Resource):
    pass
api.add_resource( Movie, '/movie/<int:id>' )

class Rental(Resource):
    pass
api.add_resource( Rental, '/rental' )

class RentalById(Resource):
    pass
api.add_resource( Rental, '/rental/<int:id>' )

class Review(Resource):
    pass
api.add_resource( Review, '/review' )

class ReviewById(Resource):
    pass
api.add_resource( Review, '/review/<int:id>' )


if __name__ == '__main__':
    app.run(port=5555, debug=True)
