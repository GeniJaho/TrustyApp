import React from "react";
import Down from "../assets/arrowdown.png";
import Stars from "../assets/stars.png";
import userphoto from "../assets/Rectangle15.png";
import tower1 from "../assets/Rectangle55.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Filter = () => {
  return (
    <div className="filter">
      <Navbar></Navbar>
      <div className="filter-component">
        <ul>
          <li>T</li>
          <li>R</li>
          <li>U</li>
          <li>S</li>
          <li>T</li>
          <li>Y</li>
        </ul>
        <div className="filter-header">
          <div className="filters">
            <button>
              Ort
              <span>
                <img src={Down} alt="" />
              </span>
            </button>
            <button>
              Bewertung
              <span>
                <img src={Down} alt="" />
              </span>
            </button>
            <button>
              Preis
              <span>
                <img src={Down} alt="" />
              </span>
            </button>
            <button>
              Sprache
              <span>
                <img src={Down} alt="" />
              </span>
            </button>
            <button>
              Filter
              <span>
                <img src={Down} alt="" />
              </span>
            </button>
          </div>
          <div className="filter-values">
            <div className="value">
              <p className="name">Max Muster</p>
              <p className="gender">Maler</p>
              <div className="reviews">
                <img src={Stars} alt="" />
                <p className="filter-type">Bewertungen 35</p>
              </div>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder.
              </p>
            </div>
            <div className="user-img">
              <img src={userphoto} alt="" />
            </div>
          </div>
          <div className="filter-values">
            <div className="value">
              <p className="name">Lukas Bergmann</p>
              <p className="gender">Maler</p>
              <div className="reviews">
                <img src={Stars} alt="" />
                <p className="filter-type">Bewertungen 11</p>
              </div>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder.
              </p>
            </div>
            <div className="user-img">
              <img src={userphoto} alt="" />
            </div>
          </div>
          <div className="filter-values">
            <div className="value">
              <p className="name">Anna Mauer</p>
              <p className="gender">Maler</p>
              <div className="reviews">
                <img src={Stars} alt="" />
                <p className="filter-type">Bewertungen 2</p>
              </div>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder.
              </p>
            </div>
            <div className="user-img">
              <img src={userphoto} alt="" />
            </div>
          </div>
          <div className="filter-values">
            <div className="value">
              <p className="name">John Müller</p>
              <p className="gender">Maler</p>
              <div className="reviews">
                <img src={Stars} alt="" />
                <p className="filter-type">Bewertungen 10</p>
              </div>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder.
              </p>
            </div>
            <div className="user-img">
              <img src={userphoto} alt="" />
            </div>
          </div>
        </div>
        <img src={tower1} alt="" />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Filter;
