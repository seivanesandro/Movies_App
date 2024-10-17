import React from 'react';
import FavoritComponent from '../favouritComponent/FavoritComponent';
import PropTypes from 'prop-types'
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

const MovieList = (props) => {
    return (
        <>
            {props.movies.map(movie => {
                return (
                    <div
                        key={movie.imdbID}
                        className={
                            movie.Poster !== 'N/A'
                                ? 'image-container d-flex justify-content-start my-3'
                                : 'no-image-container d-flex justify-content-start my-3'
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
                            <div
                                className="overlay d-flex align-items-center justify-content-center"
                                onClick={() =>
                                    props.handleFavoritesClick(
                                        movie
                                    )
                                }
                            >
                                <FavoritComponent  favoritComponent={props.favoritComponent}/>
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

MovieList.propTypes = {
    handleFavoritesClick: PropTypes.func,
};

export default MovieList;
