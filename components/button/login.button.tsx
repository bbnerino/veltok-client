"use client";
import React from "react";
import { styled } from "styled-components";

interface Props {
  onClick: () => void;
  type: "login" | "signup" | "next";
}

const LoginButton = ({ onClick, type }: Props) => {
  if (type === "login")
    return <LoginWrapper onClick={onClick}>Log In</LoginWrapper>;
  if (type === "next") return <NextWrapper onClick={onClick}>Next</NextWrapper>;

  return <SignupWrapper onClick={onClick}>Sign Up</SignupWrapper>;
};
const LoginWrapper = styled.button`
  margin-top: 2rem;
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
  cursor: pointer;
  &:hover {
    background-color: #14264e;
  }
`;
const NextWrapper = styled.button`
  margin-top: 2rem;
  background-color: #4d4df0;
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
  cursor: pointer;
  &:hover {
    background-color: #4141ca;
  }
`;
const SignupWrapper = styled.button`
  margin-top: 2rem;
  background-color: #3b5da7;
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
  cursor: pointer;
  &:hover {
    background-color: #1c408e;
  }
`;

export default LoginButton;
