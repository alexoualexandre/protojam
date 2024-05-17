<<<<<<< HEAD
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
=======
import React from "react";

export default function Card({
  continent,
  pays,
  distance,
  durée_heures,
  niveau_difficulte,
  nom,
  img,
}) {
  return (
    <>
      <div className="card">
        <img
          src={`../public/images/cards/${continent}/${img}`}
          alt="photo de paysage sur rio brezil"
          className="imgCard"
        />
        <div className="cardDesc">
          <h4 className="villeWord">{nom}</h4>
          <p>Continent : {continent}</p>
          <p>Pays : {pays}</p>
          <p>Distance : {distance}</p>
          <p>Durée : {durée_heures}</p>
          <div className="niveau">
            <p>Niveau Difficulté : {niveau_difficulte}</p>
          </div>
        </div>
      </div>
    </>
  );
}
>>>>>>> 97cea93847551f1220e394a39d03b9c9f061c5b2
