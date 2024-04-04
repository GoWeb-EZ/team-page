import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import s from './Layout.styles';
import { Container } from '../Container/Container';

export const Layout = ({ children }) => (
  <s.Root>
    <Header />
    <s.Body>
      <Container>{children}</Container>
    </s.Body>
    <Footer />
  </s.Root>
);
