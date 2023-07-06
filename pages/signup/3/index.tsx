import React, { useState } from "react";
import SignupFormComponent from "../component/signup.form";
import Input from "@/components/input/input";
import LoginButton from "@/components/button/login.button";
import Image from "next/image";

const SignUp3 = () => {
  const [githubId, setGithubId] = useState("");
  const goNext = () => {};
  return (
    <SignupFormComponent>
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
      <LoginButton type="signup" onClick={goNext} />
    </SignupFormComponent>
  );
};

export default SignUp3;
