import { useState } from "react";
import css from "./HomePage.module.css";
import TitlePage from "./TitlePage";

const HomePage = () => {
  const [showTitlePage, setShowTitlePage] = useState(false);

  const handleButtonClick = () => {
    if (!showTitlePage) {
      setShowTitlePage(true); 
    }
  };

  return (
    <div className={css.home}>
      <h1 className={css.title}>Ласкаво просимо <br /> у світ Гаррі Поттера</h1>
      <button className={css.link} onClick={handleButtonClick}>
        Показати всіх персонажів
      </button>
      {showTitlePage && (
        <div>
          <TitlePage />
        </div>
      )}
    </div>
  );
};

export default HomePage;
