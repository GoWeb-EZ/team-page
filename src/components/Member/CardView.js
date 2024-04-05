import ProfileImage from './ProfileImage';
import NameField from './NameField';
import Brief from './Brief';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px); /* 시작 위치 설정 */
  }
  to {
    opacity: 1;
    transform: translateY(0); /* 끝 위치 설정 */
  }
`;


const StyledCardView = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 25px;
  gap: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0.1, 0.1, 0.1, 0.1);
  transition: background-color 0.3s, border-color 0.3s;
  &:hover {
    border-color: #0056b3;
  }
  animation: ${fadeIn} 0.5s ease-in-out;
  animation-delay: ${props => props.delay}s;

`;

export default function CardView({memberData}) {
  return (
    <StyledCardView delay={memberData.id * 0.1}>
      <ProfileImage profileImageURL={memberData.profileImageURL} />
      <NameField name={memberData.name} role={memberData.role} />
      <Brief contents={memberData.brief} />
    </StyledCardView>
  );
}
