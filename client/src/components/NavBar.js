import React from 'react'
import {NavLink} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SearchMovies from './SearchMovies';



function NavBar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="./">Home</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link" href="/movies">Movies</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/account">Account</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/aboutme">About Me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/my_rentals">My Rentals</a>
          </li>
      </ul>
      
    </div>
  </div>
</nav>
  );
}



export default NavBar ;
