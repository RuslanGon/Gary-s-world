import "./App.css";
import { Routes, Route } from "react-router-dom"; 
import HomePage from "./page/HomePage.jsx";
import TitlePage from "./page/TitlePage.jsx";
import PageOne from "./page/PageOne.jsx";
import PageTwo from "./page/PageTwo.jsx";
import PageThere from "./page/PageThere.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/title-page" element={<TitlePage />} />
        <Route path="/page-one" element={<PageOne />} />
        <Route path="/page-two" element={<PageTwo />} />
        <Route path="/page-three" element={<PageThere />} />


      </Routes>
    </div>
  );
}

export default App;
