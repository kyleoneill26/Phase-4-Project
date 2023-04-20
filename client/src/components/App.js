import React, { useEffect, useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import MoviePage from "./MoviePage";
import NavBar from "./NavBar";
import Home from "./Home";
import AboutMe from "./AboutMe";
import AccountPage from "./AccountPage";
import CreateAccount from "./CreateAccount";
import UpdateAccount from "./UpdateAccount";
import LoginPage from "./LoginPage";
import RentalsPage from "./RentalsPage";

function App() {

//////////////////////// setting base state ///////////////////////

    const API_KEY = `b"\x7f\x7f(\xe8\x0c('\xa8\xa5\x82pb\t\x1d>rZ\x8c^\x7f\xbb\xe2L|"`

    const [customers, setCustomers] = useState([]);
    const [movies, setMovies] = useState([]);
    const [rentals, setRentals] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);

    function onLogout() {
        setCurrentUser(null);
    }

    function onLogin(user) {
        setCurrentUser(user);
    }

    function onDeleteAccount() {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({id: currentUser.id})
        };
        fetch(`/customers/${currentUser.id}`, requestOptions)
            .then(setCurrentUser(null))
    }

////////////////////////  Fetches //////////
////////////////////////  Fetches /////////////////////////////////

    useEffect(() => {
    fetch("/check_session").then((response) => {
        if (response.ok) {
            response.json().then((customer) => setCurrentUser(customer));
        }
    });
    }, []);

    useEffect(() => {
    fetch('/customers')
        .then((r) => r.json())
        .then(setCustomers);
    }, []);

    useEffect(() => {
    fetch('/movies')
        .then((r) => r.json())
        .then(setMovies);
    }, []);

    useEffect(() => {
    fetch('/rentals')
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
                { currentUser ? (<div>Welcome, {currentUser.fname} {currentUser.lname}!</div>) : <div><NavLink className='NavLink' exact to = '/login'>Login</NavLink></div>}
                <NavBar className="App-header"/>
                <Switch>
                    <Route path='/movies'>
                        <MoviePage changeSearch={changeSearch} addMovie={addMovie} movies={searchedMovies} className="App-header"/>
                    </Route>
                    <Route path='/account'>
                        <AccountPage className="App-header" currentUser={currentUser} onLogout={onLogout} />
                    </Route>
                    <Route path='/aboutme'>
                        <AboutMe className="App-header"/>
                    </Route>
                    <Route path='/login'>
                        <LoginPage className="App-header" currentUser={currentUser} onLogin={onLogin} onLogout={onLogout} />
                    </Route>
                    <Route path='/register'>
                        <CreateAccount className="App-header" currentUser={currentUser} onLogout={onLogout} />
                    </Route>
                    <Route path='/update_account'>
                        <UpdateAccount className="App-header" currentUser={currentUser} onLogout={onLogout} onDeleteAccount={onDeleteAccount} />
                    </Route>
                    <Route path='my_rentals'>
                        <RentalsPage className="App-header" rentals= {rentals} currentUser={currentUser} onLogout={onLogout} /> // FIXME: do we need current user pushed all the way through?
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
