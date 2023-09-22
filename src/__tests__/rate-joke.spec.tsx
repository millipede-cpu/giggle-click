import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import RateJoke from "../RateJoke";
import TestErrorBoundary from "../TestErrorBoundary";

describe("RateJoke", () => {
  test("renders the happy and sad buttons", () => {
    render(
      <TestErrorBoundary>
        <MemoryRouter>
          <RateJoke />
        </MemoryRouter>
      </TestErrorBoundary>
    );

    const [happyButton, sadButton] = screen.getAllByText((content, element) => {
      // Customize this condition based on your use case
      return ["Happy", "Sad"].includes(content);
    });

    expect(happyButton).toBeTruthy();
    expect(sadButton).toBeTruthy();
  });

  test("updates the happy state when the happy button is clicked", () => {
    render(
      <TestErrorBoundary>
        <MemoryRouter>
          <RateJoke />
        </MemoryRouter>
      </TestErrorBoundary>
    );

    const happyButton = screen.getByText("Happy");
    fireEvent.click(happyButton);

    const happyEmoji = screen.getByTestId("happy-emoji");
    expect(happyEmoji).toBeTruthy(); // Use Jest's toBeTruthy matcher
  });

  test("updates the sad state when the sad button is clicked", () => {
    render(
      <TestErrorBoundary>
        <MemoryRouter>
          <RateJoke />
        </MemoryRouter>
      </TestErrorBoundary>
    );

    const sadButton = screen.getByText("Sad");
    fireEvent.click(sadButton);

    const sadEmoji = screen.getByTestId("sad-emoji");
    expect(sadEmoji).toBeTruthy(); // Use Jest's toBeTruthy matcher
  });
});
