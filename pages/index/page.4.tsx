import MainLoginButton from "@/components/button/main.login.button";
import { useRouter } from "next/router";
import React from "react";
import { styled } from "styled-components";

const Page4 = () => {
  const router = useRouter();
  const goLogin = () => {
    router.push("/login");
  };
  const goSignUp = () => {
    router.push("/signup");
  };
  return (
    <Wrapper>
      <MainLoginButton onClick={goLogin}>Login</MainLoginButton>
      <MainLoginButton onClick={goSignUp}>Join Now</MainLoginButton>
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
