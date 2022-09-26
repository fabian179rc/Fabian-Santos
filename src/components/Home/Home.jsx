import Nav from "../Nav/Nav";
import logo from "../../img/logo4.png";
import s from "./Home.module.css";

import React from "react";

export default function Home() {
  return (
    <div>
      <div className={s.navbar}>
        <img src={logo} alt="Logo" className={s.logo} />
        <button className={s.button}>Resumen</button>
      </div>
      <label className={s.span}>» FullStack Developer «</label>
      <Nav />
    </div>
  );
}
