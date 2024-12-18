import { Link, useParams } from "react-router-dom";
import css from "./CharacterDetails.module.css";
import image4 from '../../images/image4.png'
import image5 from '../../images/image5.png'
import image6 from '../../images/image6.png'

import image13 from '../../images/image13.png'

import image10 from '../../images/image10.png'
import image19 from '../../images/image19.png'
import image20 from '../../images/image20.png'

import image111 from '../../images/image111.png'

import back from '../../images/back.jpg'

const CharacterDetailsThere = () => {
  const { id } = useParams(); 

  
  const characters = [
    { name: "Harry Potter", description: "The Boy Who Lived", house: "Gryffindor", dob: "31-07-1980", image: image4 },
    { name: "Hermione Granger", description: "Brightest Witch", house: "Gryffindor", dob: "19-09-1979", image: image5 },
    { name: "Ron Weasley", description: "Loyal Friend", house: "Gryffindor", dob: "01-03-1980", image: image6 },
    { name: "Minerva McGonagall", description: "The Boy Who Lived", house: "Gryffindor", dob: "4-10-1925", image: image111 },
    { name: "Rubeus Hagrid", description: "Dragomir Despard", house: "Gryffindor", dob: "06-12-1928", image: image13 },
    { name: "Neville Longbottom", description: "Brave at Heart", house: "Gryffindor", dob: "30-07-1980", image: image10  },
    { name: "Ginny Weasley", description: "The Boy Who Lived", house: "Gryffindor", dob: "11-08-1981", image: image19 },
    { name: "Sirius Black", description: "Padfoot, Snuffles", house: "Gryffindor", dob: "03-11-1959", image: image20 },
  ];

  const character = characters[id]; 

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
      <Link className={css.w} to="/page-three"><img className={css.linkback} src={back} alt="" /></Link>
    </div>
  );
};

export default CharacterDetailsThere;
