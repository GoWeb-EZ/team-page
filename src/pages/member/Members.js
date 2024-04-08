import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '../../components/Container/Container';

export default function Members() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}
