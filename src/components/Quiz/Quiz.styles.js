import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 0 4rem 4rem;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 10%;

  > div {
    display: flex;
    flex-direction: column;
  }
`;

const Left = styled.div`
  align-items: center;
  gap: 2rem;
`;

const Right = styled.div`
  padding-top: 2rem;
  width: 30%;
  gap: 0.5rem;
`;

const Link = styled.a`
  color: #000;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration-line: underline;
`;

const Name = styled.h3`
  color: #000;
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Description = styled.p`
  color: #595959;
  font-family: 'Pretendard Variable';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;

  > b {
    font-weight: 700;
  }
`;

const Result = styled.p`
  color: #595959;
  font-family: 'Pretendard Variable';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  align-self: flex-end;
`;

const Box = styled.div`
  width: 100%;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);

  display: flex;
  gap: 50px;

  padding: 2rem 3rem;
  margin-bottom: 0.5rem;

  cursor: pointer;

  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;

  line-height: normal;

  > b {
    font-weight: 700;
  }
`;

export default { Wrapper, Left, Right, Link, Name, Description, Result, Box };
