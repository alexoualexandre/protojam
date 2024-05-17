import { MyContext } from './context'
import Card from './Card';

export default function Asie() {
    const { bdd } = MyContext();
    const filtreAsie= bdd.filter((toto)=> toto.continent === "Asie");
    console.log(filtreAsie);
  return (
    <>
      {filtreAsie.map((toto) => (
        <Card
          continent={toto.continent}
          pays={toto.pays}
          distance={toto.distance}
          durée_heures={toto.durée_heures}
          niveau_difficulte={toto.niveau_difficulte}
          nom={toto.nom}
          img={toto.img}
        />
      ))}
    </>
  );
}
