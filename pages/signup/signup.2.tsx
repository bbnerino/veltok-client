import { useState } from "react";
import Input from "@/components/input/input";
import LoginButton from "@/components/button/login.button";
import { styled } from "styled-components";
import { AUTH_REGEX } from "@/@types/auth/auth.regex";
import { SignupChapter } from ".";

interface Props {
  setChapter: React.Dispatch<React.SetStateAction<SignupChapter>>;
  nickname: string;
  setNickname: React.Dispatch<React.SetStateAction<string>>;
}

const Signup2 = ({ setChapter, nickname, setNickname }: Props) => {
  const [nicknameCheckError, setNickNameCheckError] = useState("");
  const [nextError, setNextError] = useState("");
  const goNext = () => {
    if (AUTH_REGEX.NICKNAME.test(nickname)) {
      setChapter(3);
    }
    setNextError("Check your nickname");
  };

  const handleNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
    if (!AUTH_REGEX.NICKNAME.test(nickname)) {
      return setNickNameCheckError(
        "Nickname must be between 4 and 16 characters long"
      );
    }
    return setNickNameCheckError("");
  };

  return (
    <>
      <p className="content">Please enter a nickname to use in Veltok</p>
      <Input
        placeholder="Nickname"
        value={nickname}
        onChange={handleNickname}
      />
      <ErrorMessage>
        {!!nicknameCheckError.length && (
          <p className="error" data-testid="nickname-error">
            {nicknameCheckError}
          </p>
        )}
      </ErrorMessage>
      <LoginButton type="next" onClick={goNext} />
      <ErrorMessage>
        <p className="error" data-testid="check-nickname">
          {nextError}
        </p>
      </ErrorMessage>
    </>
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
