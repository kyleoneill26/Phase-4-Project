import React from "react";
import Card from 'react-bootstrap/Card';
import { motion } from "framer-motion";
import Image from 'react-bootstrap/Image'


function RentalCard({rental, movie}) {

    return (
        <div class= "row-gy3">
        <Card style={{
          width: "40%",
          background: "#161616",
          
          borderRadius: 6,
          position: "relative",
        }}
        className=" movie-card">
      <div class="card">
  <div class="row">
    <div class="col-md-4">
      <img src={movie.image} class="img-fluid rounded-start" alt="..." />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{movie.title}</h5>
        <p class="card-text">{movie.genre}</p>
        <p class="card-text"><small class="text-muted">{movie.year}</small></p>
      </div>
    </div>
  </div>
</div>
    </Card>
    </div>
      
  );
        







    return (
        <div>RentalCard</div>
    )
}

export default RentalCard