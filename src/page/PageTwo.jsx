import { useState } from "react";
import { Link } from "react-router-dom";
import css from "./PageTwo.module.css";
import arrow from "../../images/arrow.png";
import back from '../../images/back.jpg'


const PageTwo = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (itemIndex) => {
    setSelectedItem(itemIndex);
  };

  // Массив с данными для персонажей
  const characters = [
    { name: "Minerva McGonagall", description: "The Boy Who Lived", house: "Gryffindor", dob: "4-10-1925" },
    { name: "Severus Snape", description: "Half-Blood Princ", house: "Slytherin", dob: "09-01-1960" },
    { name: "Rubeus Hagrid", description: "Dragomir Despard", house: "Gryffindor", dob: "06-12-1928" },
    { name: "Remus Lupin", description: "Professor Lupin, Moony", house: "Gryffindor", dob: "10-03-1960" },
    { name: "Horace Slughorn", description: "The Boy Who Lived", house: "Slytherin", dob: "1881" },
    { name: "Dolores Umbridge", description: "The Boy Who Lived", house: "Slytherin", dob: "09-01-1960" },
    { name: "Argus Filch", description: "The Boy Who Lived", house: "Gryffindor", dob: "13-02-1981" },
    { name: "Albus Dumbledore", description: "Professor Dumbledor", house: "Gryffindor", dob: "30-07-1980" },
  ];

  // Массив для классов
  const items = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8'];

  return (
    <div className={css.main}>
      <h2 className={css.title}>Співробітники <br /> Гоґвортсу</h2>
      <ul className={css.list}>
        {items.map((item, index) => (
          <li
            key={item} // Ключ из массива items
            className={`${css[item]} ${selectedItem === index ? css.selected : ""}`}
            onClick={() => handleItemClick(index)}
          >
            <div className={css.div}>
              {/* Динамический заголовок */}
              <h3 className={css.name}>{characters[index]?.name || "Unknown"}</h3>
              <p className={css.text}>{characters[index]?.description || "No description"}</p>
              <p className={css.text}>{characters[index]?.house || "Unknown house"}</p>
              <p className={css.text}>{characters[index]?.dob || "Unknown DOB"}</p>
            </div>
            <div className={css.div1}>
              <span className={css.span}>Більше інформації</span>
              <Link to={`/character1/${index}`}>
                <img src={arrow} alt="arrow" />
              </Link>
            </div>
          </li>
        ))}
      </ul>
      <Link to='/title-page'><img className={css.linkback} src={back} alt="" /></Link>
    </div>
  );
};

export default PageTwo;
