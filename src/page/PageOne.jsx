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
            <h2 className={css.tit}>Hermione Granger</h2>
            <p className={css.text}>The Boy Who Lived</p>
            <p className={css.text}>Gryffindor</p>
            <p className={css.text}>19-09-1979</p>
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
            <h2 className={css.tit}>Ron Weasley</h2>
            <p className={css.text}>Dragomir Despard</p>
            <p className={css.text}>Gryffindor</p>
            <p className={css.text}>01-03-1980</p>
          </div>
          <div className={css.div1}>
            <span className={css.span}>Більше інформації</span>
            <Link>
              <img src={arrow} alt="" />
            </Link>
          </div>
        </li>
        <li className={css.item4}>
          <div className={css.div}>
            <h2 className={css.tit}>Draco Malfoy</h2>
            <p className={css.text}>The Boy Who Lived</p>
            <p className={css.text}>Slytherin</p>
            <p className={css.text}>05-06-1980</p>
          </div>
          <div className={css.div1}>
            <span className={css.span}>Більше інформації</span>
            <Link>
              <img src={arrow} alt="" />
            </Link>
          </div>
        </li>
        <li className={css.item5}>
          <div className={css.div}>
            <h2 className={css.tit}>Cedric Diggory</h2>
            <p className={css.text}>The Boy Who Lived</p>
            <p className={css.text}>Hufflepuff</p>
            <p className={css.text}>31-07-1980</p>
          </div>
          <div className={css.div1}>
            <span className={css.span}>Більше інформації</span>
            <Link>
              <img src={arrow} alt="" />
            </Link>
          </div>
        </li>
        <li className={css.item6}>
          <div className={css.div}>
            <h2 className={css.tit}>Cho Chang</h2>
            <p className={css.text}>The Boy Who Lived</p>
            <p className={css.text}>Ravenclaw</p>
            <p className={css.text}>07-04-1979</p>
          </div>
          <div className={css.div1}>
            <span className={css.span}>Більше інформації</span>
            <Link>
              <img src={arrow} alt="" />
            </Link>
          </div>
        </li>
        <li className={css.item7}>
          <div className={css.div}>
            <h2 className={css.tit}>Neville Longbottom</h2>
            <p className={css.text}>The Boy Who Lived</p>
            <p className={css.text}>Gryffindor</p>
            <p className={css.text}>30-07-1980</p>
          </div>
          <div className={css.div1}>
            <span className={css.span}>Більше інформації</span>
            <Link>
              <img src={arrow} alt="" />
            </Link>
          </div>
        </li>
        <li className={css.item8}>
          <div className={css.div}>
            <h2 className={css.tit}>Luna Lovegood</h2>
            <p className={css.text}>The Boy Who Lived</p>
            <p className={css.text}>Ravenclaw</p>
            <p className={css.text}>13-02-1981</p>
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
