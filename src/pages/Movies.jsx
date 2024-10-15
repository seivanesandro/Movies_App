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

const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = process.env.REACT_APP_API_URL;

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
                const url = `${apiUrl}?apikey=${apiKey}&s=${searchValue}`;

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

    return (
        <>
            {/*list movies */}
            <div className="mt-4 mb-4">
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
                            speedborder={1}
                            size={5}
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

            <div className="row gap-5 my-5 mb-5">
                <MovieList
                    movies={movies}
                    favouritComponent="Add Favorit"
                    onclick={console.log(
                        'added from favorit'
                    )}
                />
            </div>
            {/*favorits movies */}
            <div className=" mt-4 mb-4">
                <MovieHeading title="Favorite movies" />
            </div>
            <div className="row gap-5 my-5 mb-5">
                <MovieList
                    movies={movies}
                    favouritComponent="Remove Favorit"
                    onclick={console.log(
                        'removed from favorit'
                    )}
                />
            </div>
        </>
    );
};

Movies.propTypes = {};

export default Movies;
