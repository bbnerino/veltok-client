import LoginButton from "@/components/button/login.button";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { styled } from "styled-components";

interface Props {
  children: React.ReactNode;
}

const SignupFormComponent = ({ children }: Props) => {
  const router = useRouter();
  return (
    <Wrapper>
      <div className="logo">
        <Image
          onClick={() => router.push("/")}
          src="/images/logo.png"
          alt="logo_image"
          width={350}
          height={100}
        />
      </div>
      <InputWrap>{children}</InputWrap>
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
const InputWrap = styled.div`
  margin: auto;
  margin-top: 5rem;
  width: 400px;
  text-align: center;
  .image {
    margin: auto;
  }

  .content {
    margin-bottom: 2rem;
    color: #fff;
    font-size: 1.7rem;
    font-weight: bold;
    text-align: center;
  }
  .content2 {
    margin-bottom: 2rem;
    color: #345065;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: end;
  }
`;
export default SignupFormComponent;
