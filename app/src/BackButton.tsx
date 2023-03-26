import { useNavigate } from "react-router-dom";

interface Props {
  to: string;
}

export default function BackButtonWrapper({ to }: Props): JSX.Element {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(to);
  };

  return <button onClick={handleBack}>Back 🤡🤡🤡</button>;
}
