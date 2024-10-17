import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FavoritComponentDisable = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    &.favorit-component {
        color: #fff;
        font-size: 0.8rem;
        font-weight: 400;
    }
    display: ${({ disabled }) =>
        disabled ? 'none' : ''};
`;

const FavoritComponent = props => {
    return (
        <>
            <FavoritComponentDisable className="favorit-component">
                {props.favoritComponent}
            </FavoritComponentDisable>
        </>
    );
};

FavoritComponent.propTypes = {
    onclick: PropTypes.func.isRequired
};

export default FavoritComponent;
