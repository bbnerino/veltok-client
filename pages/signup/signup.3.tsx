import React from "react";
import Input from "@/components/input/input";
import LoginButton from "@/components/button/login.button";
import Image from "next/image";
import { SignupChapter } from ".";

interface Props {
  githubId: string;
  setGithubId: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: () => Promise<void>;
}

const SignUp3 = ({ githubId, setGithubId, onSubmit }: Props) => {
  return (
    <>
      <Image
        className="image"
        src="/images/github.png"
        alt="logo"
        width={100}
        height={100}
      />
      <p className="content">
        Please enter your github ID for github integration
      </p>
      <Input
        placeholder="Github ID"
        value={githubId}
        onChange={(e) => setGithubId(e.target.value)}
      />
      <p className="content2">You can skip this step</p>
      <LoginButton type="signup" onClick={onSubmit} />
    </>
  );
};

export default SignUp3;
