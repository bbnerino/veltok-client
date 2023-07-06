"use client";

import React from "react";
import { styled } from "styled-components";

interface Props {
  children: string;
  onClick: () => void;
}

const MainLoginButton = ({ children, onClick }: Props) => {
  return <Wrapper onClick={onClick}>{children}</Wrapper>;
};
const Wrapper = styled.button`
  background-color: #3f37c9;
  color: #fff;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  width: 400px;
  height: 60px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #2a2497;
  }
`;
export default MainLoginButton;
