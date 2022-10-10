import React from "react";
import style from "./Loading.module.css";

export default function Loading() {
  return (
    <div className={style.all}>
      <div className={style.ring}>
        Cargando
        <span className={style.span}></span>
      </div>
    </div>
  );
}
