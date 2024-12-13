import { useState } from "react";
import css from "./HomePage.module.css"
import TitlePage from "./TitlePage.jsx";

// import { Link } from 'react-router-dom';


const HomePage = () => {

  const [pages, setPages] = useState([]);

  const handleButtonClick = () => {
    setPages((prevPages) => [...prevPages, <TitlePage key={prevPages.length} />]);
  };
  return (
    <div className={css.home}>
      <h1 className={css.title}>Ласкаво просимо <br /> у світ Гаррі Поттера</h1>
      <button className={css.link} onClick={handleButtonClick}>Показати всіх персонажів</button>
      {/* <Link className={css.link} to="/home">Показати всіх персонажів</Link> */}
      <div className={css.content}>
        {pages}
      </div>
    </div>
  );
};

export default HomePage;
