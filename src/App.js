import React from 'react';
import Movies from './pages/Movies';

//import styled from 'styled-components';

const App = () => {
    return (
        <div className="movie-app">
            {/*add react router dom */}
            <Movies />
        </div>
    );
};

export default App;