import styled from 'styled-components';

const HeaderWrapper = styled.header`
  width: calc(100vw - 4rem);
  padding: 1rem 2rem;

  display: flex;
  justify-content: space-between;
`;

const Navigation = styled.nav`
  display: flex;
  gap: 2rem;
`;

export default {
  HeaderWrapper,
  Navigation,
};
