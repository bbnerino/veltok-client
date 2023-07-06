import Image from "next/image";
import React from "react";
import { styled } from "styled-components";

const Page2 = () => {
  return (
    <Wrapper>
      <div data-aos="fade-left">
        <p className="text">
          Grow with Veltok Communicate with friends and have fun
        </p>
      </div>
      <div data-aos="fade-right">
        <Image
          src="/images/rainbow_spray.png"
          alt="rainbow_spray"
          className="rainbow_spray"
          width={500}
          height={450}
        />
      </div>
      <div data-aos="fade-up">
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
const Wrapper = styled.main`
  background-color: #4cc9f0;
  color: #fff;
  font-size: 2rem;
  height: 100vh;
  min-height: 1000px;
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
    color: #3a0ca3;
    z-index: 2;
  }
`;
export default Page2;
export const getStaticProps = async () => {
  return {
    props: {},
  };
};