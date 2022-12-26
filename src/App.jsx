import React from "react";
import './index.css'
import Info from './components/Info'
import About from './components/About'
import Interest from "./components/Interests";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="content">
      <Info />
      <div className="about-me">
        <About />
        <Interest />
      </div>
      <Footer />
    </div>
  )
}
