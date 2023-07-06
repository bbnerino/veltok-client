"use client";
import React from "react";
import { styled } from "styled-components";

interface Props {
  onClick: () => void;
  children: string;
}

const LoginButton = ({ onClick, children }: Props) => {
  return <Wrapper onClick={onClick}>{children}</Wrapper>;
};
const Wrapper = styled.button`
  background-color: #0c1118;
  color: #fff;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: none;
  width: 400px;
  height: 50px;
  padding: 0 1rem;
`;
export default LoginButton;