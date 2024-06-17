import React from 'react';
import styled from 'styled-components';

interface ResultButtonProps {
  text: string;
  textColor: string;
  backgroundColor: string;
  onClick: () => void;
}

const ResultButton: React.FC<ResultButtonProps> = ({ text, textColor, backgroundColor, onClick }) => {
  return (
    <button style={{ color: textColor, backgroundColor, padding: '10px 20px', border:'none', borderRadius: '4px', cursor: 'pointer', margin: '8px 0'}} onClick={onClick}>
      {text}
    </button>
  );
};

export default ResultButton;
