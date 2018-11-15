import styled from 'styled-components';
import background from '../assets/login-bg.png';

const Wrapper = styled.div`
  position: relative;
  background: ${props => (props.isAuthenticated ? '#fefefe' : `url(${background})`)};
  background-size: cover;
  min-height: calc(100vh);
  height: 100%;
`;

export default Wrapper;
