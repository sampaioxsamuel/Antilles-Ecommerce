import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import Header from "./Components/Header";

import "./App.css";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="main-container">
      <BrowserRouter>
        <Header />
        <div className="content-wrap">
          <Router />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
