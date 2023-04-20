import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { LazyLoadImage } from "react-lazy-load-image-component";
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function MovieCard({movie}) {
    


    
      return (
        
        <>
          <Row xs={1} md={2} className="g-4"></Row>
            <Card
            
            style={{
                width: "15%",
                background: "#161616",
                color: "white",
                borderRadius: 6,
                //position: "absolute",
              }}
              className=" movie-card"
            >
            
                
              <Card.Header>{movie.title}</Card.Header>
              <Card.Body>
              <LazyLoadImage
                        src={movie.image}
                        width={"100%"}
                        height={350}
                        alt="movie"
                      
                        style={{ objectFit: "fill" }}
                        />
                        <Card.Title
                        
                        className="text-center mt-3"
                        style={{ cursor: "pointer" }}
                        >
                        {movie.year && movie.genre}
                        </Card.Title> 
                
                
              </Card.Body>
            </Card>
          
        </>
      );
    }
    
export default MovieCard;
