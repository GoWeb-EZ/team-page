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
  padding: 1rem 1.5rem;
  gap: 10px;

  border-radius: 1.875rem;
  background: #fff;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);

  transition: all 0.3s;

  &:hover {
    transform: translateY(-5px);
  }

  animation: ${fadeIn} 0.5s ease-in-out;
  animation-delay: ${(props) => props.delay}s;
`;

export default function CardView({ memberData }) {
  return (
    <StyledCardView delay={memberData.id * 0.1}>
      <ProfileImage profileImageURL={memberData.profileImageURL} />
      <NameField name={memberData.name} role={memberData.role} />
      <Brief contents={memberData.brief} />
    </StyledCardView>
  );
}
