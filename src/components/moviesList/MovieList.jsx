import React from 'react';
import FavouritComponent from '../favouritComponent/FavouritComponent'
//import PropTypes from 'prop-types'
//import styled from 'styled-components';

const MovieList = ({movies, favouritComponent}) => {

    return (
        <>
            {movies.map(movie => {
                return (
                    <div
                        key={movie.imdbID}
                        className="image-container d-flex justify-content-start my-3"
                    >
                        <img
                            src={movie.Poster}
                            alt="norefer"
                            style={{
                                borderRadius:
                                    '6px'
                            }}
                        />
                        <div className="overlay d-flex align-items-center justify-content-center">
                            <FavouritComponent
                                favouritComponent={
                                    favouritComponent
                                }
                            />
                        </div>
                    </div>
                );
            })}
        </>
    );
};

MovieList.propTypes = {};

export default MovieList;
