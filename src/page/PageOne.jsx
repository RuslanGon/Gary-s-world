import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Импортируем useNavigate
import css from "./PageOne.module.css";
import arrow from "../../images/arrow.png";
import back from '../../images/back.jpg'

const PageOne = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate(); 

  const handleItemClick = (itemIndex) => {
    setSelectedItem(itemIndex);
  };

  // Массив с данными для персонажей
  const characters = [
    { name: "Harry Potter", description: "The Boy Who Lived", house: "Gryffindor", dob: "31-07-1980" },
    { name: "Hermione Granger", description: "Brightest Witch", house: "Gryffindor", dob: "19-09-1979" },
    { name: "Ron Weasley", description: "Loyal Friend", house: "Gryffindor", dob: "01-03-1980" },
    { name: "Draco Malfoy", description: "Slytherin Prince", house: "Slytherin", dob: "05-06-1980" },
    { name: "Albus Dumbledore", description: "Headmaster", house: "Gryffindor", dob: "1881" },
    { name: "Severus Snape", description: "Half-Blood Prince", house: "Slytherin", dob: "09-01-1960" },
    { name: "Neville Longbottom", description: "Brave at Heart", house: "Gryffindor", dob: "30-07-1980" },
    { name: "Luna Lovegood", description: "Ravenclaw Eccentric", house: "Ravenclaw", dob: "13-02-1981" },
  ];

  // Массив для классов
  const items = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8'];

  return (
    <div className={css.main}>
      <h2 className={css.title}>Студенти Гоґвортсу</h2>
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
              <Link to={`/character/${index}`}>
                <img src={arrow} alt="arrow" />
              </Link>
            </div>
          </li>
        ))}
      </ul>
      <button className={css.linkback} onClick={() => navigate(-1)}>
        <img className={css.linkback1} src={back} alt="Back" />
      </button>
    </div>
  );
};

export default PageOne;
