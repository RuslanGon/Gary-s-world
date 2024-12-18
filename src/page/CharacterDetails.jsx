import { Link, useParams } from "react-router-dom";
import css from "./CharacterDetails.module.css";
import image4 from '../../images/image4.png'
import image5 from '../../images/image5.png'
import image6 from '../../images/image6.png'
import image7 from '../../images/image7.png'
import image8 from '../../images/image8.png'
import image9 from '../../images/image9.png'
import image10 from '../../images/image10.png'
import image11 from '../../images/image11.png'
import back from '../../images/back.jpg'

const CharacterDetails = () => {
  const { id } = useParams(); 

  
  const characters = [
    { name: "Harry Potter", description: "The Boy Who Lived", house: "Gryffindor", dob: "31-07-1980", image: image4 },
    { name: "Hermione Granger", description: "Brightest Witch", house: "Gryffindor", dob: "19-09-1979", image: image5 },
    { name: "Ron Weasley", description: "Loyal Friend", house: "Gryffindor", dob: "01-03-1980", image: image6 },
    { name: "Draco Malfoy", description: "Slytherin Prince", house: "Slytherin", dob: "05-06-1980", image: image7 },
    { name: "Albus Dumbledore", description: "Headmaster", house: "Gryffindor", dob: "1881", image: image8 },
    { name: "Severus Snape", description: "Half-Blood Prince", house: "Slytherin", dob: "09-01-1960", image: image9 },
    { name: "Luna Lovegood", description: "Ravenclaw Eccentric", house: "Ravenclaw", dob: "13-02-1981", image: image10 },
    { name: "Neville Longbottom", description: "Brave at Heart", house: "Gryffindor", dob: "30-07-1980", image: image11 },
  ];

  const character = characters[id]; // Получаем данные персонажа по индексу

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
      <Link className={css.w} to="/page-one"><img className={css.linkback} src={back} alt="" /></Link>
    </div>
  );
};

export default CharacterDetails;
