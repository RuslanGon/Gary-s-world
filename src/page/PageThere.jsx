import { useState } from "react";
import { Link } from "react-router-dom";
import css from "./PageThere.module.css";
import arrow from "../../images/arrow.png";

const PageThere = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (itemIndex) => {
    setSelectedItem(itemIndex);
  };

  // Массив с данными для персонажей
  const characters = [
    { name: "Harry Potter", description: "The Boy Who Lived", house: "Gryffindor", dob: "31-07-1980" },
    { name: "Hermione Granger", description: "Brightest Witch", house: "Gryffindor", dob: "19-09-1979" },
    { name: "Ron Weasley", description: "Loyal Friend", house: "Gryffindor", dob: "01-03-1980" },
    { name: "Minerva McGonagall", description: "The Boy Who Lived", house: "Gryffindor", dob: "4-10-1925" },
    { name: "Rubeus Hagrid", description: "Dragomir Despard", house: "Gryffindor", dob: "06-12-1928" },
    { name: "Neville Longbottom", description: "Brave at Heart", house: "Gryffindor", dob: "30-07-1980" },
    { name: "Ginny Weasley", description: "The Boy Who Lived", house: "Gryffindor", dob: "11-08-1981" },
    { name: "Sirius Black", description: "Padfoot, Snuffles", house: "Gryffindor", dob: "03-11-1959" },
  ];

  // Массив для классов
  const items = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8'];

  return (
    <div className={css.main}>
      <h2 className={css.title}>Персонажі в <br /> певному будинку</h2>
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
              <Link>
                <img src={arrow} alt="arrow" />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PageThere;
