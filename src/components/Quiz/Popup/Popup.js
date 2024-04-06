import React from 'react';
import s from './Popup.styles';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Popup({ name, question, answers, onClose, onSelect }) {
  return (
    <s.Dim>
      <s.Modal>
        <s.ModalTitle>
          <b>{name}</b>의 <b>{question}</b>은/는 무엇일까요?
        </s.ModalTitle>

        <s.SelectWrapper>
          {answers.map((answer, i) => (
            <s.SelectBox key={i} onClick={() => onSelect(i)}>
              {answer}
            </s.SelectBox>
          ))}
        </s.SelectWrapper>

        <s.ModalX src="/icons/ic_x.svg" onClick={onClose} />
      </s.Modal>
    </s.Dim>
  );
}
