import { BrowserRouter, Routes, Route } from "react-router-dom";

// COMPONENTS
import Nav from './components/Nav.component';
import Home from './components/Home.component';
import Footer from './components/Footer.component';
import About from "./components/AboutUs.component";
import ContactUs from './components/ContactUs.component'


function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/AboutUs" element={<About/>}/>
          <Route path="/ContactUs" element={<ContactUs/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
