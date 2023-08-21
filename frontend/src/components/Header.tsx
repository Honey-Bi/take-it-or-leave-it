import { Link } from "react-router-dom";
import style from "./css/header.module.css";

export default function Header() {
  return (
    <header>
      <div className="container">
        <nav>
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
        </nav>
      </div>
    </header>
  );
}
