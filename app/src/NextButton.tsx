import { useNavigate } from "react-router-dom";

export default function NextButton(): JSX.Element {
  const navigate = useNavigate();

  return (
    <button className="next-button" onClick={() => navigate(1)}>
      Click for giggles 🤡🤡🤡
    </button>
  );
}
