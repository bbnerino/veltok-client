import MainPage from "@/pages";
import { render } from "@testing-library/react";

it("renders correctly", () => {
  const { container } = render(<MainPage />);
  expect(container).toMatchSnapshot();
});
