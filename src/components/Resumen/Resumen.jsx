import React from "react";
import logo from "../../img/logo3.png";
// import Cv from "../../Cv/Fabian-Santos-Fullstack-Developer.pdf";
import s from "./Resumen.module.css";
import { MdOutlineCloudDownload } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Resumen() {
  return (
    <div className={s.navbar}>
      <img src={logo} alt="Logo" className={s.logo} />
      <a
        className={s.link}
        href="Fabian-Santos-Fullstack-Developer.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={s.button}>
          <span>RESUMEN </span>

          <MdOutlineCloudDownload
            className={`${s.btnSocialMedia} ${s.simbol}`}
            size="2em"
            title="Github"
          />
        </div>
      </a>
    </div>
  );
}
