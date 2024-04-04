import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Root = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 20px 5%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: transparent;
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  z-index: 100;
`;

const Logo = styled.h1`
  font-size: 28px;
  color: #e0e0e0;
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Nav = styled(NavLink)`
  font-size: 18px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e0e0e0;
  font-weight: 500;

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
