import styled from 'styled-components';

const Root = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Background = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
`;

const Body = styled.div`
  z-index: 2;
  padding: 80px 50px;
  backdrop-filter: blur(20px);
  background-color: transparent;
  border-radius: 16px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);

  text-align: center;
`;

const Title = styled.h3`
  color: #e0e0e0;
  font-size: 50px;
  line-height: 1.2;
  margin-bottom: 50px;
`;

const Cta = styled.button`
  color: #fff;
  background-color: transparent;
  padding: 15px 20px;
  font-size: 26px;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  transform: none;
  transition: all 0.3s ease-in-out;
  font-weight: 500;

  &:hover {
    transform: translateY(-3px);
  }

  &:focus {
    outline: none;
  }
`;

const Emoji = styled.img`
  z-index: 1;
  position: absolute;
  max-width: 20vw;
  max-height: auto;
`;

const FirstEmoji = styled(Emoji)`
  top: 10%;
  left: 10%;
`;

const SecondEmoji = styled(Emoji)`
  bottom: 10%;
  left: 15%;
`;

const ThirdEmoji = styled(Emoji)`
  top: 15%;
  right: 5%;
`;

const FourthEmoji = styled(Emoji)`
  bottom: 15%;
  right: 15%;
`;

export default {
  Root,
  Body,
  Background,
  Title,
  Cta,
  FirstEmoji,
  SecondEmoji,
  ThirdEmoji,
  FourthEmoji,
};
