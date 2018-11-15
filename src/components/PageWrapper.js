import styled from 'styled-components';
import PropTypes from 'prop-types';

const PageWrapper = styled.div`
  max-width: ${props => (props.big ? 1200 : 900)}px;
  margin: 1em auto;
  padding: 1em 0 8em;
`;

PageWrapper.propTypes = {
  big: PropTypes.bool
};

export default PageWrapper;
