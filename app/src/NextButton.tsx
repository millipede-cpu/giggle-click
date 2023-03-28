import { useNavigate } from "react-router-dom";

interface Props {
  to: string;
}

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

  return <button onClick={handleNext}>Next 🤡🤡🤡</button>;
}

// We added a try block around the call to navigate(to). This is the part of the code that could potentially throw an error.
// If an error is thrown during the execution of the try block, the code will jump to the catch block.
// In the catch block, we log the error to the console using console.error.
// By adding this error handling, we're making our code more robust and defensive. If something unexpected happens during the execution of the component, we'll be able to handle it gracefully and provide feedback to the user.
