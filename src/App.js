import React from 'react';
import Movies from './pages/Movies';

import styled from 'styled-components';

const MovieApp = styled.div`
    &.movie-App > .row {
        overflow-x: auto;
        flex-wrap: nowrap;
    }
`;

const App = () => {
    return (
        <MovieApp className="movie-app">
            {/*add react router dom */}
            <Movies />
        </MovieApp>
    );
};

export default App;
