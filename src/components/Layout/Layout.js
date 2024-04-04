import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import s from './Layout.styles';

export const Layout = ({ children }) => (
  <s.Root>
    <Header />
    <s.Body>{children}</s.Body>
    <Footer />
  </s.Root>
);
