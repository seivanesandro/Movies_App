import React from 'react';
//import PropTypes from 'prop-types'
import styled from 'styled-components';

const ImageContainer = styled.div`
    &.image-container {
        position: relative;
        transition: transform 0.2s;
    }
    &.image-container:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
    &.image-container:hover .overlay {
        opacity: 1;
    }

    &.overlay {
        position: absolute;
        background: rgba(0, 0, 0, 0.8);
        width: 100%;
        transition: 0.5s ease;
        opacity: 0;
        bottom: 0;
        font-size: 20px;
        padding: 20px;
        text-align: center;
    }
`;

const MovieList = ({ movies }) => {
    return (
        <>
            {movies.map(movie => {
                return (
                    <ImageContainer
                        key={movie.imdbID}
                        className="image-container d-flex flex-column justify-content-start m-3"
                    >
                        <img
                            src={movie.Poster}
                            alt="norefer"
                            style={{
                                borderRadius:
                                    '6px'
                            }}
                        />
                        <div className="overlay d-flex flex-row align-items-center justify-content-center">
                            <p>{movie.Title}</p>
                        </div>
                    </ImageContainer>
                );
            })}
        </>
    );
};

MovieList.propTypes = {};

export default MovieList;
