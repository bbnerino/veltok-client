import { AUTH_REGEX } from "@/@types/auth/auth.regex";
import LoginButton from "@/components/button/login.button";
import Input from "@/components/input/input";
import React, { useState } from "react";
import { styled } from "styled-components";
import { SignupChapter } from ".";

interface Props {
  setChapter: React.Dispatch<React.SetStateAction<SignupChapter>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

const Signup1 = ({
  setChapter,
  email,
  setEmail,
  password,
  setPassword,
}: Props) => {
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordCheckError, setPasswordCheckError] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState("");

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (AUTH_REGEX.EMAIL.test(e.target.value)) return setEmailError(false);
    return setEmailError(true);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (AUTH_REGEX.PASSWORD.test(e.target.value)) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }

    if (passwordCheck === e.target.value) return setPasswordCheckError(false);
    return setPasswordCheckError(true);
  };
  const handlePasswordCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordCheck(e.target.value);
    if (password === e.target.value) return setPasswordCheckError(false);
    return setPasswordCheckError(true);
  };
  const goNext = () => {
    if (AUTH_REGEX.EMAIL.test(email) === false) {
      return alert("이메일 형식이 올바르지 않습니다.");
    }
    if (AUTH_REGEX.PASSWORD.test(password) === false) {
      return alert("비밀번호 형식이 올바르지 않습니다.");
    }
    if (password !== passwordCheck) {
      return alert("비밀번호가 일치하지 않습니다.");
    }
    setChapter(2);
  };
  return (
    <>
      <Input placeholder="E-mail" value={email} onChange={handleEmail} />

      <ErrorMessage>
        {emailError && (
          <p className="error" data-testid="email-error">
            Not a valid email address. Please enter a valid email address.
          </p>
        )}
      </ErrorMessage>
      <Input
        placeholder="Password"
        value={password}
        onChange={handlePassword}
        type="password"
      />
      <ErrorMessage>
        {passwordError && (
          <p className="error">
            Password must be at least 8 characters long and contain at least one
          </p>
        )}
      </ErrorMessage>
      <Input
        placeholder="Password Check"
        value={passwordCheck}
        onChange={handlePasswordCheck}
        type="password"
      />
      <ErrorMessage>
        {passwordCheckError && (
          <p className="error">
            Password is not the same as the one you entered.
          </p>
        )}
      </ErrorMessage>
      <LoginButton type="next" onClick={goNext} />
    </>
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
const ErrorMessage = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: left;
  padding-left: 1rem;
  height: 2rem;
  .error {
    font-size: 0.9rem;
    color: #d11919;
    font-weight: 500;
  }
`;
export default Signup1;
