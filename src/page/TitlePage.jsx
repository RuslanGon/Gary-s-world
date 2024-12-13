import { Link } from "react-router-dom";
import css from './TitlePage.module.css';
import image1 from '../../images/image1.png';
import image2 from '../../images/image2.png';
import image3 from '../../images/image3.png';

const TitlePage = () => {
  return (
    <ul className={css.list}>
      <li>
        <img className={css.img} src={image1} alt="" />
        <Link to="/page-one" className={css.link}>Студенти Гоґвортсу</Link>
      </li>
      <li>
        <img className={css.img} src={image2} alt="" />
        <Link to="/page-two" className={css.link}>Співробітники Гоґвортсу</Link>
      </li>
      <li>
        <img className={css.img} src={image3} alt="" />
        <Link to="/page-three" className={css.link}>Персонажі в певному будинку</Link>
      </li>
    </ul>
  );
};

export default TitlePage;
