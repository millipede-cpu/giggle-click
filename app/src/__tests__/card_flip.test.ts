// adding the correct import paths.
import React from "react";
import TestRenderer from "react-test-renderer";
import Cards from "./Cards";

// card component will render list of cards.
describe("Card component", () => {
  it("renders a list of cards", () => {
    const cards = ["A", "B", "C"];
    const component = TestRenderer.create(<Cards cards={cards} />);
    const tree = component.toJSON();

    // Verifying that the component renders a list of cards with the correct length.
    expect(tree.children.length).toBe(3);
    expect(tree.children.every((child) => child.type === "div")).toBe(true);
  });
});
