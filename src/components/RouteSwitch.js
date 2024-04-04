import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Members from '../pages/member/Members';
import MemberList from './Member/List/MemberList';
import Quiz from './Quiz/Quiz';
import Guestbook from '../pages/guestbook/Guestbook';
import NoMatch from '../pages/NoMatch';

export const RouteSwitch = () => (
  <Routes>
    <Route path="/" element={<Home />} />

    <Route path="/member" element={<Members />}>
      <Route index element={<MemberList />} />
      <Route path=":slug" element={<Quiz />} />
    </Route>

    <Route path="/guest-book" element={<Guestbook />} />
    <Route path="*" element={<NoMatch />} />
  </Routes>
);
