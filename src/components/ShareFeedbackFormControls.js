import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './Button';

const Footer = styled.footer`
  display: flex;
  align-items: center;
  margin: 1.5em 0 1em;
  justify-content: space-between;
`;

const Btn = styled(Button)`
  width: 130px;
  text-align: center;
`;

const Controls = ({
  canGoPrevious,
  canGoNext,
  canSkip,
  canComplete,
  isLast,
  complete,
  skip,
  goNext,
  goPrevious
}) => (
  <Footer>
    <Btn bland disabled={!canGoPrevious()} onClick={goPrevious}>
      Previous
    </Btn>
    {canSkip() && (
      <Btn bland onClick={skip}>
        Skip
      </Btn>
    )}
    {isLast() ? (
      <Btn onClick={complete} disabled={!canComplete()}>
        Complete
      </Btn>
    ) : (
      <Btn disabled={!canGoNext()} onClick={goNext}>
        Next
      </Btn>
    )}
  </Footer>
);

Controls.propTypes = {
  canGoPrevious: PropTypes.func.isRequired,
  canGoNext: PropTypes.func.isRequired,
  canSkip: PropTypes.func.isRequired,
  canComplete: PropTypes.func.isRequired,
  isLast: PropTypes.func.isRequired,
  complete: PropTypes.func.isRequired,
  skip: PropTypes.func.isRequired,
  goNext: PropTypes.func.isRequired,
  goPrevious: PropTypes.func.isRequired
};

export default Controls;
