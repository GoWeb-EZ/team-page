import MemberListData from './MemberListData';
import CardView from '../CardView';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MembersTitle = styled.h3`
  color: var(--Primary, #252543);
  font-family: Ghanachocolate;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  align-self: flex-start;

  margin: 0 3rem 0;
`;

const MemberDescription = styled.p`
  color: var(--Gray, #595959);
  font-family: 'Pretendard';
  font-size: 22px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  align-self: flex-start;
  margin: 0.5rem 3rem 2rem;
`;

const MemberListWrapper = styled.section`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  padding: 2rem 3rem;

  overflow: scroll;

  > a {
    text-decoration: none;
    color: #000;
  }
`;

export default function MemberList() {
  return (
    <>
      <MembersTitle>Team member</MembersTitle>
      <MemberDescription> 고웹쉽조의 멤버를 소개합니다!</MemberDescription>

      <MemberListWrapper>
        {Object.entries(MemberListData).map(([key, memberData]) => (
          <Link to={memberData.name} key={key}>
            <CardView memberData={memberData} />
          </Link>
        ))}
      </MemberListWrapper>
    </>
  );
}
