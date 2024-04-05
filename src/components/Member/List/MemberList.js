import MemberListData from "./MemberListData";
import CardView from "../CardView";
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const MemberListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

export default function MemberList () {
  return (
    <MemberListContainer>
      {
        Object.entries(MemberListData).map(([key, memberData]) =>
            <Link to={memberData.name} key = {key}>
              <CardView memberData={memberData} />
            </Link>
            )
      }
    </MemberListContainer>
  );
}
