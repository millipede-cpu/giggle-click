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
  right: 1rem;
  z-index: 10;
`;

export default function BackButtonWrapper({ to }: Props): JSX.Element {
  const navigate = useNavigate();

  const handleNext = () => {
    try {
      navigate(to);
    } catch (error) {
      // handle the error here
      console.error("Error:", error);
    }
  };

  return (
    <ButtonContainer>    
      <Button
      className="next-button"
      data-testid="next-button"
      onClick={handleNext}
      label={"Next"}
    />
    </ButtonContainer>
  );
}