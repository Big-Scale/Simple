"use client";

import React, { useState } from "react";
import Title from "../atoms/Title";
import ResultButton from "../atoms/ResultButton";
import Question from "../atoms/Questions";
import styled from "styled-components";
import { log } from "console";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

const GridWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px;
  width: 100%;
`;

interface UserActionProps {
  titleText: string;
  titleColor: string;
  buttonText: string;
  buttonTextColor: string;
  buttonBackgroundColor: string;
  onSendMessage: (question: string) => void;
}

const UserAction: React.FC<UserActionProps> = ({
  titleText,
  titleColor,
  buttonText,
  buttonTextColor,
  buttonBackgroundColor,
  onSendMessage,
}) => {
  const [question, setQuestion] = useState<string>("");

  const handleSendMessage = () => {    
    onSendMessage(question);
    setQuestion(""); // Clear the input after sending the message
  };

  return (
    <Wrapper>
      <Title text={titleText} textColor={titleColor} />
      <GridWrapper>
        {/* <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Enter your question"
        /> */}
      <Question value={question} onChange={(e) => setQuestion(e.target.value)} />
      <ResultButton
          text={buttonText}
          textColor={buttonTextColor}
          backgroundColor={buttonBackgroundColor}
          onClick={handleSendMessage}
        />
      </GridWrapper>
    </Wrapper>
  );
};

export default UserAction;
