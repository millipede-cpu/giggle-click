import styled from "styled-components";
import BackButton from "./BackButton";
import NextButton from "./NextButton";

interface Props {}

const CardFlipGame: Props = (): JSX.Element => {
  try {
    // Your code that could potentially throw an error goes here
    return (
      <>
        <NextButton to={"/rate-joke"} />
        <BackButton to={"/joke-randomiser"} />
        <Title>Card Flip Game 🃟⤵️🃏</Title>
      </>
    );
  } catch (error) {
    // Your error handling code goes here
    console.error("An error occurred:", error);
    return (
      <p>
        😱😱😱😱😱😱😱😱😱😱😱😱 Sorry, something went wrong. Theres no flip
        game for us today NOOOOOOO!!!!!!! 😲😲😲😲😲😲😲😲
      </p>
    );
  }
};

const Title = styled.h1`
  font-size: 3rem;
  color: #0eb0f3;
`;

export default CardFlipGame;

// wrapped the code that could potentially throw an error in a try block. If an error is thrown, execution will jump to the catch block, where you can handle the error in whatever way you see fit.

// In the catch block, I've simply logged the error to the console and returned a simple error message.
