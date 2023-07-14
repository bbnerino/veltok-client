import { describe } from "node:test";
import { render } from "./utils";
import { screen } from "@testing-library/react";
import MainPage from "@/pages";

describe("Main Page", async () => {
  test("메인 페이지 렌더링 확인", async () => {
    render(<MainPage />);

    expect(await screen.findByTestId("main-page-1")).toBeInTheDocument();
    expect(await screen.findByTestId("main-page-2")).toBeInTheDocument();
    expect(await screen.findByTestId("main-page-3")).toBeInTheDocument();
    expect(await screen.findByTestId("main-page-4")).toBeInTheDocument();
  });

  test("로그인 버튼, 회원가입 버튼 확인", async () => {
    render(<MainPage />);

    const loginButton = await screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();

    const signupButton = await screen.getByRole("button", { name: "Join Now" });
    expect(signupButton).toBeInTheDocument();
  });
});
