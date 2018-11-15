import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = styled.textarea`
  display: block;
  width: 100%;
  min-height: 200px;
  padding: 1em;
  font-size: 16px;
  border: 1px solid #d9dcde;
  border-radius: 3px;
`;

const TextInput = ({ value, onInput, placeholder }) => (
  <Input
    value={value}
    onChange={() => {}}
    onInput={e => onInput(e.target.value)}
    placeholder={placeholder}
  />
);

TextInput.defaultProps = {
  value: '',
  onInput: () => {},
  placeholder: 'Say something'
};

TextInput.propTypes = {
  value: PropTypes.string,
  onInput: PropTypes.func,
  placeholder: PropTypes.string
};

export default TextInput;
