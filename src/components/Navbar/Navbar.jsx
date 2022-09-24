import { Link } from "react-router-dom";
import s from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={s.lists}>
      <div className={s.list}>
        <div className={s.svgwrapper}>
          <svg height="50" width="120">
            <rect className={s.shape} height="50" width="120" />
          </svg>
          <a href="/" className={s.text}>
            Sobre Mi
          </a>
        </div>
        <div className={s.svgwrapper}>
          <svg height="50" width="120">
            <rect className={s.shape} height="50" width="120" />
          </svg>
          <a href="/" className={s.text}>
            Tecnologias
          </a>
        </div>
        <div className={s.svgwrapper}>
          <svg height="50" width="120">
            <rect className={s.shape} height="50" width="120" />
          </svg>
          <a href="/" className={s.text}>
            Proyectos
          </a>
        </div>
        <div className={s.svgwrapper}>
          <svg height="50" width="120">
            <rect className={s.shape} height="50" width="120" />
          </svg>
          <Link to="/contactme" className={s.text}>
            Contacto
          </Link>
        </div>
      </div>
    </div>
  );
}
