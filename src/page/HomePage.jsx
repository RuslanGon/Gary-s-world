import css from "./HomePage.module.css"

import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
    <div className={css.home}>
      <h1 className={css.title}>Ласкаво просимо <br /> у світ Гаррі Поттера</h1>
      <Link className={css.link} to="/">Показати всіх персонажів</Link>
    </div>
  );
};

export default HomePage;
