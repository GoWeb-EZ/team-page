import styled from 'styled-components';

const StyledNameField = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const StyledNameText = styled.span`
  color: var(--Primary, #252543);
  font-family: 'Pretendard';
  font-size: 22px;
  font-weight: 700;
`;

const StyledRoleText = styled.span`
  color: var(--Gray, #595959);
  font-family: 'Pretendard';
  font-size: 18px;
  font-weight: 300;
`;

export default function NameField({ name, role }) {
  return (
    <StyledNameField>
      <StyledNameText>{name}</StyledNameText>
      <StyledRoleText>{role}</StyledRoleText>
    </StyledNameField>
  );
}
