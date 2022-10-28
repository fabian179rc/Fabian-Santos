import React from "react";
import style from "./CardProject.module.css";

export default function cardProject({
  img,
  title,
  description,
  url,
  github,
  deploy,
}) {
  function images(e) {
    e.preventDefault();
  }

  return (
    <div className={style.container}>
      <img src={img} className={style.img} />
      <div className={style.info}>
        <h5>{title}</h5>
        <span className={style.description}>{description}</span>
        <section className={style.section}>
          {url ? (
            <a href={url} target="_blank">
              Video
            </a>
          ) : (
            ""
          )}
          <a href={github} target="_blank">
            Link al Repo
          </a>
          <a href={deploy} target="_blank">
            Web
          </a>
        </section>
      </div>
    </div>
  );
}
