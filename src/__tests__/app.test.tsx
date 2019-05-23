import React from "react";
import { render, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";

import App from "../App";

afterEach(cleanup);

describe("My first test", () => {
  it("Component App", () => {
    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });
  it("Should have button submit", () => {
    const { findByTestId } = render(<App />);

    expect(findByTestId("inputTodo")).toBe(true);
  });
});
