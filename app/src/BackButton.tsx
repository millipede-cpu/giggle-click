import { useNavigate } from "react-router-dom";

export default function BackButton(): JSX.Element {
  const navigate = useNavigate();

  return (
    <button className="next-button" onClick={() => navigate(-1)}>
      Back 🤡🤡🤡
    </button>
  );
}
