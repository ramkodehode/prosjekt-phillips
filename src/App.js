import Navbar from "./components/nav/Navbar";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import About from "./components/about/About";
import Footer from './components/footer/Footer';

import React from "react";
import "./styles.css";

export default function App() {
  return (
    <>

      <Navbar />
      <Home />    
      <Services />
      <About />
      <Footer />

    </>
  );
}
