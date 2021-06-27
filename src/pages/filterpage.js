import React, { useEffect, useState } from "react";
import Down from "../assets/arrowdown.png";
import Stars from "../assets/stars.png";
import userphoto from "../assets/Rectangle15.png";
import tower1 from "../assets/Rectangle55.png";
import Navbar from "../components/Navbar";
import axios from "axios";

const Filter = () => {
  // Variables
  const [craftsmen, setCraftsmen] = useState([]);


  // No Filter Craftsmen
  const fetchCraftsmen = () => {
    axios.get('http://trusty.local/craftsmen')
    .then(res => setCraftsmen(res.data.data))
  }
  // Filtered Craftsmen
  const filterCraftsmen = filterName => {
    axios.get(`http://trusty.local/craftsmen?sort=${filterName}&order=asc`)
    .then(res => setCraftsmen(res.data.data))
  }
  // Page load 
  useEffect(()=>{
    fetchCraftsmen();
  },[])
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
            <button onClick={()=> filterCraftsmen('address')}>
              Ort
              <span>
                <img src={Down} alt="" />
              </span>
            </button>
            <button onClick={()=> filterCraftsmen('rating')}>
              Bewertung
              <span>
                <img src={Down} alt="" />
              </span>
            </button>
            <button onClick={()=> filterCraftsmen('price')}>
              Preis
              <span>
                <img src={Down} alt="" />
              </span>
            </button>
            <button onClick={()=> filterCraftsmen('language')}>
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
          {craftsmen.map(craftsman=>{
            return(
          <div className="filter-values">
            <div className="value">
              <p className="name">{craftsman.full_name}</p>
              <p className="gender">{craftsman.craft}</p>
              <div className="reviews">
                <img src={Stars} alt="" />
                <p className="filter-type">Bewertungen {craftsman.rating}</p>
              </div>
              <p>
                {craftsman.description}
              </p>
            </div>
            <div className="user-img">
              <img src={userphoto} alt="" />
            </div>
          </div>
            )
          })}
        </div>
        <img src={tower1} alt="" />
      </div>
    </div>
  );
};

export default Filter;
