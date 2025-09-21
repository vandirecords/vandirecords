import React from "react";
import "./release-card.css";

export default function ReleaseCard({ cover, title, subtitle }) {
  return (
    <article className="rel-card" role="figure" aria-label={title}>
      <div className="rel-frame">
        <img src={cover} alt={title} className="rel-img" loading="lazy" />
        <span aria-hidden className="rel-glow rel-glow-v" />
        <span aria-hidden className="rel-glow rel-glow-r" />
        <span aria-hidden className="rel-glow rel-glow-b" />
      </div>
      <h3 className="rel-title">{title}</h3>
      {subtitle && <p className="rel-sub">{subtitle}</p>}
    </article>
  );
}
