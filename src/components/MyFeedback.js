import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PageWrapper from './PageWrapper';
import ProfileItem from './ProfileItem';
import Box from './Box';
import Feedback from './Feedback';

const Wrapper = styled(Box)`
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-direction: row;
  padding: 0;
`;

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  cursor: pointer;
  padding: 1.25em;
  min-width: 380px;
  border-bottom: 1px solid #d9dcde;
  &:hover {
    ${props => !props.selected && `background: #fbf7fe;`};
  }
  ${props => props.selected && `background: #F2F3F4;`}
  ${props => props.selected && `font-weight: 600;`}
`;

const RightWrapper = styled.div`
  border-left: 1px solid #d9dcde;
`;

class MyFeedback extends Component {
  constructor(props) {
    super(props);
    const { people } = this.props;
    this.state = {
      selected: people[0] ? people[0].id : ''
    };
  }

  componentDidUpdate(prevProps) {
    const { people } = this.props;
    if (people[0] && people[0].id && prevProps.people[0] !== people[0]) {
      this.selectPerson(people[0].id);
    }
  }

  selectPerson = id => {
    this.setState({
      selected: id
    });
  };

  render() {
    const { people, myFeedback, questions } = this.props;
    const { selected } = this.state;
    if (!people || !people.length) {
      return null;
    }
    return (
      <PageWrapper big>
        <h1>My Feedback</h1>
        <Wrapper>
          <div>
            <List>
              {people.map(p => (
                <Item
                  key={p.id}
                  selected={p.id === selected}
                  onClick={() => this.selectPerson(p.id)}
                >
                  <ProfileItem
                    familyName={p.familyName}
                    givenName={p.givenName}
                    profilePic={p.profilePic}
                  />
                </Item>
              ))}
            </List>
          </div>
          <RightWrapper>
            <Feedback
              questions={questions}
              feedback={myFeedback[selected] ? myFeedback[selected].feedback : []}
            />
          </RightWrapper>
        </Wrapper>
      </PageWrapper>
    );
  }
}

MyFeedback.defaultProps = {
  people: []
};

MyFeedback.propTypes = {
  people: PropTypes.arrayOf(
    PropTypes.shape({
      familyName: PropTypes.string.isRequired,
      givenName: PropTypes.string.isRequired,
      profilePic: PropTypes.string.isRequired
    }).isRequired
  ),
  /* eslint-disable-next-line */
  myFeedback: PropTypes.object.isRequired,
  /* eslint-disable-next-line */
  questions: PropTypes.array.isRequired
};

export default MyFeedback;
