import React from "react";
import logo from "../assets/logo-vandi.png";
import "./logo-glitch.css";

export default function LogoGlitch({ width = 260 }) {
  return (
    <div className="logo-wrap" style={{ width }}>
      {/* base */}
      <img src={logo} alt="Vandi Records" className="logo base" />
      {/* couches glitch (RGB léger) */}
      <img src={logo} alt="" aria-hidden className="logo r" />
      <img src={logo} alt="" aria-hidden className="logo b" />
    </div>
  );
}
