// src/components/molecules/BotResponse.tsx
import React from "react";
import styled from "styled-components";
import Avatar from "../atoms/Avatar";
import QuestionX from "../atoms/QuestionX";

const Wrapper = styled.div`
  display: flex;
  align-items: right;
  margin: 8px 0 0 0;
  width: 100%;
`;

const BotResponse: React.FC<{ avatarUrl: string; responseText: string }> = ({
  avatarUrl,
  responseText,
}) => {
  return (
    <Wrapper>
      <QuestionX text={responseText} />
      <Avatar imageUrl={avatarUrl} />
    </Wrapper>
  );
};

export default BotResponse;
