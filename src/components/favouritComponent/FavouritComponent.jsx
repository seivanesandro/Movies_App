import React from 'react'
//import PropTypes from 'prop-types'
import styled from 'styled-components';
const FavouritComponentDisable = styled.div`
    &.favourit-component {
        color: #fff;
        font-size: 1rem;
        font-weight: 500;
    }
    display: ${({ disabled }) =>
        disabled ? 'none' : ''};
`;

const FavouritComponent = ({
    favouritComponent,
    disabled
}) => {
    return (
        <>
            <FavouritComponentDisable
                className="favourit-component"
                disabled={disabled}
            >
                {favouritComponent}
            </FavouritComponentDisable>
        </>
    );
};

FavouritComponent.propTypes = {}

export default FavouritComponent