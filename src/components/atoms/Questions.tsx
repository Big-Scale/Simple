// src/components/atoms/Question.tsx
import React, { useState } from 'react';
import styled from 'styled-components';

interface QuestionProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = styled.input`
  padding: 8px;
  margin: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const Question: React.FC<QuestionProps> = ({ value, onChange })  => {
  // const [value, setValue] = useState('');

  return (
    <Input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Ask a question..."
    />
  );
};

export default Question;
