import React, { useState } from "react";
import SignupFormComponent from "../component/signup.form";
import Input from "@/components/input/input";
import LoginButton from "@/components/button/login.button";
import { useRouter } from "next/router";

const Signup2 = () => {
  const router = useRouter();
  const [nickname, setNickname] = useState("");
  const goNext = () => {
    router.push("/signup/3");
  };
  return (
    <SignupFormComponent>
      <p className="content">Please enter a nickname to use in Veltok</p>
      <Input
        placeholder="Nickname"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <LoginButton type="next" onClick={goNext} />
    </SignupFormComponent>
  );
};

export default Signup2;
