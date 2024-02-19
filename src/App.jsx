import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Experiences from "./components/Experiences";
import Work from "./components/Work";
import loader from "../src/Imgs/Hourglass.gif";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";

function App() {
  const [load, setLoad] = useState(true);
  let parent = document.querySelector(".loader");

  useEffect(() => {
    setTimeout(() => {
      setLoad(!load);
      parent.classList.add("no");
    }, 3000);
  }, []);
  return (
    <BrowserRouter>
      {load ? (
        <div className="loader">
          <img src={loader} alt="" />
        </div>
      ) : null}
      <div className="App">
        <div className="App-left">
          <Header />
        </div>
        <div className="App-right">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="service" element={<Services />} />
            <Route path="experience" element={<Experiences />} />
            <Route path="work" element={<Work />} />

            <Route path="contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
