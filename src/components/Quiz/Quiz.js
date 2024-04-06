import React, { useState } from 'react';
import s from './Quiz.styles';

import { useParams } from 'react-router-dom';
import ProfileImage from '../Member/ProfileImage';
import { quizData, quizList } from './QuizData';
import Popup from './Popup/Popup';

export default function Quiz() {
  const [isOpen, setIsOpen] = useState(false);
  const [quiz, setQuiz] = useState(null);

  const { slug } = useParams();
  const post = quizData[slug];
  if (!post) {
    return <span> The blog post youve reqeustsed doesn t exist.</span>;
  }

  /** Funciton */
  function handleOnClick(idx) {
    setQuiz(quizList[idx]);
    setIsOpen(true);
  }

  function handleOnSelect(idx) {
    setIsOpen(false);
    console.log(idx);
  }

  function handleOnClose() {
    setIsOpen(false);
  }

  const { name, brief, profileImageURL, github } = post;
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
            <b>정답 수</b> 0/4
          </s.Result>

          {/* QuizBox */}
          {quizList.map(({ question }, idx) => (
            <s.Box key={idx} onClick={() => handleOnClick(idx)}>
              <b>{question}</b>
              <span>?</span>
            </s.Box>
          ))}
        </s.Right>
      </s.Wrapper>

      {isOpen && (
        <Popup
          name={name}
          question={quiz.question}
          answers={quiz.answers}
          onSelect={handleOnSelect}
          onClose={handleOnClose}
        />
      )}
    </>
  );
}
