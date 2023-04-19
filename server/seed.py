#!/usr/bin/env python3

# Local imports
import datetime
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from datetime import date
from app import app
from models import db, Customer, Movie, Rental

if __name__ == '__main__':
    with app.app_context():
        print("Starting seed...")
        # Seed code goes here!
    
        engine = create_engine('sqlite:///instance/app.db')
        Session = sessionmaker(bind=engine)
        session = Session()
        
        session.query(Customer).delete()
        session.query(Movie).delete()
        session.query(Rental).delete()
        
        scott_henry = Customer(
        fname="Scott",
        lname="Henry",
        password="gottem",
        age="44",
        phone="5132279750",
        city="Maplewood",
        email="scotthenry1@gmail.com",
        )
        
        kyle_oneill = Customer(
        fname="Kyle",
        lname="Oneill",
        password="sickpassword",
        age="25",
        phone="1234567890",
        city="Somewhere",
        email="kyle@email.com",
        )
        
        jesse_hunter = Customer(
        fname="Jesse",
        lname="Hunter",
        password="haha420",
        age="25",
        phone="1234567890",
        city="Nowhere",
        email="jesse@email.com",
        )
        
        predator = Movie(
        title="Predator",
        genre="Sci-Fi",
        image="https://upload.wikimedia.org/wikipedia/en/9/95/Predator_Movie.jpg",
        year="1987",
        rating="R",
        in_stock=False,
        )
        
        terminator = Movie(
        title="The Terminator",
        genre="Sci-Fi",
        image="https://upload.wikimedia.org/wikipedia/en/7/70/Terminator1984movieposter.jpg",
        year="1984",
        rating="R",
        in_stock=False,
        )
        
        top_gun = Movie(
        title="Top Gun",
        genre="Action",
        image="https://upload.wikimedia.org/wikipedia/en/4/46/Top_Gun_Movie.jpg",
        year="1986",
        rating="R",
        in_stock=False,
        )
        
        the_color_of_money = Movie(
        title="The Color of Money",
        genre="Drama",
        image="https://upload.wikimedia.org/wikipedia/en/a/a9/The_Color_Of_Money.jpg",
        year="1984",
        rating="R",
        in_stock=True,
        )
        
        rental1 = Rental(
        customer_id="1",
        movie_id="1",
        rented_date=datetime.date.today(),
        due_date=datetime.date.today() + datetime.timedelta(days=2)
        )
        
        rental2 = Rental(
        customer_id="2",
        movie_id="2",
        rented_date=datetime.date.today(),
        due_date=datetime.date.today() + datetime.timedelta(days=2)
        )
        
        rental3 = Rental(
        customer_id="3",
        movie_id="3",
        rented_date=datetime.date.today(),
        due_date=datetime.date.today() + datetime.timedelta(days=2)
        )

    session.bulk_save_objects([scott_henry, kyle_oneill, jesse_hunter, predator, terminator, top_gun, the_color_of_money, rental1, rental2, rental3])
    session.commit()
    session.close()



        
