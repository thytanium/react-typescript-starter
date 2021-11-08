import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("shows app title", () => {
    const { getByText } = render(<App />);
    expect(getByText("React Typescript Starter")).toBeInTheDocument();
  });
});
