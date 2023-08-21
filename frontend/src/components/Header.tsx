import { Link } from "react-router-dom";
import style from "./css/header.module.css";

export default function Header() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  // 화면 크기변경 시
  window.addEventListener("resize", () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });

  return (
    <header>
      <div className={style.link_home}>
        <Link to={"/"} className={style.link}>
          Home
          <div className={style.underline} />
        </Link>
      </div>
      <div className={style.link_group}>
        <Link to={"/sign_in"} className={style.link}>
          Login
        </Link>
        <Link to={"/sign_up"} className={style.link}>
          Sign Up
        </Link>
      </div>
    </header>
  );
}
