from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin
from config import db

class Customer(db.Model, SerializerMixin):
    __tablename__ = 'customers'
    
    serialize_rules= ('-rentals',)

    id = db.Column(db.Integer, primary_key=True)
    fname = db.Column(db.String(255))
    lname = db.Column(db.String(255))
    email = db.Column(db.String(255), nullable=False, unique=True)
    phone = db.Column(db.String(255))
    city = db.Column(db.String(255))
    age = db.Column(db.Integer)
    password = db.Column(db.String(255), nullable=False)
    rentals = db.relationship('Rental', backref='customer')
    reviews = db.relationship('Review', backref='customer')
    
    @validates('email')
    def validate_email(self, key, email):
        if email == None:
            raise ValueError("Must provide an email address")
        return email
    
class Movie(db.Model, SerializerMixin):
    __tablename__ = 'movies'
    
    serialize_rules= ('-rentals',)

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255))
    image = db.Column(db.String(255))
    genre = db.Column(db.String(255))
    year = db.Column(db.String(100))
    rating = db.Column(db.String(255))
    in_stock = db.Column(db.Boolean)
    rentals = db.relationship('Rental', backref='movie')

class Rental(db.Model, SerializerMixin):
    __tablename__ = 'rentals'
    
    serialize_rules= ('-customer.rentals', '-movie.rentals')

    id = db.Column(db.Integer, primary_key=True)
    customer_id = db.Column(db.Integer, db.ForeignKey('customers.id'), nullable=False)
    movie_id = db.Column(db.Integer, db.ForeignKey('movies.id'), nullable=False)
    rented_date = db.Column(db.types.DateTime)
    due_date = db.Column(db.types.DateTime)
