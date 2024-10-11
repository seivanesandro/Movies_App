import React from 'react';
//import PropTypes from 'prop-types'
import styled from 'styled-components';
import { devices } from '../../utils/constantes';

const MovieTitle = styled.h1`
    color: #fff;
    font-size: 2.5rem;
    font-weight: 600;
    text-align: center;

    @media only screen and (${devices.fourk}) {
    }
    @media only screen and (${devices.portatilL}) {
    }
    @media only screen and (${devices.portatilS}) {
    }
    @media only screen and (${devices.portatil}) {
    }
    @media only screen and (${devices.tablet}) {
        text-align: left;
        margin-left: 4rem;
    }
    @media only screen and (${devices.iphone14}) {
        text-align: left;
        margin-left: 4rem;
    }
    @media only screen and (${devices.mobileG}) {
        text-align: left;
        margin-left: 2rem;
    }
    @media only screen and (${devices.mobileM}) {
        margin-left: 2rem;
        font-size: 2rem;
    }
    @media only screen and (${devices.mobileP}) {
        margin-left: 1rem;
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
