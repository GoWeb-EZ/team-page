import styled from 'styled-components';

const Dim = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(1, 1, 1, 0.5);
  z-index: 100;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  width: 60%;
  height: 70%;

  background: white;
  border-radius: 1.875rem;

  padding: 7rem 5rem;

  overflow-y: scroll;
  position: relative;
`;

const ModalX = styled.img`
  position: absolute;
  top: 30px;
  right: 30px;

  width: 32px;
  height: 32px;

  cursor: pointer;
`;

const ModalTitle = styled.div`
  color: #000;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  > b {
    font-weight: 700;
  }
`;

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-top: 3rem;
`;

const SelectBox = styled.div`
  border-radius: 0.625rem;
  background: #f6f6f6;

  padding: 1.5rem;

  cursor: pointer;
  transition: transform 0.1s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export default { Dim, Modal, ModalX, ModalTitle, SelectWrapper, SelectBox };
