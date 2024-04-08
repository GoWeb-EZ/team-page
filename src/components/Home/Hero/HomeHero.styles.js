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
  overflow: hidden;

  top: 20px;
  left: 50%;
  transform: translate(-50%, 0);
`;

const BackgroundBlur = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(5px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h3`
  color: var(--Primary, #252543);
  text-align: center;
  font-family: Ghanachocolate;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-bottom: 50px;
`;

const Cta = styled.button`
  border-radius: 3.125rem;
  border: 2px solid #252543;
  padding: 0.5rem 1rem;

  color: #252543;
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  background: transparent;
  font-weight: 300;

  transform: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-3px);
    background: #252543;
    color: #fff;
  }
`;

const EmojiBox = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  margin-top: 3rem;
`;

const CardWrapper = styled.div`
  width: 150px;
  height: 150px;
  perspective: 1100px;

  cursor: pointer;

  &:hover div {
    transform: rotateY(180deg);
    transform: scale(1.1);
  }
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: 0.4s;
  transform-style: preserve-3d;
`;

const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

const Emoji = styled.img`
  width: 100%;
  height: auto;

  transition: transform 0.3s ease;
`;

export default {
  Root,
  Background,
  BackgroundBlur,
  Title,
  Cta,
  Emoji,
  EmojiBox,
  Card,
  CardWrapper,
  Front,
  Back,
};
