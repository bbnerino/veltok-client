import React, { useState } from "react";
import SignupFormComponent from "../component/signup.form";
import Input from "@/components/input/input";
import LoginButton from "@/components/button/login.button";
import Image from "next/image";
import { useRouter } from "next/router";
import { RegisterForm } from "@/@types/auth/auth.register.form";
import { AuthService } from "@/@types/auth/auth.service";

const SignUp3 = () => {
  const [githubId, setGithubId] = useState("");
  const router = useRouter();

  const onSubmit = () => {
    const registerData = {
      email: router.query.email,
      password: router.query.password,
      nickname: router.query.nickname,
    } as RegisterForm;
    if (githubId !== "") registerData.githubId = githubId;
    AuthService.register(registerData).then((res) => {
      alert("회원가입이 완료되었습니다.");
      router.push("/login");
    });
  };
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
      <LoginButton type="signup" onClick={onSubmit} />
    </SignupFormComponent>
  );
};

export default SignUp3;
