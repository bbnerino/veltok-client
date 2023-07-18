import React, { useState } from "react";
import SignupFormComponent from "./component/signup.form";
import Signup1 from "./signup.1";
import Signup2 from "./signup.2";
import SignUp3 from "./signup.3";
import { RegisterForm } from "@/@types/auth/auth.register.form";
import { AuthService } from "@/@types/auth/auth.service";
import SignUp4 from "./signup.4";
export type SignupChapter = 1 | 2 | 3 | 4;
interface Props {
  chapterData?: SignupChapter;
}

const SignupPage = ({ chapterData = 1 }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [githubId, setGithubId] = useState("");

  const [chapter, setChapter] = useState<SignupChapter>(chapterData);

  const onSubmit = async () => {
    const registerData = {
      email: email,
      password: password,
      nickname: nickname,
    } as RegisterForm;
    if (githubId !== "") registerData.githubId = githubId;
    await AuthService.register(registerData, () => {
      setChapter(4);
    });
  };

  return (
    <SignupFormComponent>
      {chapter === 1 && (
        <Signup1
          setChapter={setChapter}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
      )}
      {chapter === 2 && (
        <Signup2
          setChapter={setChapter}
          nickname={nickname}
          setNickname={setNickname}
        />
      )}
      {chapter === 3 && (
        <SignUp3
          githubId={githubId}
          setGithubId={setGithubId}
          onSubmit={onSubmit}
        />
      )}
      {chapter === 4 && <SignUp4 nickname={nickname} />}
    </SignupFormComponent>
  );
};

export default SignupPage;
