import React, { useEffect, useState } from "react";
import SignupFormComponent from "../component/signup.form";
import Input from "@/components/input/input";
import LoginButton from "@/components/button/login.button";
import { useRouter } from "next/router";
import { styled } from "styled-components";
import { AUTH_REGEX } from "@/@types/auth/auth.regex";

const Signup2 = () => {
  const router = useRouter();
  const [nickname, setNickname] = useState("");
  const [passwordCheckError, setPasswordCheckError] = useState(false);

  const goNext = () => {
    router.push({
      pathname: "/signup/3",
      query: { ...router.query, nickname },
    });
  };

  const handleNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
    if (AUTH_REGEX.NICKNAME.test(nickname)) {
      return setPasswordCheckError(false);
    }
    return setPasswordCheckError(true);
  };

  return (
    <SignupFormComponent>
      <p className="content">Please enter a nickname to use in Veltok</p>
      <Input
        placeholder="Nickname"
        value={nickname}
        onChange={handleNickname}
      />
      <ErrorMessage>
        {passwordCheckError && (
          <p className="error">
            Nickname must be between 4 and 16 characters long
          </p>
        )}
      </ErrorMessage>
      <LoginButton type="next" onClick={goNext} />
    </SignupFormComponent>
  );
};
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
export default Signup2;
