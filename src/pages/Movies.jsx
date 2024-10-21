import React, {
    useEffect,
    useState
} from 'react';
//import PropTypes from 'prop-types'
import styled from 'styled-components';

import NavBar from '../components/navBar/NavBar';
import MovieHeading from '../components/movieHeading/MovieHeading';
import MovieList from '../components/moviesList/MovieList';
import Loading from '../components/load/Loading';
import AddFavourite from '../components/favouritComponent/AddFavorit';
import RemoveFavourites from '../components/favouritComponent/RemoveFavorite';

const apiKey = process.env.REACT_APP_API_KEY;
//const apiUrl = process.env.REACT_APP_API_URL;

const ContainerLoading = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: baseline;
    padding: 4rem;
`;

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] =
        useState('');
    const [favorites, setFavorites] = useState(
        []
    );

    const [error, setError] = useState(null);

    /*     const getMoviesRequest =
        async searchValue => {
            const url = `${apiUrl}?apikey=${apiKey}&s=${searchValue}`;
            const api = await fetch(
               url
            );
            const data = await api.json();

            if (data.Search) {
                setMovies(data.Search);
            }
        };

    useEffect(() => {
        getMoviesRequest(searchValue);
    }, [searchValue]); */

    const getMoviesRequest =
        async searchValue => {
            try {
                const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchValue}`;

                const api = await fetch(url);

                if (!api.ok) {
                    throw new Error(
                        `Network response was not ok: ${api.status}`
                    );
                }

                const data = await api.json();

                if (data.Search) {
                    setMovies(data.Search);
                } else {
                    setError(
                        'No movies found for the search term.'
                    );
                }
            } catch (error) {
                setError(
                    'Error fetching movies:',
                    error.message
                );
            }
        };

    useEffect(() => {
        getMoviesRequest(searchValue);
    }, [searchValue]);

    //add/remove favorit logic

    useEffect(() => {
        const movieFavorites = JSON.parse(
            localStorage.getItem(
                'react-movie-app-favourites'
            )
        );

        if (movieFavorites) {
            setFavorites(movieFavorites);
        }
    }, []);
    const saveToLocalStorage = items => {
        localStorage.setItem(
            'react-movie-app-favourites',
            JSON.stringify(items)
        );
    };

    const addFavoriteMovie = movie => {
        const newFavoriteList = [
            ...favorites,
            movie
        ];
        setFavorites(newFavoriteList);
        saveToLocalStorage(newFavoriteList);
    };

    const removeFavoriteMovie = movie => {
        const newFavoriteList = favorites.filter(
            favorite =>
                favorite.imdbID !== movie.imdbID
        );

        setFavorites(newFavoriteList);
        saveToLocalStorage(newFavoriteList);
    };

    return (
        <>
            {/*list movies */}
            <div className="mt-4 mb-4" id='movies'>
                <NavBar
                    placeholdertext="search movies..."
                    searchValue={searchValue}
                    setSearchValue={
                        setSearchValue
                    }
                />
            </div>
            <div className=" mt-4 mb-4">
                <MovieHeading title="Movies" />
            </div>
            {searchValue &&
                movies.length === 0 && (
                    <ContainerLoading className="container-loading">
                        <Loading
                            speedborder='1'
                            size='5'
                        />
                        {movies && error && (
                            <p
                                style={{
                                    color: '#FFD200',
                                    marginTop:
                                        '5rem'
                                }}
                            >
                                {error}
                            </p>
                        )}
                    </ContainerLoading>
                )}

            <div className="row gap-1 my-4 mb-4">
                <MovieList
                    movies={movies}
                    handleFavoritesClick={
                        addFavoriteMovie
                    }
                    favoritComponent={
                        <AddFavourite />
                    }
                />
            </div>
            {/*favorits movies */}
            <div className=" mt-4 mb-4">
                <MovieHeading title="Favorite movies" />
            </div>
            <div className="row gap-3 my-4 mb-4">
                <MovieList
                    movies={favorites}
                    handleFavoritesClick={
                        removeFavoriteMovie
                    }
                    favoritComponent={
                        <RemoveFavourites />
                    }
                />
            </div>
        </>
    );
};

Movies.propTypes = {};

export default Movies;
