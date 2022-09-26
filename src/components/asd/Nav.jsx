import React, { useState } from "react";
import logo from "../../../img/logo-no.svg";
import "./Nav.css";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <img className="nav-logo" src={logo} alt="Logo" />

      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="#Inicio">Inicio</a>
        <a href="#About">Sobre mí</a>
        <a href="#Proyectos">Proyectos</a>
        <a href="#Contacto">Contacto</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
}
