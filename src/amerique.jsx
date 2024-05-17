// ///// page amerique // //////////

import Card from "./Card";
import { MyContext } from "./context";

function Amerique() {
  const { bdd } = MyContext();
  const filterAmerique = bdd.filter((elem) => elem.continent === "Amérique");

  return (
    <>
    <div className="cont-card">
      {filterAmerique.map((elem) => (
        <Card
          continent={elem.continent}
          pays={elem.pays}
          distance={elem.distance}
          durée_heures={elem.durée_heures}
          niveau_difficulte={elem.niveau_difficulte}
          nom={elem.nom}
          img={elem.img}
        />
      ))}
      </div>
    </>
  );
}

export default Amerique;
