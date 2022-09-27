import React from "react";
import logo from "../../img/logo3.png";
import s from "./Resumen.module.css";
import { MdOutlineCloudDownload } from "react-icons/md";

export default function Resumen() {
  return (
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
  );
}
