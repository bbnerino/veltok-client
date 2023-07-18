import { describe, mock } from "node:test";
import { render, screen, waitFor } from "@testing-library/react";
import SignupPage from "@/pages/signup";
import userEvent from "@testing-library/user-event";
import { delay } from "./utils";
import mockAxios from "../__mocks__/axios";

describe("회원가입창 확인", async () => {
  afterEach(() => jest.clearAllMocks());

  describe("회원가입 1페이지", async () => {
    test("회원가입 페이지의 로고 확인", async () => {
      render(<SignupPage />);
      const $logo = await screen.findByAltText("logo_image");
      expect($logo).toBeInTheDocument();
    });

    test("이메일 입력창에 형식에 따라 에러창 출력 확인", async () => {
      render(<SignupPage />);
      const $email = await screen.findByPlaceholderText<HTMLInputElement>(
        "E-mail"
      );
      await userEvent.type($email, "test");
      const $err = await screen.queryByTestId("email-error");
      expect($err).toBeInTheDocument();
      await userEvent.type($email, "abcdg@naver.com");
      expect($err).not.toBeInTheDocument();
    });

    test("비밀번호 입력창에 형식에 따라 에러창 출력 확인", async () => {
      render(<SignupPage />);
      const $password = screen.getByPlaceholderText("Password");
      await userEvent.type($password, "test");
      const $err = await screen.queryByTestId("password-error");
      expect($err).toBeInTheDocument();
      await userEvent.type($password, "qwer1234!");
      expect($err).not.toBeInTheDocument();
    });

    test("비밀번호 확인창에 비밀번호와 비교 에러창 출력 확인", async () => {
      render(<SignupPage />);
      const $password = screen.getByPlaceholderText("Password");
      await userEvent.type($password, "qwer1234!");

      const $passwordCheck = screen.getByPlaceholderText("Password Check");
      await userEvent.type($passwordCheck, "qwer1234@");
      const $err = await screen.queryByTestId("password-check-error");
      expect($err).toBeInTheDocument();

      userEvent.clear($passwordCheck);
      await userEvent.type($passwordCheck, "qwer1234!");
      expect($err).not.toBeInTheDocument();
    });
    test("다음 페이지로 넘어가기 시도", async () => {
      // 결과값 mock 함수로 만들어서 확인
      render(<SignupPage />);
      const $nextBtn = await screen.findByText("Next");
      await userEvent.click($nextBtn);

      const $err = await screen.findByTestId("next-error");
      expect($err).toHaveTextContent("Email format is incorrect.");

      const $email = await screen.findByPlaceholderText("E-mail");
      await userEvent.type($email, "asdf@naver.com");
      await userEvent.click($nextBtn);
      expect($err).toHaveTextContent("The password format is incorrect.");

      const $password = screen.getByPlaceholderText("Password");
      await userEvent.type($password, "qwer1234!");
      await userEvent.click($nextBtn);
      expect($err).toHaveTextContent("Passwords do not match.");

      const $passwordCheck = screen.getByPlaceholderText("Password Check");
      await userEvent.type($passwordCheck, "qwer1234!");
      await userEvent.click($nextBtn);
      const $page2 = await screen.findByText(
        "Please enter a nickname to use in Veltok"
      );
      expect($page2).toBeInTheDocument();
    });
  });
  describe("회원가입 2페이지", async () => {
    test("닉네임 입력창에 형식에 따라 에러창 출력 확인", async () => {
      render(<SignupPage chapterData={2} />);
      const $nickname = await screen.findByPlaceholderText("Nickname");
      await userEvent.type($nickname, "te");

      const $err = await screen.findByTestId("nickname-error");
      expect($err).toBeInTheDocument();

      await userEvent.type($nickname, "heyheyheyhey");
      expect($err).not.toBeInTheDocument();
    });
    test("다음 페이지로 넘어가기 시도", async () => {
      render(<SignupPage chapterData={2} />);
      const $nextBtn = await screen.findByText("Next");
      await userEvent.click($nextBtn);
      const $err = await screen.findByTestId("check-nickname");
      expect($err).toHaveTextContent("Check your nickname");

      const $nickname = await screen.findByPlaceholderText("Nickname");
      await userEvent.type($nickname, "heyheyheyhey");
      await userEvent.click($nextBtn);

      const $page3 = await screen.findByText(
        "Please enter your github ID for github integration"
      );
      expect($page3).toBeInTheDocument();
    });
  });
  describe("회원가입 3페이지", async () => {
    test("다음 페이지로 넘어가기 시도", async () => {
      // axios.post 를 mock 함수로 오버라이드 한다.
      mockAxios.post.mockResolvedValueOnce({
        status: 200,
        data: {
          nickName: "louie",
        },
      });

      render(<SignupPage chapterData={3} />);
      const $nextBtn = await screen.findByText("Sign Up");
      await userEvent.click($nextBtn);
      await delay(500);

      const $page4 = await screen.findByText("louie님");
      expect($page4).toBeInTheDocument();
    });
  });
});
