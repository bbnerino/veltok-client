import LoginButton from "@/components/button/login.button";
import React from "react";
import { styled } from "styled-components";

const Page4 = () => {
  return (
    <Wrapper>
      <LoginButton>Login</LoginButton>
      <LoginButton>Join Now</LoginButton>
      <p>To The Top</p>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background-color: #49debe;
  color: #fff;
  font-size: 2rem;
  height: 50vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;
  justify-content: center;
  align-items: center;
  p {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.5;
    color: #3a0ca3;
    z-index: 1;
    margin-top: 5rem;
  }
  button {
    margin-top: 3rem;
  }
`;

export default Page4;
