import styled from 'styled-components';

const StyledBrief = styled.div`
  display: flex;
  min-height: 120px;
  max-width: 240px;
`;

const BriefText = styled.p`
  color: var(--Primary, #252543);
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 500;
`;

export default function Brief({ contents }) {
  return (
    <StyledBrief>
      <BriefText>{contents}</BriefText>
    </StyledBrief>
  );
}
