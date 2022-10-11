import style from "./About.module.css";
import picture from "../../img/foto.png";
export default function About() {
  return (
    <div className={style.container}>
      <div className={style.about}>
        <b className={style.b1}>
          Soy Fabian, un Desarrollador enfocado por el buen funcionamiento del
          codigo limpio, siempre buscando mejorar mis buenas prácticastyle. Me
          motiva trabajar en equipos donde la diversidad de opiniones, aportan
          al desarrollo grupal y hacer con esto, un excelente clima laboral.
        </b>
        <b className={style.b2}>Tecnologias: </b>
        <b className={style.b3}>
          React - Redux - Node - Express - Sequelize - JavaScript - HTML - CSS
          <br />
          <br />
          Interesado en: GO - VUE - AWS - MongoDB
        </b>
      </div>
      <div className={style.foto}>
        <img src={picture} alt="Picture" />
      </div>
    </div>
  );
}
