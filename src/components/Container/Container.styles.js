import styled from 'styled-components';

const Root = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  min-height: 100vh;
  height: 100%;

  background: #f6f6f6;
`;

const Background = styled.img`
  position: absolute;
  overflow: hidden;

  top: 20px;
  left: 50%;
  transform: translate(-50%, 0);
`;

const BackgroundBlur = styled.div`
  // position: absolute;
  width: 100%;
  height: 100%;
  min-height: 100vh;

  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(5px);

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 60px 3rem 0;
`;

export default {
  Root,
  Background,
  BackgroundBlur,
};
