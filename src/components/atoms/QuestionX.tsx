// src/components/atoms/QuestionX.tsx
import React from 'react';
import styled from 'styled-components';

interface QuestionXProps {
  text: string;
}

const Text = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 0 8px 0px 8px;
  width: calc(100% - 100px);
`;

const QuestionX: React.FC<QuestionXProps> = ({ text }) => {
  return <Text>{text}</Text>;
};

export default QuestionX;
