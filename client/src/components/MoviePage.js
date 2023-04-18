import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import SearchMovies from './SearchMovies';
import AddMovieForm from './AddMovieForm';


function MoviePage({changeSearch, addMovie, movies}) {

    const moviesComponents = movies.map(movie => <MovieCard key={movie.id} movie={movie} />)

    // const []

	return (
        // <SearchMovies changeSearch={changeSearch}/>
        // <div>
        //     <h2> Movies list</h2>
        //     <div className="formdiv">
        //         </>
        // </div>
        <div className= "card div">
            {moviesComponents}
        </div>


	)
}

export default MoviePage;
