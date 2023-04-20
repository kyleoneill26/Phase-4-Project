#!/usr/bin/env python3

from flask import Flask, request, make_response, session
from flask_migrate import Migrate
from flask_restful import Api, Resource
from config import app, db, api
from models import Customer, Movie, Rental

app.secret_key = b"\x7f\x7f(\xe8\x0c('\xa8\xa5\x82pb\t\x1d>rZ\x8c^\x7f\xbb\xe2L|"
class Home(Resource):
    def get(self):
        return make_response("API is running", 200)

api.add_resource(Home, '/')

class Customers(Resource):
    def get(self):
        customers = Customer.query.all()
        customers_dict = [customer.to_dict() for customer in customers]
        if customers == None:
            return make_response( { 'error' : '404: Customers Not Found' } )
        return make_response( customers_dict, 200 )

    def post(self):
        try:
            data = request.get_json()
            new_customer = Customer(
                fname = data['fname'],
                lname = data['lname'],
                email = data['email'],
                phone = data['phone'],
                city = data['city'],
                age = data['age'],
                password = data['password'],
            )
            db.session.add( new_customer )
            db.session.commit()
            customer_dict = new_customer.to_dict()
            return make_response(customer_dict, 200)
        except Exception as e:
            db.session.rollback()
            return make_response( { 'Error' : str(e) }, 422 )

api.add_resource( Customers, '/customers' )

class CustomerById(Resource):

    def get(self, id):
        customer_by_id = Customer.query.filter(Customer.id == id).first()
        customer_by_id_dict = customer_by_id.to_dict()
        if customer_by_id == None:
            return make_response( { 'error' : '404: Customer Not Found' } )
        return make_response( customer_by_id_dict, 200 )

    def patch(self, id):
        customer_by_id = Customer.query.filter(Customer.id == id).first()
        if customer_by_id == None:
            return make_response( { 'error' : '404: Customer Not Found' } )
        for attr in request.get_json():
            setattr(customer_by_id, attr, request.get_json()[attr])
        db.session.add(customer_by_id)
        db.session.commit()
        customer_by_id_dict = customer_by_id.to_dict()
        return make_response( customer_by_id_dict, 201 )

    def delete(self, id):
        customer_by_id = Customer.query.filter(Customer.id == id).first()
        if customer_by_id is None:
            return make_response( { 'error' : '404: Customer Not Found' } )
        db.session.delete(customer_by_id)
        db.session.commit()
        return make_response( { 'msg' : 'sick delete you just did there' } )

api.add_resource( CustomerById, '/customers/<int:id>')

class Movies(Resource):
    def get(self):
        movies = Movie.query.all()
        movies_dict = [movie.to_dict() for movie in movies]
        if movies == None:
            return make_response( { 'error' : '404: Movies Not Found' } )
        return make_response( movies_dict, 200 )
    
    def post(self):
        try:
            data = request.get_json()
            new_movie = Movie(
                title = data['title'],
                image = data['image'],
                year = data['year'],
                rating = data['rating'],
                in_stock = data['in_stock'],
            )
            db.session.add( new_movie )
            db.session.commit()
            movie_dict = new_movie.to_dict()
            return make_response(movie_dict, 200)
        except Exception as e:
            db.session.rollback()
            return make_response( { 'error' : str(e) }, 500 )
    
api.add_resource( Movies, '/movies' )

class MovieById(Resource):
    def get(self, id):
        movie_by_id = Movie.query.filter(Movie.id == id).first()
        movie_by_id_dict = movie_by_id.to_dict()
        if movie_by_id == None:
            return make_response( { 'error' : '404: Movie Not Found' } )
        return make_response( movie_by_id_dict, 200 )
    
api.add_resource( MovieById, '/movies/<int:id>' )

class Rentals(Resource):
    def get(self):
        rentals = Rental.query.all()
        rentals_dict = [rental.to_dict() for rental in rentals]
        if rentals == None:
            return make_response( { 'error' : '404: Rentals Not Found' } )
        return make_response( rentals_dict, 200 )
    
    def post(self):
        data = request.get_json()
        new_rental = Rental(
            customer_id = data['customer_id'],
            movie_id = data['movie_id'],
            rented_date = data['rented_date'],
            due_date = data['due_date'],
        )
        db.session.add( new_rental )
        db.session.commit()
        rental_dict = new_rental.to_dict()
        return make_response(rental_dict, 200)
    
api.add_resource( Rentals, '/rentals' )

class RentalById(Resource):
    def get(self, id):
        rental_by_id = Rental.query.filter(Rental.id == id).first()
        rental_by_id_dict = rental_by_id.to_dict()
        if rental_by_id == None:
            return make_response( { 'error' : '404: Rental Not Found' } )
        return make_response( rental_by_id_dict, 200 )
api.add_resource( RentalById, '/rentals/<int:id>' )

class CheckSession(Resource):

    def get(self):
        customer = Customer.query.filter(Customer.id == session.get('user_id')).first()
        if customer:
            return customer.to_dict()
        else:
            return {'message': '401: Not Authorized'}, 401

api.add_resource(CheckSession, '/check_session')

class Login(Resource):

    def post(self):
        customer = Customer.query.filter(
            Customer.email == request.get_json()['email']
        ).first()
        
        if customer.password == request.get_json()['password']:
            session['user_id'] = customer.id
            return customer.to_dict()
        else:
            return {'message': '401: Not Authorized'}, 401

api.add_resource(Login, '/login')

class Logout(Resource):

    def delete(self):
        session['user_id'] = None
        return {'message': '204: No Content'}, 204

api.add_resource(Logout, '/logout')

if __name__ == '__main__':
    app.run(port=5555, debug=True)