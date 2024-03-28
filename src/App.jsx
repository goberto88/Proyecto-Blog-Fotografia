import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Intro from "./components/Intro/Intro";
import NavigationBar from "./components/Nav/NavigationBar"
import Section from "./components/Section/Section";
import ContactForm from "./components/ContactForm/ContactForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  

  return (
   
      <BrowserRouter>
      <NavigationBar/>
     
      <Routes>
      <Route path="/" element={<Section/>} ></Route>
      <Route path="/Introducción" element={<Intro/>} ></Route>
      <Route path="/Galeria" element={<Gallery/>}></Route>
      <Route path="/Contactos" element={<ContactForm/>} ></Route>
      </Routes>
   
      <Footer/>
      </BrowserRouter>   
   
  )
}

export default App;