import React from "react";
import Nav from "../Nav/Nav";
import Social from "../Social/Social";
import logo from "../../img/logo3.png";
import s from "./Home.module.css";
import { MdOutlineCloudDownload } from "react-icons/md";

export default function Home() {
  return (
    <div>
      <div className={s.navbar}>
        <img src={logo} alt="Logo" className={s.logo} />
        <div className={s.button}>
          <span>RESUMEN </span>
          <a href="https://github.com/fabian179rc"></a>
          <MdOutlineCloudDownload
            className={`${s.btnSocialMedia} ${s.simbol}`}
            size="2em"
            title="Github"
          />
        </div>
      </div>
      <label className={s.span}>» FullStack Developer «</label>
      <Nav />
      <Social />
    </div>
  );
}
