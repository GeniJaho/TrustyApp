import React from "react";
import Search from "../assets/search.png";
import Civil from "../assets/civil.png";
import Cutter from "../assets/cutter.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar></Navbar>
      <div className="search">
        <ul>
          <li>T</li>
          <li>R</li>
          <li>U</li>
          <li>S</li>
          <li>T</li>
          <li>Y</li>
        </ul>
        <div className="search-component">
          <p>Finden Sie die</p>
          <p>
            <span>Perfekte</span> Person fur
          </p>
          <p>Ihr Problem</p>
          <div className="search-container">
            <div className="search-tile">
              <img src={Search} alt="" />
              <input type="text" />
            </div>
            <button>Search</button>
          </div>
        </div>
      </div>
      <div className="details">
        <div className="detailed-view">
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaning ful content. Lorem ipsum may be
            use as a placeholder before final copy is available.
          </p>
          <img src={Civil} alt="" />
        </div>
        <div className="detailed-view">
          <img src={Cutter} alt="" />
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaning ful content. Lorem ipsum may be
            use as a placeholder before final copy is available.
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
