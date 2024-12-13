
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom"; // Используем Router только здесь
import App from "./App"; // Импортируем компонент App

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);