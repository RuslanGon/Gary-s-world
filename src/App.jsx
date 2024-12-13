import "./App.css";
import { Routes, Route } from "react-router-dom"; // Импортируем Routes и Route
import HomePage from "./page/HomePage.jsx";
import TitlePage from "./page/TitlePage.jsx";
import PageOne from "./page/PageOne.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/title-page" element={<TitlePage />} />
        <Route path="/page-one" element={<PageOne />} />
      </Routes>
    </div>
  );
}

export default App;
