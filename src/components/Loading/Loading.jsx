import React from "react";
import s from "./Loading.module.css";

export default function Loading() {
  return (
    <div className={s.all}>
      <div className={s.ring}>
        Cargando
        <span className={s.span}></span>
      </div>
    </div>
  );
}
