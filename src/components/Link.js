import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { darken } from 'polished';

const Link = styled(NavLink)`
  &:link,
  &:visited,
  &:hover,
  &:active {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 0.15em;
    color: #59636e;
    padding: 0.25em 0;
  }
  &:hover,
  &:active {
    color: ${darken(0.2, '#59636e')};
  }
`;

export default Link;
