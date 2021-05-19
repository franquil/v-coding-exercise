import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should renders Home link", () => {
    render(<App />);
    const linkElement = screen.getByText(/Home/i);
    expect(linkElement).toBeInTheDocument();
  });
  it("should renders Login link", () => {
    render(<App />);
    const linkElement = screen.getByText(/Login/i);
    expect(linkElement).toBeInTheDocument();
  });
  it("should renders Dashboard link", () => {
    render(<App />);
    const linkElement = screen.getByText(/Dashboard/i);
    expect(linkElement).toBeInTheDocument();
  });
});
