import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import NoMatch from './pages/NoMatch';
import Guestbook from './pages/guestbook/Guestbook';
import Members from './pages/member/Members';
import MemberList from './pages/member/MemberList';
import Quiz from './pages/member/Quiz';
import Header from './components/Header';
import Footer from './components/Footer';
import styled from 'styled-components';

export default function AppLayout() {
  return (
    <>
      <Header />
      <RoutesWrapper>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/member" element={<Members />}>
            <Route index element={<MemberList />} />
            <Route path=":slug" element={<Quiz />} />
          </Route>

          <Route path="/guest-book" element={<Guestbook />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </RoutesWrapper>

      <Footer />
    </>
  );
}

const RoutesWrapper = styled.section`
  width: calc(100vw - 4rem);
  min-height: 600px;
`;
