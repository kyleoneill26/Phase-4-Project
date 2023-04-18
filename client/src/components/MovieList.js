import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

function MovieList({movies}) {

    const movieCardArray = movies.map( movieObj => {
      return <MovieCard key={movieObj.id} movie={movieObj} />  
    } )
  
  return (
      <div>{movieCardArray}</div>
    );
}

export default MovieList;
