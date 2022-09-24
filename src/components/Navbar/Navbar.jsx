import { Link } from "react-router-dom";
import s from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={s.container}>
      <div className={s.lists}>
        <div className={s.list}>
          <div className={s.svgwrapper}>
            <svg height="50" width="120">
              <rect className={s.shape} height="50" width="120" />
              {/* //se achico el
            cuadrado */}
            </svg>
            <a href="/home" className={s.text}>
              Sobre Mi
            </a>
          </div>
          {/* </div> */}
          {/* <div className={s.technologies}> */}
          <div className={s.svgwrapper}>
            <svg height="50" width="120">
              <rect className={s.shape} height="50" width="120" />
            </svg>
            <a href="/home" className={s.text}>
              Tecnologias
            </a>
          </div>
          {/* </div> */}
          {/* <div className={s.proyects}> */}
          <div className={s.svgwrapper}>
            <svg height="50" width="120">
              <rect className={s.shape} height="50" width="120" />
            </svg>
            <a href="/home" className={s.text}>
              Proyectos
            </a>
          </div>
          {/* </div> */}
          {/* <div className={s.contactme}> */}
          <div className={s.svgwrapper}>
            <svg height="50" width="120">
              <rect className={s.shape} height="50" width="120" />
            </svg>
            <Link href="/home" className={s.text}>
              Contacto
            </Link>

            {/* </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}
