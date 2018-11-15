import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import PropTypes from 'prop-types';

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  &:hover {
    ${props => !props.selected && `background: ${darken(0.075, '#f2f3f4')}`};
  }
  background: ${props => (props.selected ? '#59636E' : '#f2f3f4')};
  color: ${props => (props.selected ? '#fff' : '#031323')};
  border-radius: 3px;
  padding: 1.5em;
  cursor: pointer;
  & + & {
    margin-top: 0.5em;
  }
`;

const MultipleChoice = ({ items, selection, didSelectItem }) => (
  <List>
    {items.map((item, i) => (
      <Item selected={selection === i} key={i} onClick={() => didSelectItem(i, item)}>
        <span>{item}</span>
      </Item>
    ))}
  </List>
);

MultipleChoice.defaultProps = {
  selection: null
};

MultipleChoice.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  selection: PropTypes.number,
  didSelectItem: PropTypes.func.isRequired
};

export default MultipleChoice;
