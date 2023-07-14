import { describe } from "node:test";
import { render, mockConsoleError } from "./utils";
import { fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MainPage from "@/pages";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("Main Page", async () => {
  mockConsoleError();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("메인 페이지 렌더링 확인", async () => {
    render(<MainPage />);

    expect(await screen.findByTestId("main-page-1")).toBeInTheDocument();
    expect(await screen.findByTestId("main-page-2")).toBeInTheDocument();
    expect(await screen.findByTestId("main-page-3")).toBeInTheDocument();
    expect(await screen.findByTestId("main-page-4")).toBeInTheDocument();
  });

  test("로그인 버튼, 회원가입 버튼 확인", async () => {
    render(<MainPage />);

    const router = { push: jest.fn() };
    useRouter.mockReturnValue(router);

    const loginButton = await screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();

    userEvent.click(loginButton);

    const push = jest.fn();
    useRouter.mockImplementationOnce(() => ({
      asPath: "/",
      push,
    }));

    fireEvent.click(loginButton);
    expect(router.push).toHaveBeenCalledWith("/login");
  });
});
