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
  border-bottom: 1px solid #e1e1e1;
`;

const Logo = styled.h1`
  font-size: 28px;
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
