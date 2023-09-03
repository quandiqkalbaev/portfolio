import { BrowserRouter } from "react-router-dom";
import AppRoute from "./components/routes";
import "./assets/css/style.css";
import Header from "./components/header/header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoute />
    </BrowserRouter>
  );
}

export default App;
