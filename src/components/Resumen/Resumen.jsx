import React from "react";
import logo from "../../img/logo.svg";
import style from "./Resumen.module.css";
import { MdOutlineCloudDownload } from "react-icons/md";

export default function Resumen() {
  return (
    <div className={style.navbar}>
      <img src={logo} alt="Logo" className={style.logo} />
      <a
        className={style.link}
        href="Fabian-Santos-Fullstack-Developer.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={style.button}>
          <span>RESUMEN </span>

          <MdOutlineCloudDownload
            className={`${style.btnSocialMedia} ${style.simbol}`}
            size="2em"
            title="Github"
          />
        </div>
      </a>
    </div>
  );
}
