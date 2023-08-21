import style from "./css/main.module.css";

export default function Main() {
  return (
    <div className={style.content}>
      <div className={style.stats}>a</div>
      <div className={style.dialog}>a</div>
      <div className={style.deck}></div>
      <div className={style.name}>
        test
        {false ? <span className={style.subname}></span> : ""}
      </div>
    </div>
  );
}
