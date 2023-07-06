import LoginButton from "@/components/button/login.button";
import Input from "@/components/input/input";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { styled } from "styled-components";
import SignupFormComponent from "./component/signup.form";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const router = useRouter();

  const goNext = () => {
    router.push("/signup/2");
  };
  return (
    <SignupFormComponent>
      <Input
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      <Input
        placeholder="Password Check"
        value={passwordCheck}
        onChange={(e) => setPasswordCheck(e.target.value)}
        type="password"
      />
      <LoginButton type="next" onClick={goNext} />
    </SignupFormComponent>
  );
};

const Wrapper = styled.section`
  background-color: #76b1f5;
  .logo {
    margin: auto;
    margin-top: 10rem;
    width: 350px;
  }
`;
const InputWrap = styled.div`
  margin: auto;
  margin-top: 5rem;
  width: 400px;
  .forget_password {
    margin-top: 1rem;
    text-align: right;
    margin-right: 0.5rem;
    margin-bottom: 3rem;
    p {
      font-size: 1rem;
      color: #2a4ea1;
      font-weight: 400;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
        color: #14264e;
      }
    }
  }
  input {
    margin-top: 1rem;
  }
`;
export default SignupPage;
