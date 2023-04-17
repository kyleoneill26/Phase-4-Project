import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import CustomerList from "./CustomerList";
import MovieList from "./MovieList";

function App() {

  const [customers, setCustomers] = useState([]);
  const [movies, setMovies] = useState([]);

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

  return (
    <Route exact path="/">
      <div>Homepage!</div>
      <br></br>
      <div>Customers:</div>
      <CustomerList customers={customers} />
      <br></br>
      <div>Movies:</div>
      <MovieList movies={movies} />
    </Route>
  );
}

export default App;
