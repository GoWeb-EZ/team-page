import styled from 'styled-components';
import { Button, Card } from 'react-bootstrap';

const Title = styled.h3`
  color: var(--Primary, #252543);
  font-family: Ghanachocolate;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  align-self: flex-start;

  margin: 0 3rem 0;
`;

const Description = styled.p`
  color: var(--Gray, #595959);
  font-family: 'Pretendard';
  font-size: 22px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  align-self: flex-start;
  margin: 0.5rem 3rem 2rem;
`;

const StyledInputCard = styled(Card)`
  width: calc(100% - 6rem);
  border-radius: 30px;
  background: #fff;
  boxshadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
`;

const StyledButton = styled(Button)`
  border-radius: 30px;
  border: none;
  background: #252543;
  color: #fff;

  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 700;

  padding: 0.5rem 2rem;
`;

const StyledCard = styled(Card)`
  flex: 1;

  border-radius: 30px;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
  border: none;

  padding: 2rem;
`;

const StyledCardTitle = styled(Card.Title)`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledCardText = styled(Card.Text)`
  max-height: 250px;
  overflow: scroll;
`;

const CardWrapper = styled.div`
  width: 100%;
  padding: 2rem 3rem;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 10px;
`;

export default {
  Title,
  Description,
  StyledInputCard,
  StyledButton,
  CardWrapper,
  StyledCard,
  StyledCardTitle,
  StyledCardText,
};
