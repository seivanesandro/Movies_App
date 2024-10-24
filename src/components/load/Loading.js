import styled, {
    keyframes
} from 'styled-components';
import PropTypes from 'prop-types';

const spinner = keyframes`
to{
    transform: rotate(360deg); 
  }
`;

const Loading = styled.div`
    width: ${({ size }) => (size)}rem;
    height: ${({ size }) => (size)}rem;
    border: 15px ${({ border }) => (border)};

    border-radius: 50px;

    animation: ${spinner}
        ${({ speedborder }) => (speedborder)}s
        ease-out infinite;
    z-index: 100;
`;

Loading.propTypes = {
    border: PropTypes.string.isRequired,
    speedborder: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired
};

Loading.defaultProps = {
    border: 'dotted #fff',
    speedborder: '0.2',
    size: '2'
};

export default Loading;
