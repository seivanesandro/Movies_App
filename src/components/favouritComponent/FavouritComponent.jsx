import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

const FavouritComponentDisable = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 1rem;
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
    disabled,
    onclick
}) => {
    return (
        <>
            <FavouritComponentDisable
                className="favourit-component"
                disabled={disabled}
                onClick={onclick}
            >
                <span> {favouritComponent}</span>
                <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-heart-fill"
                    fill="red"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                    />
                </svg>
            </FavouritComponentDisable>
        </>
    );
};

FavouritComponent.propTypes = {
    onclick: PropTypes.func,
};


export default FavouritComponent;
