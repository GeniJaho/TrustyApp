import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import userphoto from "../assets/Rectangle15.png";
import Navbar from "../components/Navbar";

const WorkProfile = () => {
  // Variables
  const { id } = useParams();
  const [craftsmen, setCraftsmen] = useState({});
  const [reviews, setReviews] = useState([]);
  // Getting Craftsmen Details
  const fetchCraftsmenDetails = () => {
    axios.get(`http://trusty.local/craftsmen/${id}`)
    .then(res => {
      setCraftsmen(res.data.data);
      fetchingReviews();
    })
  }
  // Post Comment
  const postComment = () => {
    axios.post(`http://trusty.local/reviews/${id}`,{
      body: 'Some Text',
      rating: 1,
      from_id: 1,
      to_id: id,
    }).then(()=> alert("Review Submitted Successfully!"))
  }
  // Getting Craftsmen Reviews
  const fetchingReviews = () => {
    axios.get(`http://trusty.local/reviews/${id}`)
    .then(res => setReviews(res.data.data))
  }
  useEffect(()=>{
    fetchCraftsmenDetails()
  },[id]);



  return (
    <div className="work">
      <Navbar></Navbar>
      <div className="work-profile">
        <ul>
          <li>T</li>
          <li>R</li>
          <li>U</li>
          <li>S</li>
          <li>T</li>
          <li>Y</li>
        </ul>
        <div className="worker-details">
          <div className="little-nav">
            <p>Worker Profile</p>
            <button>kontaktieren</button>
          </div>
          <img src={userphoto} alt="" />
          <p className="name">{craftsmen.full_name}</p>
          <p className="work-domain">{craftsmen.craft}</p>
          <div className="details-worker">
            <button className="type">PERSONAL</button>
            <p className="first">
              <strong>Adresse:</strong> {craftsmen.address}
            </p>
            <p className="header-second">Beschreibung </p>
            <p className="thrid">
              {craftsmen.description}
            </p>
            <p></p>
          </div>
          <div className="details-worker">
            <button className="type">REVIEWS</button>
            {reviews && 
              reviews.map(review=>{
                return(
                  <>
                    <p className="header-second">Beschreibung </p>
                    <p className="thrid">
                      {review.body}
                    </p>
                    <hr />
                    <p></p>
                  </>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProfile;
