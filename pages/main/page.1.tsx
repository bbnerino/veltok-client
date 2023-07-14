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
  background-color: #76b1f5;
  color: #fff;
  font-size: 2rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
  }
  .logo {
    margin-top: 4rem;
  }
`;
export default Page1;
export const getStaticProps = async () => {
  return {
    props: {},
  };
};