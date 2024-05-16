import React from "react";

export default function Card() {
  return (
    <>
      <div className="card">
        <img
          src="../public/images/cards/Rio.jpg"
          alt="photo de paysage sur rio brezil"
          className="imgCard"
        />
        <div className="cardDesc">
          <h4 className="villeWord">Touflers</h4>
          <p>Continent : Amérique </p>
          <p>Pays : Brezil</p>
          <p>Distance : 10km</p>
          <p>Durée : 4h</p>
          <div className="niveau">
            <p>Niveau Difficulté : 1 </p>
          </div>
        </div>
      </div>
    </>
  );
}
