import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import Header from './Components/Header';

import './App.css';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <main className="content">
          <Router />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
