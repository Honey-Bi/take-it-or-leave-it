import { useNavigate } from "react-router-dom";

export default function One() {
  const navigate = useNavigate();

  return (
    <div className="">
      One
      <button onClick={(e) => navigate(-1)}>back</button>
    </div>
  );
}
