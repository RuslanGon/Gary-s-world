import "./App.css";
import { Routes, Route } from "react-router-dom"; 
import HomePage from "./page/HomePage.jsx";
import TitlePage from "./page/TitlePage.jsx";
import PageOne from "./page/PageOne.jsx";
import PageTwo from "./page/PageTwo.jsx";
import PageThere from "./page/PageThere.jsx";
import CharacterDetails from "./page/CharacterDetails.jsx";
import CharacterDetailsTwo from "./page/CharacterDetailsTwo.jsx";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/title-page" element={<TitlePage />} />
        <Route path="/page-one" element={<PageOne />} />
        <Route path="/character/:id" element={<CharacterDetails />} />
        <Route path="/page-two" element={<PageTwo />} />
        <Route path="/character1/:id" element={<CharacterDetailsTwo  />} />
        <Route path="/page-three" element={<PageThere />} />
        <Route path="/character/:id" element={<CharacterDetails />} />
      </Routes>
    </div>
  );
}

export default App;
