import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();
  return (
    <div className="">
      Hello World!
      <button onClick={(e) => navigate("/one")}>move!</button>
    </div>
  );
}
