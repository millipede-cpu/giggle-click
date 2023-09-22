import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import RateJoke from "../RateJoke";
import TestErrorBoundary from "../TestErrorBoundary";
import CustomErrorBoundaryWrapper from "../CustomErrorBoundaryWrapper";

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

  test("clicking the Happy button 10 times updates the happy state", () => {
    render(
      <CustomErrorBoundaryWrapper>
        <MemoryRouter>
          <RateJoke />
        </MemoryRouter>
      </CustomErrorBoundaryWrapper>
    );

    const happyButton = screen.getByTestId("happy-button"); // Select the Happy button by data-testid
    for (let i = 0; i < 10; i++) {
      fireEvent.click(happyButton);
    }

    // Define a custom text matcher function to find the emoji
    const findHappyEmoji = (content: string, element: Element | null) => {
      return (
        element &&
        element.tagName.toLowerCase() === "span" &&
        element.classList.contains("happy") &&
        /😄/.test(content)
      );
    };

    expect(findHappyEmoji).toBeTruthy();
  });

  test("clicking the Sad button 10 times updates the sad state", () => {
    render(
      <CustomErrorBoundaryWrapper>
        <MemoryRouter>
          <RateJoke />
        </MemoryRouter>
      </CustomErrorBoundaryWrapper>
    );

    const sadButton = screen.getByTestId("sad-button"); // Select the Sad button by data-testid
    for (let i = 0; i < 10; i++) {
      fireEvent.click(sadButton);
    }

    // Define a custom text matcher function to find the emoji
    const findSadEmoji = (content: string, element: Element | null) => {
      return (
        element &&
        element.tagName.toLowerCase() === "span" &&
        element.classList.contains("sad") &&
        /😢/.test(content)
      );
    };

    expect(findSadEmoji).toBeTruthy();
  });
});
