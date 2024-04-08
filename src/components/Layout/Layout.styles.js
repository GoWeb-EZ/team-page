import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  background: #f6f6f6;
`;

export const Body = styled.div`
  flex: 1;
  height: calc(100% - 60px);
  margin-top: 60px;
`;

export default {
  Root,
  Body,
};
