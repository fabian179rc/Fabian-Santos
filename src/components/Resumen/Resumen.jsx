import React from "react";
import logo from "../../img/logo3.png";
import Cv from "../../Cv/Fabian-Santos-Fullstack-Developer.pdf";
import s from "./Resumen.module.css";
import { MdOutlineCloudDownload } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Resumen() {
  return (
    <div className={s.navbar}>
      <img src={logo} alt="Logo" className={s.logo} />
      <Link
        className={s.link}
        href={Cv}
        target="_blank"
        rel="noopener noreferrer"
        download="Fabian-Santos-Fullstack-Developer.pdf"
      >
        <div className={s.button}>
          <span>RESUMEN </span>

          <MdOutlineCloudDownload
            className={`${s.btnSocialMedia} ${s.simbol}`}
            size="2em"
            title="Github"
          />
        </div>
      </Link>
    </div>
  );
}
