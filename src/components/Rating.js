import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import RatingComponent from 'react-rating';

const Item = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  margin: 2px;
  background: ${props => (props.full ? '#7F0FD7' : '#F2F3F4')};
  ${props => props.hover && props.full && 'background: #ab61e5;'};
  ${props => props.color && `background: ${props.color};`};
`;

class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false
    };
  }

  onHover = val => {
    this.setState({
      isHovering: typeof val !== 'undefined'
    });
  };

  onChange = val => {
    const { didSetRating } = this.props;
    this.setState({
      isHovering: false
    });
    didSetRating(val);
  };

  render() {
    const { isHovering } = this.state;
    const { value, readonly, itemSize, varyColor } = this.props;
    const max = 10;
    let color;
    if (varyColor) {
      const percent = value / max;
      if (percent <= 0.33) {
        color = '#CE5B30'; // red
      } else if (percent <= 0.5) {
        color = '#F0903F'; // orange
      } else if (percent <= 0.75) {
        color = '#F1DD4B'; // yellow
      } else if (percent <= 1) {
        color = '#5EBC71'; // green
      }
    }
    return (
      <RatingComponent
        readonly={readonly}
        stop={max}
        initialRating={value}
        onChange={this.onChange}
        onHover={this.onHover}
        fullSymbol={<Item color={color} size={itemSize} full hover={isHovering} />}
        emptySymbol={<Item size={itemSize} />}
      />
    );
  }
}

Rating.defaultProps = {
  didSetRating: () => {},
  readonly: false,
  itemSize: 70,
  varyColor: false
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  didSetRating: PropTypes.func,
  readonly: PropTypes.bool,
  itemSize: PropTypes.number,
  varyColor: PropTypes.bool
};

export default Rating;
