// src/components/atoms/Avatar.tsx
import React from 'react';
import styled from 'styled-components';

interface AvatarProps {
  imageUrl: string;
}

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Avatar: React.FC<AvatarProps> = ({ imageUrl }) => {
  return <Image src={imageUrl} alt="Avatar" />;
};

export default Avatar;
