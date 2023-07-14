import { describe } from "node:test";
import { getByPlaceholderText, render, screen } from "@testing-library/react";
import SignupPage from "@/pages/signup";
import userEvent from "@testing-library/user-event";
import { useEffect } from "react";

describe("회원가입창 확인", async () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  test("회원가입 페이지의 로고 확인", async () => {
    render(<SignupPage />);
    const $logo = await screen.findByAltText("logo_image");
    expect($logo).toBeInTheDocument();
  });

  test("회원가입 페이지의 이메일 입력창에 형식에 안맞게 적었을 시 에러창 출력 확인", async () => {
    render(<SignupPage />);
    const $email = await screen.findByPlaceholderText<HTMLInputElement>(
      "E-mail"
    );
    userEvent.click($email);
    await userEvent.type($email, "test");
    const $err = await screen.queryByTestId("email-error");
    expect($err).toBeInTheDocument();
  });

  test("회원가입 페이지의 이메일 입력창에 형식에 맞게 적었을 시 에러창 없는지 확인", async () => {
    const { getByPlaceholderText } = render(<SignupPage />);

    const $email = getByPlaceholderText("E-mail");

    userEvent.clear($email);
    userEvent.click($email);
    await userEvent.type($email, "abcdg@naver.com");
    console.log(screen.debug());
    const $err = await screen.queryByTestId("email-error");
    expect($err).not.toBeInTheDocument();
  });
});
