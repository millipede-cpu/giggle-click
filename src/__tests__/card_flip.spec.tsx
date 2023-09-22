import { render, screen } from "@testing-library/react";
import Card from "../Card"; // Import your Card component
import React from "react";

it("renders a card with data-face-up true", () => {
  render(
    <Card
      value="A"
      faceUp={true}
      onClick={() => {}}
      cards={[]} // Provide a dummy cards prop
    />
  );
  const card = screen.getByTestId("card") as HTMLElement;

  // Expect that the data-face-up attribute is always "true"
  expect(card.getAttribute("data-face-up")).toBe("true");
});

// // Your test case
// it("flips cards face up when two cards match", () => {
//   const cards = ["A", "A", "B", "B"];

//   // Render two Card components, each with a unique test ID
//   render(
//     <div>
//       <Card
//         cards={cards}
//         value="A"
//         faceUp={false}
//         onClick={() => {}}
//         data-testid="card1"
//       />
//       <Card
//         cards={cards}
//         value="A"
//         faceUp={false}
//         onClick={() => {}}
//         data-testid="card2"
//       />
//     </div>
//   );

//   // Select the Card components by their test IDs
//   const [cardA, cardB] = screen.getAllByTestId("card") as [
//     HTMLElement,
//     HTMLElement
//   ];

//   // Your test assertions
//   expect(cardA.getAttribute("data-face-up")).toBe("false");
//   expect(cardB.getAttribute("data-face-up")).toBe("true");

//   fireEvent.click(cardA);
//   fireEvent.click(cardB);

//   expect(cardA.getAttribute("data-face-up")).toBe("true");
//   expect(cardB.getAttribute("data-face-up")).toBe("false");
// });

// import { render, screen, fireEvent } from "@testing-library/react";
// import Card from "../Card";
// import React from "react";

// it("flips cards face up when two cards match", () => {
//   const cards = ["A", "A", "B", "B"];
//   render(<Card cards={cards} value="A" faceUp={false} onClick={() => {}} />);
//   const [cardA, cardB] = screen.getAllByTestId("card") as [
//     HTMLElement,
//     HTMLElement
//   ];

//   expect(cardA.getAttribute("data-face-up")).toBe("false");
//   expect(cardB.getAttribute("data-face-up")).toBe("false");

//   fireEvent.click(cardA);
//   fireEvent.click(cardB);

//   expect(cardA.getAttribute("data-face-up")).toBe("true");
//   expect(cardB.getAttribute("data-face-up")).toBe("true");
// });
