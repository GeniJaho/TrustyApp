
/* eslint-disable */
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
  const [postRating, setPostRating] = useState(1);
  const [reviewBody, setReviewBody] = useState('');
  const [reviewBox, setReviewBox] = useState('none');
  const [jwtToken, setJwtToken] = useState('');
  // Getting Craftsmen Details
  const fetchCraftsmenDetails = () => {
    const tempUserType = sessionStorage.getItem('userType');
    if (tempUserType === 'customer') {
      let tempUser = sessionStorage.getItem('user');
      tempUser = JSON.parse(tempUser);
      setJwtToken(tempUser.token);
    }
    axios.get(`${process.env.REACT_APP_BASE_URL}/craftsmen/${id}`)
    .then(res => {
      setCraftsmen(res.data.data);
      fetchingReviews();
    }).catch(err=> alert(err.response.data.error.description))
  }
  // Post Comment
  const postComment = (e) => {
    e.preventDefault()
    if (postRating < 1) {
      setPostRating(1)
    } else if(postRating > 5) {
      setPostRating(5)
    }
    axios.post(`${process.env.REACT_APP_BASE_URL}/reviews/${id}`,{
      body: reviewBody,
      rating: Math.trunc(postRating),
    }, {
      headers: {
        Authorization: `Bearer ${jwtToken}`
      }
    }).then(()=> {
      fetchCraftsmenDetails()
      fetchingReviews()
      setReviewBody('')
      setPostRating(5)
    })
    .catch(err=> alert(err.response.data.error.description))

  }

  // Getting Craftsmen Reviews
  const fetchingReviews = () => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/reviews/${id}`)
    .then(res => {setReviews(res.data.data);console.log(res.data.data)})
    .catch(err=> alert(err.response.data.error.description))
  }
  // Show Review Post Box
  const showReviewBox = () => {
    const tempUserType = sessionStorage.getItem('userType');
    if (tempUserType === 'customer') {
      setReviewBox('flex');
    }
  }
  // Page On Load
  useEffect(()=>{
    showReviewBox()
    fetchCraftsmenDetails()
  },[id]);



  return (
  <div>
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
            <p className="first">
              <strong>Language:</strong> {craftsmen.language}
            </p>
            <p className="first">
              <strong>Price:</strong> {craftsmen.price}
            </p>
            <p className="first">
              <strong>Rating:</strong> {craftsmen.rating}
            </p>
            <p className="first">
              <strong>Beschreibung:</strong> {craftsmen.description}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div style={{backgroundColor: "#e9fafc"}} className="pl-20 pb-16">
      <div className="w-full mx-auto sm:max-w-xl">
        <section aria-labelledby="notes-title">
          <div className="bg-white shadow-lg sm:rounded-lg sm:overflow-hidden">
            <div className="divide-y divide-gray-200">

              <div className="px-4 py-5 sm:px-6 bg-blue-400">
                <h2 id="notes-title" className="text-2xl font-bold text-gray-900 text-center">
                  Reviews
                </h2>
              </div>

              <div className="px-4 py-6 sm:px-6">
                <ul className="space-y-8">
                  {
                    reviews.length
                        ? reviews.map((review) => (
                            <li key={review.id}>
                              <div className="flex space-x-3">
                                <div className="flex-shrink-0">
                                  <img
                                      className="h-10 w-10 rounded-full"
                                      src={userphoto}
                                      alt=""
                                  />
                                </div>
                                <div>
                                  <div className="text-sm">
                                    <div className="font-bold text-gray-900">
                                      {review.customer.full_name}
                                    </div>
                                  </div>
                                  <div className="mt-1 text-sm text-gray-700">
                                    <p>{review.body}</p>
                                  </div>
                                  <div className="mt-2 text-sm space-x-2">
                                    <span className="text-gray-500 font-medium">{review.created_at_human}</span>{' '}
                                    <span className="text-gray-500 font-medium">&middot;</span>{' '}
                                    <span className="text-gray-500 font-medium">Rating: &nbsp;
                                      <span className="font-bold">{review.rating}</span>
                              </span>
                                  </div>
                                </div>
                              </div>
                            </li>
                        ))
                        : (<li>No reviews yet.</li>)
                  }
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 px-4 py-6 sm:px-6">
              {reviewBox === 'flex' ? (
                    <div style={{display: `${reviewBox}`}} className="flex space-x-3">
                      <div  className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full" src={userphoto} alt=""/>
                      </div>
                      <div  className="min-w-0 flex-1">
                        <form onSubmit={(e)=> postComment(e)}>
                          <div>
                            <label htmlFor="review" className="sr-only">
                              Review
                            </label>
                            <textarea
                                value={reviewBody}
                                onChange={e=> setReviewBody(e.target.value)}
                                id="review"
                                name="review"
                                rows={3}
                                className="shadow-sm block w-full focus:ring-blue-500 focus:border-blue-500 sm:text-sm border border-gray-300 rounded-md"
                                placeholder="Add a review"
                            />
                          </div>

                          <div className="mt-3 w-48">
                            <label htmlFor="rating" className="sr-only">
                              Rating
                            </label>
                            <input
                                value={postRating}
                                onChange={e=> setPostRating(e.target.value)}
                                type="number"
                                min="1"
                                max="5"
                                name="rating"
                                id="rating"
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                placeholder="Rate from 1-5"
                            />
                          </div>

                          <div className="mt-3 flex items-center justify-between">
                            <input
                                value='Submit'
                                type="submit"
                                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            />
                          </div>
                        </form>
                      </div>
                    </div>
              ): (<p>Please log in to post a review.</p>)}
            </div>

          </div>
        </section>
      </div>
    </div>
  </div>
);
};

export default WorkProfile;
