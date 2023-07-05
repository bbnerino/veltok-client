import Image from "next/image";
import React from "react";
import { styled } from "styled-components";

const Page2 = () => {
  return (
    <Wrapper>
      <p className="text">
        Grow with Veltok Communicate with friends and have fun
      </p>
      <Image
        src="/images/rainbow_spray.png"
        alt="rainbow_spray"
        className="rainbow_spray"
        width={500}
        height={450}
      />
      <Image
        className="logo"
        src="/images/logo.png"
        alt="logo"
        width={350}
        height={100}
      />
    </Wrapper>
  );
};
const Wrapper = styled.main`
  background-color: #4cc9f0;
  color: #fff;
  font-size: 2rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;
  .rainbow_spray {
    position: absolute;
    top: 50px;
    right: -200px;
  }
  .logo {
    position: absolute;
    top: 600px;
    right: 50px;
    margin-top: 4rem;
  }
  .text {
    position: absolute;
    top: 50px;
    left: 50px;
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.5;
    width: 400px;
    color: #3A0CA3;
    z-index: 1;
  }
`;
export default Page2;
