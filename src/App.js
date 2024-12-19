import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "./pages/Welcome"
import Ask1 from "./pages/Ask1";
import Home from "./pages/Home";

//import Welcome from "./pages/Welcome";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} /> 
          <Route path="/question1" element={<Ask1 />} /> 
          <Route path="/home" element={<Home />} /> 
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
