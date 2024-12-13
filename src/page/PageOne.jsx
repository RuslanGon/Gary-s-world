import { useState } from "react";
import { Link } from "react-router-dom";
import css from "./PageOne.module.css";
import arrow from '../../images/arrow.png';

const PageOne = () => {
  const [selectedItem, setSelectedItem] = useState(null); 

  const handleItemClick = (itemIndex) => {
    setSelectedItem(itemIndex); 
  };

  return (
    <div className={css.main}>
      <h2 className={css.title}>Студенти Гоґвортсу</h2>
      <ul className={css.list}>
        {['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8'].map((item, index) => (
          <li
            key={item}
            className={`${css[item]} ${selectedItem === index ? css.selected : ""}`} 
            onClick={() => handleItemClick(index)}
          >
            <div className={css.div}>
              <h2 className={css.tit}>{`Name ${index + 1}`}</h2>
              <p className={css.text}>The Boy Who Lived</p>
              <p className={css.text}>Gryffindor</p>
              <p className={css.text}>31-07-1980</p>
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

export default PageOne;
