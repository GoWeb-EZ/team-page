import React, { useState } from 'react';
import s from './Quiz.styles';

import { useParams } from 'react-router-dom';
import ProfileImage from '../Member/ProfileImage';
import { quizData, quizList } from './QuizData';
import Popup from './Popup/Popup';

export default function Quiz() {
  /* Data */
  const [isOpen, setIsOpen] = useState(false);
  const [quiz, setQuiz] = useState(-1);
  const [answers, setAnswers] = useState(['?', '?', '?', '?']);
  const [result, setResult] = useState(0);

  /* QuizData */
  const { slug } = useParams();
  const data = quizData[slug];
  if (!data) {
    return <s.Wrapper> The member you&apos;ve reqeustsed doesn t exist.</s.Wrapper>;
  }

  /** Function */
  function handleOnClick(idx) {
    if (answers[idx] !== '?') return;

    setQuiz(idx);
    setIsOpen(true);
  }

  function handleOnSelect(idx) {
    setIsOpen(false);

    const correctAnswer = quizList[quiz].answers[idx];
    const selectedAnswer = answerList[quiz];
    const isCorrect = correctAnswer === selectedAnswer;
    console.log(`정답: ${correctAnswer} vs 선택된 답: ${selectedAnswer} ==> ${isCorrect}`);

    if (isCorrect) setResult(result + 1);
    else alert(answerList[quiz] + '이 정답입니다!');

    setAnswers((before) => {
      const after = [...before];
      after[quiz] = answerList[quiz];
      return after;
    });
  }

  function handleOnClose() {
    setIsOpen(false);
  }

  /* QuizData */
  const { name, brief, profileImageURL, github, answerList } = data || {};
  return (
    <>
      <s.Wrapper>
        <s.Left>
          <ProfileImage profileImageURL={profileImageURL} />
          <s.Link href={github}>Github</s.Link>
        </s.Left>
        <s.Right>
          <s.Name>{name}</s.Name>
          <s.Description>{brief}</s.Description>
          <s.Result>
            <b>정답 수</b> {result}/{quizList.length}
          </s.Result>

          {/* QuizBox */}
          {quizList.map(({ question }, idx) => (
            <s.Box key={idx} onClick={() => handleOnClick(idx)}>
              <b>{question}</b>
              <span>{answers[idx]}</span>
            </s.Box>
          ))}
        </s.Right>
      </s.Wrapper>

      {/* Popup */}
      {isOpen && (
        <Popup
          name={name}
          question={quizList[quiz].question}
          answers={quizList[quiz].answers}
          onSelect={handleOnSelect}
          onClose={handleOnClose}
        />
      )}
    </>
  );
}
