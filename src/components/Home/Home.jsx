import React from "react";
import Nav from "../Nav/Nav";
import Resumen from "../Resumen/Resumen";
import Social from "../Social/Social";
import s from "./Home.module.css";

export default function Home() {
  // const render = useSelector((state) => state.render);
  return (
    <div>
      <Resumen />
      <Nav />
      <Social />
      <label className={s.span}>» FullStack Developer «</label>
      <div className={s.renderis}>
        <Social />

        <div className={s.render}></div>
      </div>
    </div>
  );
}
