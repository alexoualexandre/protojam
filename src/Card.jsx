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
