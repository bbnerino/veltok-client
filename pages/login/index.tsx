import { LoginForm } from "@/@types/auth/auth.login.form";
import { AuthService } from "@/@types/auth/auth.service";
import LoginButton from "@/components/button/login.button";
import Input from "@/components/input/input";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { styled } from "styled-components";
import OauthLoginButton from "./components/google.login";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const goSignup = () => router.push("/signup");
  const goMain = () => router.push("/");

  const onSubmit = () => {
    const loginData = {
      email,
      password,
    } as LoginForm;
    AuthService.login(loginData);
  };

  return (
    <Wrapper data-testid="login-page">
      <div className="logo">
        <Image
          onClick={goMain}
          src="/images/logo.png"
          alt="logo"
          width={350}
          height={100}
        />
      </div>
      <InputWrap>
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
        <div className="forget_password">
          <p>Forget password?</p>
        </div>
        <LoginButton type="login" onClick={onSubmit} />
        <LoginButton type="signup" onClick={goSignup} />
      </InputWrap>
      <Seperator>
        <div className="line" />
        <p>OR</p>
        <div className="line" />
      </Seperator>

      <OauthLoginButton type="google" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: #76b1f5;
  .logo {
    margin: auto;
    margin-top: 10rem;
    width: 350px;
    cursor: pointer;
  }
`;
const InputWrap = styled.form`
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
`;
const Seperator = styled.div`
  margin: auto;
  margin-top: 2rem;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    width: 300px;
    font-weight: 600;
    text-align: center;
    font-size: 1.5rem;
  }
  .line {
    width: 80%;
    height: 3px;
    background-color: #333;
  }
`;

export default LoginPage;
