from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin
from config import db

metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    "uq": "uq_%(table_name)s_%(column_0_name)s",
    "ck": "ck_%(table_name)s_%(constraint_name)s",
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db = SQLAlchemy(metadata=metadata)

class Customer(db.Model, SerializerMixin):
    __tablename__ = 'customers'
    
    serialize_rules= ('-rentals', '-reviews')

    id = db.Column(db.Integer, primary_key=True)
    fname = db.Column(db.String(255))
    lname = db.Column(db.String(255))
    age = db.Column(db.Integer)
    phone = db.Column(db.String(255))
    address = db.Column(db.String(255))
    rentals = db.relationship('rental', backref='customer')
    reviews = db.relationship('review', backref='customer')
    
class Movie(db.Model, SerializerMixin):
    __tablename__ = 'movies'
    
    serialize_rules= ('-rentals', '-reviews')

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255))
    genre = db.Column(db.String(255))
    rating = db.Column(db.String(255))
    in_stock = db.Column(db.Boolean)
    rentals = db.relationship('rental', backref='movie')
    reviews = db.relationship('review', backref='movie')

class Rental(db.Model, SerializerMixin):
    __tablename__ = 'rentals'
    
    serialize_rules= ('-customer.rentals', '-movie.rentals')

    id = db.Column(db.Integer, primary_key=True)
    customer_id = db.Column(db.Integer, db.ForeignKey('customers.id'))
    movie_id = db.Column(db.Integer, db.ForeignKey('movies.id'))
    rented_date = db.Column(db.types.DateTime)
    due_date = db.Column(db.types.DateTime)
    
class Review(db.Model, SerializerMixin):
    __tablename__ = 'reviews'
    
    serialize_rules= ('-customer.reviews', '-movie.reviews')

    id = db.Column(db.Integer, primary_key=True)
    customer_id = db.Column(db.Integer, db.ForeignKey('customers.id'))
    movie_id = db.Column(db.Integer, db.ForeignKey('movies.id'))
    rating = db.Column(db.Integer)