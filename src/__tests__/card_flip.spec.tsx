import { render, screen, fireEvent } from "@testing-library/react";
import Card from "../Card";
import React from "react";

it("flips cards face up when two cards match", () => {
  const cards = ["A", "A", "B", "B"];
  render(<Card cards={cards} value="A" faceUp={false} onClick={() => {}} />);
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
