import { MyContext } from './context'
import Card from './Card';

export default function Afrique() {
    const {bdd} = MyContext();
    const filtreAfrique= bdd.filter((titi) => titi.continent === 'Afrique');
    console.log(filtreAfrique);
  return (
    <>
    {filtreAfrique.map((titi)=> (
        <Card
        continent={titi.continent}
        pays={titi.pays}
        distance={titi.distance}
        durée_heures={titi.durée_heures}
        niveau_difficulte={titi.niveau_difficulte}
        nom={titi.nom}
        img={titi.img}/>
    ))}
    </>


    
  )
}
