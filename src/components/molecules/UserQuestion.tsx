// src/components/molecules/UserQuestion.tsx
import React from 'react';
import styled from 'styled-components';
import Avatar from '../atoms/Avatar';
import QuestionX from '../atoms/QuestionX';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0 0 0;
  width: 100%;
`;

const UserQuestion: React.FC<{ avatarUrl: string; questionText: string }> = ({ avatarUrl, questionText }) => {
  return (
    <Wrapper>
      <Avatar imageUrl={avatarUrl} />
      <QuestionX text={questionText} />
    </Wrapper>
  );
};

export default UserQuestion;
