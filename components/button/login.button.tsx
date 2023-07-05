import React from "react";
import { styled } from "styled-components";

interface Props {
  children: string;
}

const LoginButton = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
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
`;
export default LoginButton;
