import styled from 'styled-components';

const StyledNameField = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const StyledNameText = styled.span`
  font-size: 1rem;
  font-weight: 600;
`

const StyledRoleText = styled.span`
  font-size: 0.75rem;
  font-weight: 400;
  color: gray;
`

export default function NameField ({name, role}) {
  return(
    <StyledNameField>
      <StyledNameText>{name}</StyledNameText>
      <StyledRoleText>{role}</StyledRoleText>
    </StyledNameField>
  )
}
