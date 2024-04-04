import React from 'react';
import s from './Header.styles';

export default function Header() {
  return (
    <s.Root>
      <s.Logo>@ GoWebEZ</s.Logo>
      <s.NavList>
        <s.Nav to="/">Home</s.Nav>
        <s.Nav to="/member">Member</s.Nav>
        <s.Nav to="/guest-book">Guest Book</s.Nav>
      </s.NavList>
    </s.Root>
  );
}
