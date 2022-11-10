import logo from './logo.svg';
import './App.css';
import {
  Navigate,
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
import Home from './views/Home';
import Footer from './views/Footer';
import Header from './views/Header';
import DishGallery from './views/Gallery';
import Contact from './views/Contact';
import Menu from './views/Menu';

function App() {
  return (
    <div className=" bg-white p-0">
      <div className="header-container">
        <Header></Header>
      </div>
      <div className="content">
        
          <Routes>
          <Route
            path="*"
            element={<Navigate to="/home" replace />}
          />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/gallery" element={<DishGallery />} />
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/contact" element={<Contact />} />
          </Routes>



      </div>
      <Footer />
    </div>


  );
}

export default App;
