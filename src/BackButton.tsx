import { useNavigate } from "react-router-dom";
import { Button } from "../stories/Button";
import React from "react";
import styled from "styled-components";

interface Props {
  to: string;
}

const ButtonContainer = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 10;
`;

export default function BackButtonWrapper({ to }: Props): JSX.Element {
  const navigate = useNavigate();

  const handleBack = () => {
    try {
      navigate(to);
    } catch (error) {
      console.error("An error occurred while navigating:", error);
      // handle the error as appropriate, e.g. show an error message to the user
    }
  };

  return (
    <ButtonContainer> 
    <Button
      className="back-button"
      onClick={handleBack}
      label={"Back 🤡🤡🤡"}
    />
  </ButtonContainer>
  );
}
