import React from "react";
import { Cloud } from "./componenets/cloud/Cloud";
import { Data } from "./componenets/data/Data";
import { Footer } from "./componenets/footer/Footer";
import { Hero } from "./componenets/hero/Hero";
import { Navbar } from "./componenets/navbar/Navbar";
function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Data/>
    <Cloud/>
    <Footer/>
    </>
  );
}

export default App;
