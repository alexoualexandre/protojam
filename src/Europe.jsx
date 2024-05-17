import { MyContext } from './context'
import Card from './Card';

export default function Europe() {
    const {bdd} = MyContext();
    const filtreEurope= bdd.filter((tata) => tata.continent === 'Europe');
    console.log(filtreEurope);
  return (
    <>
    {filtreEurope.map((tata)=> (
        <Card
        continent={tata.continent}
        pays={tata.pays}
        distance={tata.distance}
        durée_heures={tata.durée_heures}
        niveau_difficulte={tata.niveau_difficulte}
        nom={tata.nom}
        img={tata.img}/>
    ))}
    </>


    
  )
}
