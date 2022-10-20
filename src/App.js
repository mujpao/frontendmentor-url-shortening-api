import React from "react";
import "./style.css";
import Intro from "./components/Intro";
import Info from "./components/Info";
import Shortener from "./components/Shortener";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Intro />
      <Shortener />
      <Info />
      <section className="call-to-action">
        <h2>Boost your links today</h2>
        <button className="btn get-started" type="button">
          Get Started
        </button>
      </section>
      <Footer />
    </div>
  );
}

export default App;
