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
            Brauchen Sie einen Handwerker?<br/>
            Nutzen Sie Trusty um den passenden Handwerker zu finden.<br/>
            Bei uns sind Sie richtig, erhalten Sie die beste Hauswartung <br/>
            Service mit einem Klick und vereinbaren Sie vorher, wie viel Sie zahlen.
          </p>
          <img src={Civil} alt="" className="civil"/>
        </div>
        <div className="detailed-view">
          <img src={Cutter} alt="" />
          <p>
            <strong>So einfacht geht es:</strong><br/>
                                1- schnell und unkompliziert registrieren. <br/>
                                2- kostenlos und unverbindlich Angebote verschiedenen Handwerkern erhalten. <br/>
                                3- Angebote mit dem besten Preis-Leistungs-Verhältnis auswählen. <br/>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
