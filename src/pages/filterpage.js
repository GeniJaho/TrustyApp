import React, { useEffect, useState } from "react";
import Down from "../assets/arrowdown.png";
import Star from "../assets/star.png";
import userphoto from "../assets/Rectangle15.png";
import tower1 from "../assets/Rectangle55.png";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Filter = ({ searchValue, setSearchValue }) => {
  // Variables
  const [craftsmen, setCraftsmen] = useState([]);
  const history = useHistory();

  // Filtered Craftsmen
  const filterCraftsmen = (filterName, order) => {
    filterName = filterName || 'full_name'
    order = order || 'asc'
    axios.get(`${process.env.REACT_APP_BASE_URL}/craftsmen?query=${searchValue}&sort=${filterName}&order=${order}`)
    .then(res => setCraftsmen(res.data.data))
    .catch(err=> alert(err.response.data.error.description))
  }
  // Searching for craftsmen
  const search = e => {
    setSearchValue(e.target.value)
    filterCraftsmen()
  }

  // Push to Craftsmen Details
  const craftsmenDetails = id => {
      history.push(`/work/${id}`)
  }
  // Page load
  useEffect(() => {
    filterCraftsmen()
  }, [])
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
            <button className="hover:shadow-md" onClick={()=> filterCraftsmen('address')}>
              Ort
            </button>
            <button className="hover:shadow-md" onClick={()=> filterCraftsmen('rating')}>
              Bewertung
            </button>
            <button className="hover:shadow-md" onClick={()=> filterCraftsmen('price')}>
              Preis
            </button>
            <button className="hover:shadow-md" onClick={()=> filterCraftsmen('language')}>
              Sprache
            </button>

            <div className="max-w-lg w-36 lg:max-w-xs">
              <label htmlFor="search" className="sr-only">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                       fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"/>
                  </svg>
                </div>
                <input id="search" name="search" value={searchValue} onChange={search}
                       className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white shadow-sm placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-600 focus:border-blue-600 sm:text-sm"
                       placeholder="Search" type="search" />
              </div>
            </div>

          </div>
          {craftsmen.map(craftsman=>{
            return(
          <div onClick={()=> craftsmenDetails(craftsman.id)}
               className="filter-values hover:shadow-lg" key={craftsman.id}>
            <div className="value">
              <p className="name">{craftsman.full_name}</p>
              <p className="gender">{craftsman.craft}</p>
              <div className="reviews">
                <img src={Star} alt="" />
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
