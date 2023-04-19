import React from 'react'
import {NavLink} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SearchMovies from './SearchMovies';



function NavBar() {
  return (
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="./">Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="mynavbar">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link" href="/movies">Movies</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/account">Account</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/aboutme">About Me</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
  );
}


 
export default NavBar ;
