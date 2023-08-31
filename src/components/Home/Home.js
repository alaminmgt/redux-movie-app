import React, { useEffect, useState } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import { useDispatch } from 'react-redux'
import {fetchAsyncMovies, fetchAsyncshows } from '../../features/movies/movieSlice'
import HashLoader from "react-spinners/HashLoader";
import "../Home/Home.scss"

const Home = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const movieText = "Harry";
  const movieSeries = "Friends";

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncshows(movieSeries));
  }, [dispatch])
  return (
    <>
        <div>
            <div className="banner-image"></div>
            {loading ? 
            <HashLoader color={"#fff"} loading={loading} size={100} style={{margin: "auto"}}
            /> 
            :
            <MovieListing/>}
            
      </div>
    </>
  )
}

export default Home
