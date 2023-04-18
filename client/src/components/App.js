import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import MoviePage from "./MoviePage";
import NavBar from "./NavBar";
import Home from "./Home";
import AboutMe from "./AboutMe";
import AccountPage from "./AccountPage";
import { Router } from "react-router-dom/cjs/react-router-dom.min";


function App() {

//////////////////////// setting base state ///////////////////////

    const [customers, setCustomers] = useState([]);
    const [movies, setMovies] = useState([]);
    const [rentals, setRentals] = useState([]);


////////////////////////  Fetches /////////////////////////////////


    useEffect(() => {
    fetch("http://127.0.0.1:5555/customers")
        .then((r) => r.json())
        .then(setCustomers);
    }, []);

    useEffect(() => {
    fetch("http://127.0.0.1:5555/movies")
        .then((r) => r.json())
        .then(setMovies);
    }, []);

    useEffect(() => {
    fetch("http://127.0.0.1:5555/rentals")
        .then((r) => r.json())
        .then(setRentals);
    }, []);


///////////////////////// States for adding new obj ////////////////

    const addMovie = (newMovieObj) => {
        setMovies([...movies, newMovieObj]);
    }

    const addCustomer = (newCustomerObj) => {
        setCustomers([...customers, newCustomerObj])
    }

    const addRental = (newRentalObj) => {
        setRentals([...rentals, newRentalObj])
    }



///////////// Search Stuff /////////////////////

    const [search, setSearch] = useState('')

    const byTitle = movie => {
        if ( movie.title.toLowerCase().includes(search) ) {
            return true
        }
    }

    const byGenre = movie => {
        if ( movie.genre.toLowerCase().includes(search) ) {
            return true
        }
    }

    const byYear = movie => {
        if ( movie.year.toLowerCase().includes(search) ) {
            return true
        }
    }

    const movieSearch = movie => {
        return byTitle(movie) || byYear(movie) || byGenre(movie)
    }

    const searchedMovies = movies.filter( movieSearch )

    const changeSearch = newSearch => setSearch( newSearch.toLowerCase() )

////////////////////////  Delete Filters  //////////////////////

    const deleteCustomer =  (doomedId) => {
        setCustomers(customers.filter(customer => customer.id === doomedId))
    }

    // const deleteRental =  (doomedId) => {
    //     setRentals(rentals.filter(rental => rental.id === doomedId))
    // }




//////////////////////////////////////////////////////////////////////////

    return (
        <div className='App'>
            <header>
                <NavBar className="App-header"/>
                <Switch>
                    <Route path='/movies'>
                        <MoviePage changeSearch={changeSearch} addMovie={addMovie} movies={searchedMovies} className="App-header"/>
                    </Route>
                    <Route path='/account'>
                        <AccountPage className="App-header"/>
                    </Route>
                    <Route path='/aboutme'>
                        <AboutMe className="App-header"/>
                    </Route>
                    <Route path='/'>
                        <Home className="App-header"/>
                    </Route>
                    <Route path='*'>
                        <h1>404 not found</h1>
                    </Route>
                </Switch>
            </header>
        </div>

    );
}

export default App;
