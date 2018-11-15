import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  position: relative;
  height: 5px;
  background: #f2f3f4;
  border-radius: 3px;
  margin-top: 2em;
  & > span {
    display: block;
    height: 100%;
    border-radius: 3px;
    position: relative;
    overflow: hidden;
    background: #69dbbd;
    transition: width 0.2s;
  }
`;

const Meter = ({ percent }) => (
  <Wrapper>
    <span
      style={{
        width: `${percent}%`
      }}
    />
  </Wrapper>
);

Meter.propTypes = {
  percent: PropTypes.number.isRequired
};
export default Meter;
