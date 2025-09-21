import React from "react";
import "./title-vhs.css";

export default function TitleVHS({ children }) {
  return (
    <h1 className="vhs-title">
      <span className="vhs-fill">{children}</span>
      {/* halos RGB glitch */}
      <span aria-hidden className="vhs-ghost vhs-r" />
      <span aria-hidden className="vhs-ghost vhs-b" />
      <span aria-hidden className="vhs-ghost vhs-v" />
    </h1>
  );
}
