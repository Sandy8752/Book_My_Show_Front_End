import "./App.css";
import Navbar1 from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation";
import Slider from "./components/Slider";
import Bookticket from "./components/Bookticket";
import Movies from "./components/Movies";
import SignUp from "./components/signup";
import React from 'react';
import {  Routes, Route } from "react-router-dom";
function App() {
  return (
      <Routes>
        <Route  path="/" element={<><Navbar1 /><Navigation/><Slider /><Movies />  </>}/>
        <Route  path="/movies" element= {<Movies />} />
        <Route path="/bookingblack" element= {<Bookticket name="black"/>} />
        <Route path="/bookingbhediya" element= {<Bookticket name="bhediya" />} />
        <Route path="/signup" element= {<SignUp />} />
      </Routes>
  );
}

export default App;