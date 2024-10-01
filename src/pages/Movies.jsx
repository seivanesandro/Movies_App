import React, { useState } from 'react';
//import PropTypes from 'prop-types'
//import styled from 'styled-components';

import NavBar from '../components/navBar/NavBar';
import MovieHeading from '../components/movieHeading/MovieHeading';
import MovieList from '../components/moviesList/MovieList';

//const apiKey = process.env.REACT_APP_API_KEY;
//const apiId = process.env.REACT_APP_API_ID;
//const apiUrl = process.env.REACT_APP_API_URL;

const Movies = () => {
    const [movies, setMovies] = useState([
        {
            Title: 'Naruto: Shippuden',
            Year: '2007–2017',
            imdbID: 'tt0988824',
            Type: 'series',
            Poster: 'https://m.media-amazon.com/images/M/MV5BZGFiMWFhNDAtMzUyZS00NmQ2LTljNDYtMmZjNTc5MDUxMzViXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg'
        },
        {
            Title: 'Naruto',
            Year: '2002–2007',
            imdbID: 'tt0409591',
            Type: 'series',
            Poster: 'https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg'
        },
        {
            Title: 'Boruto: Naruto Next Generations',
            Year: '2017–2023',
            imdbID: 'tt6342474',
            Type: 'series',
            Poster: 'https://m.media-amazon.com/images/M/MV5BYjM0MDRkYzctMTNhMS00ODYwLTgwMWItZDYxNDlhOGY1YjRlXkEyXkFqcGdeQXVyMzExMzk5MTQ@._V1_SX300.jpg'
        }
    ]);

    return (
        <>
            {/*list movies */}
            <div className="row d-flex align-items-center mb-4 mx-auto">
                <NavBar placeholdertext="search movies" />
                <MovieHeading title="movies" />
            </div>
            <div className="d-flex flex-row justify-content-start align-items-center">
                <MovieList movies={movies} />
            </div>
            {/*favorits movies */}
            <div className="row d-flex align-items-center mb-4 mx-auto">
                <MovieHeading title="favorite movies" />
            </div>
            <div className="d-flex flex-row justify-content-start align-items-center">
                <MovieList movies={movies} />
            </div>
        </>
    );
};

Movies.propTypes = {};

export default Movies;
