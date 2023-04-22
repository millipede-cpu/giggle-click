import React from "react";
import {
  render,
  screen,
  fireEvent,
  RenderResult,
} from "@testing-library/react";
import Card, { CardProps } from "public/src/Card.tsx";

it("flips cards face up when two cards match", () => {
  const cards = ["A", "A", "B", "B"];
  render(<Card cards={cards} value="A" faceUp={false} onclick={() => {}} />);
  const [cardA, cardB] = screen.getAllByTestId("card") as [
    HTMLElement,
    HTMLElement
  ];

  expect(cardA.getAttribute("data-face-up")).toBe("false");
  expect(cardB.getAttribute("data-face-up")).toBe("false");

  fireEvent.click(cardA);
  fireEvent.click(cardB);

  expect(cardA.getAttribute("data-face-up")).toBe("true");
  expect(cardB.getAttribute("data-face-up")).toBe("true");
});

export {};
