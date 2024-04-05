import styled from 'styled-components';

const StyledBrief = styled.div`
  display: flex;
  min-height: 120px;
  max-width: 240px;
`

const BriefText = styled.p`
  overflow-wrap: break-word
`

export default function Brief ({contents}) {
  return (
    <StyledBrief>
      <BriefText>{contents}</BriefText>
    </StyledBrief>
  )
}
