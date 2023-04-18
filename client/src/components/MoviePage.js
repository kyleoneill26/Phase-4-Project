import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import SearchMovies from './SearchMovies';
import AddMovieForm from './AddMovieForm';


function MoviePage({changeSearch, addMovie, movies}) {

    const moviesComponents = movies.map(movie => <MovieCard key={movie.id} movie={movie} />)


    const [hideMovieForm, setHideMovieForm] = useState(true)
    const handleHideMovieForm = () => {
        setHideMovieForm(hideMovieForm => !hideMovieForm)
    }

    function FormButton({handleHideMovieForm}) {
        return(
            <button onClick={handleHideMovieForm} className="hideFormButton">Add a Movie</button>
        )
    }


	return (
        <main>
            <SearchMovies changeSearch={changeSearch}/>
            <div className="formdiv">
                {hideMovieForm ? <FormButton handleHideMovieForm={handleHideMovieForm} className="hideFormButton" /> : <AddMovieForm addMovie={addMovie} handleHideMovieForm={handleHideMovieForm}/> }
            </div>
            <div className= "card div">
                {moviesComponents}
            </div>
        </main>

    

	)
}

export default MoviePage;
