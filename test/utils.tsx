import { RouterContext } from "next/dist/shared/lib/router-context";
import { NextRouter } from "next/router";
import { render as defaultRender } from "@testing-library/react";

export async function delay(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export function mockConsoleError() {
  const consoleMock = jest.spyOn(console, "error");
  consoleMock.mockImplementation(() => undefined);

  return consoleMock;
}

interface Props {
  children: React.ReactNode;
  router: NextRouter;
}

export const MockRouterWrapper = ({ children, router }: Props) => {
  return (
    <RouterContext.Provider value={router}>{children}</RouterContext.Provider>
  );
};

export function render(
  ui: RenderUI,
  { wrapper, router, ...options }: RenderOptions = {}
) {
  if (!wrapper) {
    wrapper = ({ children }) => (
      <RouterContext.Provider value={{ ...mockRouter, ...router }}>
        {children}
      </RouterContext.Provider>
    );
  }

  return defaultRender(ui, { wrapper, ...options });
}

type DefaultParams = Parameters<typeof defaultRender>;
type RenderUI = DefaultParams[0];
type RenderOptions = DefaultParams[1] & { router?: Partial<NextRouter> };

export const mockRouter: NextRouter = {
  basePath: "",
  pathname: "/",
  route: "/",
  asPath: "/",
  query: {},
  push: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn(),
  beforePopState: jest.fn(),
  isReady: true,
  isLocaleDomain: false,
  isPreview: false,
  forward: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isFallback: false,
};
