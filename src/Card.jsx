// Card.jsx
import React from "react";
import "./index.css";

const Card = () => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">Canada</div>
        <div className="card-price">15 jours à partir de 2000€/personne</div>
      </div>
      <img
        src="./src/image/rando-europe-1024x683.jpg "
        alt="Paysage canadien"
        className="card-image"
      />
      <div className="card-body">
        <p>
          La randonnée au Canada dévoile des paysages spectaculaires, des
          montagnes majestueuses aux lacs cristallins, offrant une aventure
          inoubliable dans la nature sauvage.
        </p>
      </div>
    </div>
  );
};

export default Card;
