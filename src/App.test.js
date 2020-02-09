import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("render taskbox screen", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Taskbox/i);
  expect(linkElement).toBeInTheDocument();
});
