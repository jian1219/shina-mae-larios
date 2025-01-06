import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "./pages/Welcome"
import Ask1 from "./pages/Ask1";
import Home from "./pages/Home";
import About from "./pages/About"



//import FLOWS";

import Flow1 from "./pages/Flow/Flow1";
import Flow2 from "./pages/Flow/Flow2";
import Survey from "./pages/Flow/Survey";
import Images from "./pages/Flow/Images";
import Flowabout from "./pages/Flow/Flowabout";
import Creator from "./pages/Flow/Creator";
import ChristmasTree from "./pages/Flow/ChristmasTree";
import Chess from "./pages/Flow/Chess";

import Lock from "./pages/Lock";

//import Welcome from "./pages/Welcome";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
       

          <Route path="/" element={<Welcome />} /> 
          <Route path="/question1" element={<Ask1 />} /> 
          <Route path="/home" element={<Home />} /> 
          <Route path="/about" element={<About />} /> 


          <Route path="/flow1" element={<Flow1 />} /> 
          <Route path="/flow2" element={<Flow2 />} /> 
          <Route path="/Survey" element={<Survey />} /> 
          <Route path="/images" element={<Images />} /> 
          <Route path="/infoAbout" element={<Flowabout />} /> 
          <Route path="/creator" element={<Creator />} /> 
          <Route path="/christmasTree" element={<ChristmasTree />} /> 
          <Route path="/chess" element={<Chess />} /> 
          
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
