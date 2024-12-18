import { Link, useParams } from "react-router-dom";
import css from "./CharacterDetails.module.css";
import image111 from '../../images/image111.png'
import image12 from '../../images/image12.png'
import image13 from '../../images/image13.png'
import image14 from '../../images/image14.png'
import image15 from '../../images/image15.png'
import image16 from '../../images/image16.png'
import image17 from '../../images/image17.png'
import image18 from '../../images/image18.png'







import back from '../../images/back.jpg'

const CharacterDetailsTwo = () => {
  const { id } = useParams(); 

  
  const characters1 = [
    { name: "Minerva McGonagall", description: "The Boy Who Lived", house: "Gryffindor", dob: "4-10-1925", image: image111 },
    { name: "Severus Snape", description: "Half-Blood Princ", house: "Slytherin", dob: "09-01-1960" , image: image12 },
    { name: "Rubeus Hagrid", description: "Dragomir Despard", house: "Gryffindor", dob: "06-12-1928", image: image13 },
    { name: "Remus Lupin", description: "Professor Lupin, Moony", house: "Gryffindor", dob: "10-03-1960", image: image14 },
    { name: "Horace Slughorn", description: "The Boy Who Lived", house: "Slytherin", dob: "1881", image: image15 },
    { name: "Dolores Umbridge", description: "The Boy Who Lived", house: "Slytherin", dob: "09-01-1960", image: image16 },
    { name: "Argus Filch", description: "The Boy Who Lived", house: "Gryffindor", dob: "13-02-1981", image: image17 },
    { name: "Albus Dumbledore", description: "Professor Dumbledor", house: "Gryffindor", dob: "30-07-1980", image: image18},
  ];

  const character = characters1[id]; // Получаем данные персонажа по индексу

  if (!character) {
    return <p>Персонаж не найден</p>;
  }

  return (
    <div className={css.details}>
      <img className={css.img} src={character.image} alt={character.name} />
      <h1 className={css.title}>{character.name}</h1>
      <p className={css.text}>{character.description}</p>
      <p className={css.text}>House: {character.house}</p>
      <p className={css.text}>Date of Birth: {character.dob}</p>
      <Link className={css.w} to="/page-two"><img className={css.linkback} src={back} alt="" /></Link>
    </div>
  );
};

export default CharacterDetailsTwo;
