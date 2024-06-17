// src/components/atoms/Title.tsx
import React from 'react';
import styled from 'styled-components';

interface TitleProps {
  textColor: string;
  text: string;
}

const StyledTitle = styled.h1<{ textColor: string }>`
  color: ${(props) => props.textColor};
  padding: 16px;
  font-size: 32px;
`;

const Title: React.FC<TitleProps> = ({ textColor, text }) => {
  return <StyledTitle textColor={textColor}>{text}</StyledTitle>;
};

export default Title;
