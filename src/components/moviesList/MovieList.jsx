import React from 'react';
import FavouritComponent from '../favouritComponent/FavouritComponent';
//import PropTypes from 'prop-types'
import styled, {
    keyframes
} from 'styled-components';
import noimage from '../../assets/noimage.jpg';

const Show = keyframes`
    0%{
        opacity:0;
    }
    50%{
        opacity:0.5;
    }

    100%{
        opacity:1;
    }
`;

const StyleImg = styled.img`
    box-shadow: 0 0 0.3rem gold;
    border-radius: 6px;
    width: 100%;
    animation: ${Show} 2.5s linear;
`;

const MovieList = ({
    movies,
    favouritComponent
}) => {
    return (
        <>
            {movies.map(movie => {
                return (
                    <div
                        key={movie.imdbID}
                        className={
                            movie.Poster !== 'N/A'
                                ? 'image-container d-flex justify-content-start my-3 mx-5'
                                : 'no-image-container d-flex justify-content-start my-3 mx-5'
                        }
                    >
                        <StyleImg
                            src={
                                movie.Poster !==
                                'N/A'
                                    ? movie.Poster
                                    : noimage
                            }
                            alt="norefer"
                            className="img-style"
                        />

                        {movie.Poster !==
                        'N/A' ? (
                            <div className="overlay d-flex align-items-center justify-content-center">
                                <FavouritComponent
                                    favouritComponent={
                                        favouritComponent
                                    }
                                />
                            </div>
                        ) : (
                            <div className="d-flex align-items-center justify-content-center"></div>
                        )}
                    </div>
                );
            })}
        </>
    );
};

MovieList.propTypes = {};

export default MovieList;
