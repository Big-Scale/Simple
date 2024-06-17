"use client";

import React, { useState } from "react";
import UserAction from "../components/molecules/UserAction";
import Result from "../components/organisms/Result";
import { log } from "console";
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 4em;
  background: white;
  height: 100%;
`;

const SimpleChat: React.FC = () => {
  const [messages, setMessages] = useState<
    Array<{ userQuestion: string; botResponse: string }>
  >([]);

  const handleSendMessage = async (question: string) => {
    console.log(question);

    const botResponse = await fetchChatGPTResponse(question);
    setMessages([...messages, { userQuestion: question, botResponse }]);
  };

  const fetchChatGPTResponse = async (question: string): Promise<string> => {
    // Replace with your API call to ChatGPT
    // const response = await fetch("/api/openai/", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ question }),
    // });
    // const data = await response.json();
    // console.log(data);

    // return data.answer;
    return "Hi! How can I assist you today?"
  };

  return (
    <Wrapper>
      <UserAction
        titleText="Simple ChatGPT"
        titleColor="#000"
        buttonText="Result"
        buttonTextColor="#FFF"
        buttonBackgroundColor="#0070f3"
        onSendMessage={handleSendMessage}
      />
      <div style={{ maxHeight: "70vh", overflowY: "auto" }}>
        {messages.map((msg, index) => (
          <Result
            key={index}
            userAvatarUrl="user.jpg"
            questionText={msg.userQuestion}
            botAvatarUrl="bot.png"
            responseText={msg.botResponse}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default SimpleChat;
