import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import SearchMovies from './SearchMovies';


function MoviePage({changeSearch}) {

    const moviesComponents = 'insert mapped array of movies from DB'



	return (
        <SearchMovies changeSearch={changeSearch}/>
        

	)
}

export default MoviePage;
