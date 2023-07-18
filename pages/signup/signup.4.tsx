import LoginButton from "@/components/button/login.button";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { styled } from "styled-components";

interface Props {
  nickname: string;
}

const SignUp4 = ({ nickname }: Props) => {
  const router = useRouter();
  const goLogin = () => router.push("/login");
  return (
    <Wrapper>
      <h1 className="name">{nickname}님 </h1>
      <h1>회원가입에 성공하셨습니다.</h1>
      <div className="go_login">
        <Image
          src="/images/congratulation.gif"
          alt="logo"
          width={250}
          height={250}
        />
        <button onClick={goLogin}>Go Login</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #fcfcfa;
  padding: 2rem;
  border-radius: 10px;
  width: 300px;
  h1 {
    margin-bottom: 30px;
    &.name {
      color: #4da3e4;
    }
  }
  button {
    margin-top: 30px;
    width: 100%;
    height: 50px;
    border-radius: 10px;
    background-color: #4da3e4;
    color: #fff;
    font-size: 1.2rem;
    font-weight: bold;
    border: none;
    cursor: pointer;
    &:hover {
      background-color: #2792e4;
    }
  }
`;

export default SignUp4;
