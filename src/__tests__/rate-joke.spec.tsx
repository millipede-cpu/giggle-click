// import { render, screen, fireEvent } from "@testing-library/react";
// import RateJoke from "../RateJoke";
// import React from "react";
// import "@testing-library/jest-dom"; // import the jest-dom library

// describe("RateJoke", () => {
//   it("renders the happy and sad buttons", () => {
//     render(<RateJoke />);
//     expect(screen.getByText("Happy")).toBe(true);
//     expect(screen.getByText("Sad")).toBe(true);
//   });

//   it("updates the happy state when the happy button is clicked", () => {
//     render(<RateJoke />);
//     const happyButton = screen.getByText("Happy");
//     fireEvent.click(happyButton);
//     expect(screen.getByText("😊")).toBe(true);
//   });

//   it("updates the sad state when the sad button is clicked", () => {
//     render(<RateJoke />);
//     const sadButton = screen.getByText("Sad");
//     fireEvent.click(sadButton);
//     expect(screen.getByText("😥")).toBe(true);
//   });
// });
