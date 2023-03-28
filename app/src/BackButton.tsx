import { useNavigate } from "react-router-dom";

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

  return <button onClick={handleBack}>Back 🤡🤡🤡</button>;
}
