import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import Header from './Pages/Components/Header';

import './App.css';
import Footer from './Pages/Components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="main-container">
        <Header />
        <div className="content-wrap">
          <Router />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
