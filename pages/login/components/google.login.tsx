"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { styled } from "styled-components";

interface Props {
  type: "google";
}

const OauthLoginButton = ({ type }: Props) => {
  const { data: session } = useSession();
  if (type === "google") {
    return (
      <>
        {session && (
          <>
            <p>NAME:{session.user?.name}</p>
            <p>EMAIL : {session.user?.email}</p>
          </>
        )}
        <button onClick={() => signIn("google")}>LOGIN</button>
        <button onClick={() => signOut()}>LOGOUT</button>
        <OauthWrap>
          <Wrapper>
            <Image
              className="logo_image"
              src="/images/google.png"
              alt="google"
              width={25}
              height={25}
            />
            <p>Continue with Google</p>
          </Wrapper>
        </OauthWrap>
      </>
    );
  }
  return <div>OauthLoginButton</div>;
};

const Wrapper = styled.div`
  background-color: #ffffff91;
  color: #000;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  border-radius: 10px;
  border: none;
  width: 400px;
  height: 50px;
  cursor: pointer;
  .logo_image {
    margin-left: 1rem;
  }
  p {
    margin-left: 2rem;
  }
`;
const OauthWrap = styled.div`
  margin: auto;
  margin-top: 4rem;
  width: 400px;
`;
export default OauthLoginButton;
