import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();
  return (
    <div className="">
      <button onClick={(e) => navigate("/sign")}>Login</button>
    </div>
  );
}
