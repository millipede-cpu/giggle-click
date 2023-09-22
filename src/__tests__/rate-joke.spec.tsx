import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import RateJoke from "../RateJoke";

describe("RateJoke", () => {
  it("renders the happy and sad buttons", () => {
    render(<RateJoke />);
    expect(screen.getByText("Happy")).toBeInTheDocument();
    expect(screen.getByText("Sad")).toBeInTheDocument();
  });

  it("updates the happy state when the happy button is clicked", () => {
    render(<RateJoke />);
    const happyButton = screen.getByText("Happy");

    act(() => {
      fireEvent.click(happyButton);
    });

    expect(screen.getByText("😊")).toBeInTheDocument();
  });

  it("updates the sad state when the sad button is clicked", () => {
    render(<RateJoke />);
    const sadButton = screen.getByText("Sad");

    act(() => {
      fireEvent.click(sadButton);
    });

    expect(screen.getByText("😥")).toBeInTheDocument();
  });
});
