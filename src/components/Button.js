import styled from 'styled-components';
import PropTypes from 'prop-types';
import { darken } from 'polished';

const Button = styled.button`
  text-decoration: none;
  background: ${props => {
    if (props.disabled) {
      return '#ACB1B6';
    }
    return props.bland ? 'white' : '#ab61e5';
  }};
  border-radius: 4px;
  border: none;
  font-family: sans - serif;
  font-size: 16px;
  padding: 1em 1.5em;
  color: white;
  text-align: center;
  ${props => props.width && `min-width: ${props.width}px`};
  ${props => (props.bland && !props.disabled ? 'border: 1px solid #D9DCDE; color: #031323' : '')};
  &: hover {
    background: ${props => {
      if (props.disabled) {
        return '#ACB1B6';
      }
      if (props.bland) {
        return '#e0e0e0';
      }
      return darken(0.1, '#ab61e5');
    }};
    ${props => (props.disabled ? 'cursor: not-allowed' : 'cursor: pointer')};
  }
  ${props => (props.width ? `width: ${props.width};` : '')}
`;

Button.propTypes = {
  disabled: PropTypes.bool,
  width: PropTypes.number,
  bland: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};

export default Button;
