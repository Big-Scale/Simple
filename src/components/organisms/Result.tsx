"use client";

// src/components/organisms/Result.tsx
import React from "react";
import styled from "styled-components";
import UserQuestion from "../molecules/UserQuestion";
import BotResponse from "../molecules/BotResponse";
import UserAction from "../molecules/UserAction";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ScrollableContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`;

const FixedContent = styled.div`
  flex-shrink: 0;
  padding: 20px;
  background: #f1f1f1;
`;

const Result: React.FC<{
  userAvatarUrl: string;
  questionText: string;
  botAvatarUrl: string;
  responseText: string;
}> = ({userAvatarUrl, questionText, botAvatarUrl, responseText}) => {
  return (
    <Wrapper>
      <ScrollableContent>
        <UserQuestion
          avatarUrl={userAvatarUrl}
          questionText={questionText}
        />
        <BotResponse
          avatarUrl={botAvatarUrl}
          responseText={responseText}
        />
        {/* Add more UserQuestion and BotResponse components here as needed */}
      </ScrollableContent>
    </Wrapper>
  );
};

export default Result;
