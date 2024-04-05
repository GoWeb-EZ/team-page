import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledMembers = styled.div`
  margin-top: 10%;
`

export default function Members() {
  return (
    <StyledMembers>
      <Outlet/>
    </StyledMembers>
  );
}
