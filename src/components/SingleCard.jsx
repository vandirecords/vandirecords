import React from "react";

export default function SingleCard({ title, date, img }) {
  return (
    <div className="card">
      <img src={img} alt={title} className="cover" loading="lazy" />
      <div className="card-title">{title}</div>
      <div className="card-sub">Single — {date}</div>
    </div>
  );
}
