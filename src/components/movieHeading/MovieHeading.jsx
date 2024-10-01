import React from 'react';
//import PropTypes from 'prop-types'
import styled from 'styled-components';
import { devices } from '../../utils/constantes';

const MovieTitle = styled.h1`
    color: #fff;
    font-size: 2.5rem;
    font-weight: 600;

    @media only screen and (${devices.fourk}) {
    }
    @media only screen and (${devices.portatilL}) {
    }
    @media only screen and (${devices.portatilS}) {
    }
    @media only screen and (${devices.portatil}) {
    }
    @media only screen and (${devices.tablet}) {
    }
    @media only screen and (${devices.iphone14}) {
    }
    @media only screen and (${devices.mobileG}) {
    }
    @media only screen and (${devices.mobileM}) {
    }
    @media only screen and (${devices.mobileP}) {
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
