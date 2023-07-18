import Image from "next/image";
import React from "react";
import { styled } from "styled-components";

const Page1 = () => {
  return (
    <Wrapper data-testid="main-page-1">
      <div data-aos="fade-up">
        <Image
          src="/images/red_spray.png"
          alt="red_spray"
          width={350}
          height={450}
        />
      </div>
      <div data-aos="fade-right">
        <Image
          className="logo"
          src="/images/logo.png"
          alt="logo"
          width={350}
          height={100}
        />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background: linear-gradient(-45deg, #ffffff, #6773fc, #40f682, #1bedbc);
  background-size: 400% 400%;
  color: #fff;
  font-size: 2rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .logo {
    margin-top: 4rem;
  }
  animation: backgroundRotate ease 10s infinite;
  @keyframes backgroundRotate {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
export default Page1;
export const getStaticProps = async () => {
  return {
    props: {},
  };
};
