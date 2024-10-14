import React from 'react';
//import PropTypes from 'prop-types'
import styled from 'styled-components';
import { devices } from '../../utils/constantes';

const MovieTitle = styled.h1`
    color: #fff;
    font-size: 2.5rem;
    font-weight: 600;
    text-align: center;
    

    @media only screen and (${devices.tablet}) {
        text-align: center;
    }
    @media only screen and (${devices.iphone14}) {
        text-align: center;
    }
    @media only screen and (${devices.mobileG}) {
        text-align: center;
    }
    @media only screen and (${devices.mobileM}) {
        text-align: center;
        font-size: 2rem;
    }
    @media only screen and (${devices.mobileP}) {
        text-align: center;
        font-size: 2rem;
    }
`;

const MovieHeading = ({ title }) => {
    return (
        <>
            <div className="col">
                <MovieTitle>{title}</MovieTitle>
            </div>
        </>
    );
};

MovieHeading.propTypes = {};

export default MovieHeading;
