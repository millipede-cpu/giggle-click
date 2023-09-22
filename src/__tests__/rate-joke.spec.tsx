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

  test("no happy emoji is displayed when the Happy button is not clicked", () => {
    render(
      <TestErrorBoundary>
        <MemoryRouter>
          <RateJoke />
        </MemoryRouter>
      </TestErrorBoundary>
    );

    // Ensure that the happy emoji is not displayed
    const happyEmoji = screen.queryByTestId("happy-emoji");
    expect(happyEmoji).toBeNull();
  });

  test("no sad emoji is displayed when the Sad button is not clicked", () => {
    render(
      <TestErrorBoundary>
        <MemoryRouter>
          <RateJoke />
        </MemoryRouter>
      </TestErrorBoundary>
    );

    // Ensure that the sad emoji is not displayed
    const sadEmoji = screen.queryByTestId("sad-emoji");
    expect(sadEmoji).toBeNull();
  });

  test("clicking the Sad button 10 times updates the sad state", () => {
    render(<RateJoke />);

    const sadButton = screen.getByText("Sad");

    // Simulate clicking the Sad button 10 times
    for (let i = 0; i < 10; i++) {
      fireEvent.click(sadButton);
    }

    const sadEmoji = screen.getByTestId("sad-emoji");
    expect(sadEmoji).toBeTruthy(); // Ensure that the sad emoji is displayed
  });

  test("clicking the Happy button 10 times updates the happy state", () => {
    render(<RateJoke />);

    const happyButton = screen.getByText("Happy");

    // Simulate clicking the Happy button 10 times
    for (let i = 0; i < 10; i++) {
      fireEvent.click(happyButton);
    }

    const happyEmoji = screen.getByTestId("happy-emoji");
    expect(happyEmoji).toBeTruthy(); // Ensure that the happy emoji is displayed
  });
});
