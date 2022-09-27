import { FaGithub as Github, FaWhatsapp as WhatsApp } from "react-icons/fa";
import { IoLogoLinkedin as LinkedIn } from "react-icons/io";
import { FiMail as Mail } from "react-icons/fi";

import style from "./Social.module.css";

const SocialMedia = () => {
  return (
    <div className={style.listContainer}>
      <a href="https://github.com/fabian179rc" target="_blank" rel="noreferrer">
        <Github
          className={`${style.btnSocialMedia} ${style.github}`}
          size="2em"
          title="Github"
        />
      </a>

      <a
        href="https://www.linkedin.com/in/santosfabian/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedIn
          className={`${style.btnSocialMedia} ${style.linkedin}`}
          size="2em"
          title="LinkedIn"
        />
      </a>

      <a
        href={
          "https://api.whatsapp.com/send?phone=+5493413353196&text=Hola%20Fabian!%20Quiero%20hablar%20de.."
        }
        target="_blank"
        rel="noreferrer"
      >
        <WhatsApp
          className={`${style.btnSocialMedia} ${style.whatsApp}`}
          size="2em"
          title="WhatsApp"
        />
      </a>

      <a
        href="mailto:fabianjesussantos@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <Mail
          className={`${style.btnSocialMedia} ${style.mail}`}
          size="2em"
          title="Mail"
        />
      </a>
    </div>
  );
};

export default SocialMedia;
