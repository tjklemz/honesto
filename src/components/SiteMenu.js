import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  const MenuList = styled.ul`
    display: flex;
    list-style-type: none;
    margin: 0 1em 0;
    padding: 0;
  `;

  const MenuItem = styled.li`
    margin: 0 2em;
  `;

  const MenuLink = styled(NavLink)`
    font-size: 16px;
    padding: 0 0 28px;

    &.active {
      border-bottom: 3px solid #ab61e5;
    }
    &:hover:not(.not-available) {
      border-bottom: 3px solid #ab61e5;
    }

    &:link,
    &:visited,
    &:hover,
    &:active {
      color: #031323;
      text-decoration: none;
    }
  `;
  return (
    <MenuList>
      <MenuItem>
        <MenuLink to="/share-feedback">Share Feedback</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink to="/my-feedback">My Feedback</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink to="/" activeClassName="not-available">
          Team Feedback
        </MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink to="/" activeClassName="not-available">
          Teams
        </MenuLink>
      </MenuItem>
    </MenuList>
  );
};

export default Menu;
