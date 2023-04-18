import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import MoviePage from "./MoviePage";
import NavBar from "./NavBar";
import Home from "./Home";
import AboutMe from "./AboutMe";
import AccountPage from "./AccountPage";
import { Router } from "react-router-dom/cjs/react-router-dom.min";


function App() {

    const [customers, setCustomers] = useState([]);
    const [movies, setMovies] = useState([]);

    // useEffect(() => {
    //   fetch("http://127.0.0.1:5555/customers")
    //     .then((r) => r.json())
    //     .then(setCustomers);
    // }, []);

    useEffect(() => {
    fetch("http://127.0.0.1:5555/movies")
        .then((r) => r.json())
        .then(setMovies);
    }, []);



//////////////////////////////////////////////////////////////////////////

    return (
        <div className='App'>
            <header>
                <NavBar className="App-header"/>
                <Switch>
                    <Route path='/movies'>
                        <MoviePage className="App-header"/>
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
