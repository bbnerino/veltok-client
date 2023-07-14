import Image from "next/image";
import React from "react";
import { styled } from "styled-components";

const Page3 = () => {
  return (
    <Wrapper data-testid="main-page-3">
      <div data-aos="fade-up">
        <p className="text text1">Link with Github</p>
        <p className="sub_text sub_text1">share with your friends</p>

        <div className="github_wrapper">
          <Image
            src="/images/github.png"
            alt="github"
            width={200}
            height={200}
          />
        </div>
      </div>
      <div data-aos="fade-up">
        <p className="text text2">Community</p>
        <p className="sub_text sub_text2">Communicate with Colleagues</p>
        <div className="community_wrapper">
          <p className="big_text">1000 +</p>
          <p className="sub_text">people helped</p>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background-color: #b2da63;
  color: #fff;
  font-size: 2rem;
  height: 120vh;
  min-height: 1500px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;

  .text {
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.5;
    width: 400px;
    color: #3a0ca3;
    z-index: 1;
  }
  .sub_text {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.5;
    width: 400px;
    color: #3a0ca3;
    z-index: 1;
  }
  .big_text {
    font-size: 5rem;
    font-weight: 700;
    line-height: 1.5;
    color: #3a0ca3;
    z-index: 1;
  }

  .text1 {
    position: absolute;
    top: 50px;
    left: 50px;
  }
  .sub_text1 {
    position: absolute;
    top: 200px;
    left: 50px;
  }
  .text2 {
    position: absolute;
    top: 500px;
    left: 50px;
  }
  .sub_text2 {
    position: absolute;
    top: 630px;
    left: 50px;
  }
  .github_wrapper {
    position: absolute;
    top: 120px;
    right: 20px;
    z-index: 0;
    background-color: #ffffff85;
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10%;
  }
  .community_wrapper {
    position: absolute;
    top: 800px;
    // 중간
    left: 50%;
    transform: translateX(-50%);

    z-index: 0;
    background-color: #ffffff85;
    width: 400px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10%;
    .sub_text {
      position: absolute;
      top: 250px;
      left: 25%;
    }
  }
`;
export default Page3;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
