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
  const [nicknameCheckError, setNickNameCheckError] = useState(false);

  const goNext = () => setChapter(3);

  const handleNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
    if (AUTH_REGEX.NICKNAME.test(nickname)) {
      return setNickNameCheckError(false);
    }
    return setNickNameCheckError(true);
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
        {nicknameCheckError && (
          <p className="error">
            Nickname must be between 4 and 16 characters long
          </p>
        )}
      </ErrorMessage>
      <LoginButton type="next" onClick={goNext} />
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
