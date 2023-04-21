import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



function MovieCard({movie}) {
    
   

    
      return (
       
        <div class= "row-gy3" className="moviespagebackground">
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
        
            }
     
    
export default MovieCard;
