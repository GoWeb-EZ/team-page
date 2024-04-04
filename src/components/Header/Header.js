import React from 'react';
import { Link } from 'react-router-dom';
import s from './Header.styles';

export default function Header() {
  return (
    <s.HeaderWrapper>
      <div>@ GoWebEZ</div>
      <s.Navigation>
        <Link to="/">Home</Link>
        <Link to="/member">Member</Link>
        <Link to="/guest-book">Guest Book</Link>
      </s.Navigation>
    </s.HeaderWrapper>
  );
}
