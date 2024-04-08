import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Root = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 60px;

  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(2px);

  z-index: 100;
`;

const Logo = styled.h1`
  color: var(--Primary, #252543);
  text-align: center;
  font-family: 'Pretendard';
  font-size: 24px;
  font-weight: 900;
  margin: 0;
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 0;
`;

const Nav = styled(NavLink)`
  font-size: 18px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--Primary, #252543);
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 400;
  text-decoration: none;

  &.active {
    font-weight: 700;
  }
`;

export default {
  Root,
  Logo,
  NavList,
  Nav,
};
