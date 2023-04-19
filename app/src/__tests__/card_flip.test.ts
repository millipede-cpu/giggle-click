// import React from "react";
// import { render, fireEvent } from "@testing-library/react";
// import Card from "../Card"; // import the CardProps type

// it("flips cards face up when two cards match", () => {
//   const cards = ["A", "A", "B", "B"];
//   const { getAllByTestId } = render(<Card cards={cards} />);
//   const [cardA, cardB] = getAllByTestId("card");

//   expect(cardA.getAttribute("data-face-up")).toBe("false");
//   expect(cardB.getAttribute("data-face-up")).toBe("false");

//   fireEvent.click(cardA);
//   fireEvent.click(cardB);

//   expect(cardA.getAttribute("data-face-up")).toBe("true");
//   expect(cardB.getAttribute("data-face-up")).toBe("true");
// });

// export {};

// import React from "react";
// import { render, fireEvent, RenderResult } from "@testing-library/react";
// import Card, { CardProps } from "../Card";

// it("flips cards face up when two cards match", () => {
//   const cards: string[] = ["A", "A", "B", "B"];
//   const { getAllByTestId }: RenderResult = render(<Card cards={cards} />);
//   const [cardA, cardB]: HTMLElement[] = getAllByTestId("card");

//   expect(cardA.getAttribute("data-face-up")).toBe("false");
//   expect(cardB.getAttribute("data-face-up")).toBe("false");

//   fireEvent.click(cardA);
//   fireEvent.click(cardB);

//   expect(cardA.getAttribute("data-face-up")).toBe("true");
//   expect(cardB.getAttribute("data-face-up")).toBe("true");
// });

// export {};
// import * as React from "react";

// import { render, screen, fireEvent } from "@testing-library/react";
// import Card from "../Card";

// it("flips cards face up when two cards match", () => {
//   const cards = ["A", "A", "B", "B"];
//   render(<Card cards={cards} />, {});

//   const [cardA, cardB] = screen.getAllByTestId("card");

//   expect(cardA.getAttribute("data-face-up")).toBe("false");
//   expect(cardB.getAttribute("data-face-up")).toBe("false");

//   fireEvent.click(cardA);
//   fireEvent.click(cardB);

//   expect(cardA.getAttribute("data-face-up")).toBe("true");
//   expect(cardB.getAttribute("data-face-up")).toBe("true");
// });

// export {};

import React from "react";
import {
  render,
  screen,
  fireEvent,
  RenderResult,
} from "@testing-library/react";
import Card from "../Card";

it("flips cards face up when two cards match", () => {
  const cards = ["A", "A", "B", "B"];
  // render(React.createElement(Card, { cards: cards }));
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

export {};
