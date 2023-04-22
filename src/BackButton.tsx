import { useNavigate } from "react-router-dom";
import { Button } from "../stories/Button";
import React from "react";

interface Props {
  to: string;
}

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
    <Button
      className="back-button"
      onClick={handleBack}
      label={"Back 🤡🤡🤡"}
    />
  );
}
