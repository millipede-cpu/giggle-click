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
      <MemoryRouter>
        <RateJoke />
      </MemoryRouter>
    );

    const happyButton = screen.getByText("Happy");
    fireEvent.click(happyButton);

    const happyEmoji = screen.getByTestId("happy-emoji");
    expect(happyEmoji).toBeTruthy(); // Use Jest's toBeTruthy matcher
  });

  test("updates the sad state when the sad button is clicked", () => {
    render(
      <MemoryRouter>
        <RateJoke />
      </MemoryRouter>
    );

    const sadButton = screen.getByText("Sad");
    fireEvent.click(sadButton);

    const sadEmoji = screen.getByTestId("sad-emoji");
    expect(sadEmoji).toBeTruthy(); // Use Jest's toBeTruthy matcher
  });
});

// import React from "react";
// import { render, fireEvent, screen } from "@testing-library/react";
// import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter
// import RateJoke from "../RateJoke";
// // Import the toBeInTheDocument function
// import "@testing-library/jest-dom/extend-expect";

// test("updates the happy state when the happy button is clicked", () => {
//   render(
//     <MemoryRouter>
//       <RateJoke />
//     </MemoryRouter>
//   );

//   const happyButton = screen.getByText("Happy");
//   fireEvent.click(happyButton);

//   const happyEmoji = screen.getByTestId("happy-emoji"); // Use a data-testid attribute
//   expect(happyEmoji).toBeInTheDocument();
// });

// test("updates the sad state when the sad button is clicked", () => {
//   render(
//     <MemoryRouter>
//       <RateJoke />
//     </MemoryRouter>
//   );

//   const sadButton = screen.getByText("Sad");
//   fireEvent.click(sadButton);

//   const sadEmoji = screen.getByTestId("sad-emoji"); // Use a data-testid attribute
//   expect(sadEmoji).toBeInTheDocument();
// });

// import { render, screen, fireEvent } from "@testing-library/react";
// import RateJoke from "../RateJoke";
// import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter
// import React from "react";
// import "@testing-library/jest-dom";
// import TestErrorBoundary from "../TestErrorBoundary"; // Import the TestErrorBoundary component
// import CustomErrorBoundaryWrapper from "../CustomErrorBoundaryWrapper";

// describe("RateJoke", () => {
//   it("renders the happy and sad buttons", () => {
//     render(
//       <MemoryRouter>
//         <RateJoke />
//       </MemoryRouter>
//     );
//     expect(screen.getByText("Happy")).toBeInTheDocument();
//     expect(screen.getByText("Sad")).toBeInTheDocument();
//   });

//   it("updates the happy state when the happy button is clicked", () => {
//     render(
//       <MemoryRouter>
//         <RateJoke />
//       </MemoryRouter>
//     );
//     const happyButton = screen.getByText("Happy");
//     fireEvent.click(happyButton);
//     expect(screen.getByText("😊")).toBeInTheDocument();
//   });

//   it("updates the sad state when the sad button is clicked", () => {
//     render(
//       <MemoryRouter>
//         <RateJoke />
//       </MemoryRouter>
//     );
//     const sadButton = screen.getByText("Sad");
//     fireEvent.click(sadButton);
//     expect(screen.getByText("😥")).toBeInTheDocument();
//   });
// });
