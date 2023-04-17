import React, { useState, useEffect } from 'react';
import Movie from './Movie';

function MovieList({movies}) {

    const movieArray = movies.map( movieObj => {
      return <Movie key={movieObj.id} movie={movieObj} />  
    } )
  
  return (
      <div>{movieArray}</div>
    );
}

export default MovieList;
