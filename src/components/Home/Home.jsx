import React from "react";
import Nav from "../Nav/Nav";
import Resumen from "../Resumen/Resumen";
import Social from "../Social/Social";
import Project from "../Projects/Project";
import About from "../About/About";
import s from "./Home.module.css";
import { useSelector } from "react-redux";

export default function Home() {
  const render = useSelector((state) => state.render);

  return (
    <div>
      <Resumen />
      <Nav />
      <Social />
      <label className={s.span}>» FullStack Developer «</label>
      <div className={s.render}>
        {render === "about" ? <About /> : <Project />}
      </div>
    </div>
  );
}
