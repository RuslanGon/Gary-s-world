import { Link } from "react-router-dom";
import css from "./PageOne.module.css";
import arrow from '../../images/arrow.png'

const PageOne = () => {
  return (
    <div className={css.main}>
      <h2 className={css.title}>Студенти Гоґвортсу</h2>
      <ul className={css.list}>
        <li className={css.item1}>
          <div className={css.div}>
            <h2 className={css.tit}>Harry Potter</h2>
            <p className={css.text}>The Boy Who Lived</p>
            <p className={css.text}>Gryffindor</p>
            <p className={css.text}>31-07-1980</p>
          </div>
          <div className={css.div1}>
            <span className={css.span}>Більше інформації</span>
            <Link>
              <img src={arrow} alt="" />
            </Link>
          </div>
        </li>
        <li className={css.item2}>
          <div className={css.div}>
            <h2 className={css.tit}>Harry Potter</h2>
            <p className={css.text}>The Boy Who Lived</p>
            <p className={css.text}>Gryffindor</p>
            <p className={css.text}>31-07-1980</p>
          </div>
          <div className={css.div1}>
            <span className={css.span}>Більше інформації</span>
            <Link>
              <img src={arrow} alt="" />
            </Link>
          </div>
        </li>
        <li className={css.item3}>
          <div className={css.div}>
            <h2 className={css.tit}>Harry Potter</h2>
            <p className={css.text}>The Boy Who Lived</p>
            <p className={css.text}>Gryffindor</p>
            <p className={css.text}>31-07-1980</p>
          </div>
          <div className={css.div1}>
            <span className={css.span}>Більше інформації</span>
            <Link>
              <img src={arrow} alt="" />
            </Link>
          </div>
        </li>
        <li className={css.item1}>
          <div className={css.div}>
            <h2 className={css.tit}>Harry Potter</h2>
            <p className={css.text}>The Boy Who Lived</p>
            <p className={css.text}>Gryffindor</p>
            <p className={css.text}>31-07-1980</p>
          </div>
          <div className={css.div1}>
            <span className={css.span}>Більше інформації</span>
            <Link>
              <img src={arrow} alt="" />
            </Link>
          </div>
        </li>
        <li className={css.item1}>
          <div className={css.div}>
            <h2 className={css.tit}>Harry Potter</h2>
            <p className={css.text}>The Boy Who Lived</p>
            <p className={css.text}>Gryffindor</p>
            <p className={css.text}>31-07-1980</p>
          </div>
          <div className={css.div1}>
            <span className={css.span}>Більше інформації</span>
            <Link>
              <img src={arrow} alt="" />
            </Link>
          </div>
        </li>
        <li className={css.item1}>
          <div className={css.div}>
            <h2 className={css.tit}>Harry Potter</h2>
            <p className={css.text}>The Boy Who Lived</p>
            <p className={css.text}>Gryffindor</p>
            <p className={css.text}>31-07-1980</p>
          </div>
          <div className={css.div1}>
            <span className={css.span}>Більше інформації</span>
            <Link>
              <img src={arrow} alt="" />
            </Link>
          </div>
        </li>
        <li className={css.item1}>
          <div className={css.div}>
            <h2 className={css.tit}>Harry Potter</h2>
            <p className={css.text}>The Boy Who Lived</p>
            <p className={css.text}>Gryffindor</p>
            <p className={css.text}>31-07-1980</p>
          </div>
          <div className={css.div1}>
            <span className={css.span}>Більше інформації</span>
            <Link>
              <img src={arrow} alt="" />
            </Link>
          </div>
        </li>
        <li className={css.item1}>
          <div className={css.div}>
            <h2 className={css.tit}>Harry Potter</h2>
            <p className={css.text}>The Boy Who Lived</p>
            <p className={css.text}>Gryffindor</p>
            <p className={css.text}>31-07-1980</p>
          </div>
          <div className={css.div1}>
            <span className={css.span}>Більше інформації</span>
            <Link>
              <img src={arrow} alt="" />
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default PageOne;
