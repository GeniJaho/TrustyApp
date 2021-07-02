import React from "react";
import Search from "../assets/search.png";
import Civil from "../assets/civil.png";
import Cutter from "../assets/cutter.png";
import Navbar from "../components/Navbar";
import { useHistory } from "react-router-dom";

const Home = ({ searchValue, setSearchValue }) => {
  const history = useHistory();
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
            <span>perfekte</span> Person für
          </p>
          <p>ihr Problem</p>
          <div className="search-container">
            <div className="search-tile">
              <img src={Search} alt="" />
              <input value={searchValue} onChange={e=> setSearchValue(e.target.value)} type="text" />
            </div>
            <button onClick={()=> history.push('/filter')}>Suchen</button>
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
    </div>
  );
};

export default Home;
