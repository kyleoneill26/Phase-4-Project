import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import SearchMovies from './SearchMovies';
import AddMovieForm from './AddMovieForm';


function MoviePage({changeSearch, addMovie, movies}) {

    const moviesComponents = movies.map(movie => <MovieCard key={movie.id} movie={movie} />)

    // const []

	return (
        <main>
            <SearchMovies changeSearch={changeSearch}/>
            <div className= "card div">
                {moviesComponents}
            </div>
        </main>

    

	)
}

export default MoviePage;
