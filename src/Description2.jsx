import React from "react";
import "./Description2.css";

function Description2() {
  return (
    <>
      <section className="containerDescription">
      <h3 className="titleDes2">Pourquoi <span class="colored-word">RANDOX</span></h3>
        <div className="blocDescription">
          
          <p className="pdesc2">
            Voyager avec Randox vous offre une expérience de randonnée
            exceptionnelle. Avec une sélection diversifiée d'itinéraires, des
            outils de planification conviviaux et une communauté passionnée,
            Randox rend chaque aventure inoubliable
          </p>
          <img
            src="public/images/rando-europe-1024x683.jpg"
            alt="photo panaoramique dun randonné au norvege"
            className="img-des2"
          />
        </div>
      </section>
    </>
  );
}

export default Description2;
