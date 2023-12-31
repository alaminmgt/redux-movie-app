import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import MovieCard from '../MovieCard/MovieCard';
import "../MovieListing/MovieListing.scss"
import { Settings } from '../../common/settings';
import Slider from "react-slick";
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice';


const MovieListing = () => {
  
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  console.log(movies);
  let renderMovies = "";
  let renderShows = "";

  renderMovies = movies.Response === "True" ? (
      movies.Search.map((movie,index)=>{
        return (
          <MovieCard key={index} data={movie}/>
        )
      })
  ) : 
  (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
  )

  renderShows = shows.Response === "True" ? (
    shows.Search.map((movie,index)=>{
      return (
        <MovieCard key={index} data={movie}/>
      )
    })
) : 
(
    <div className="shows-error">
      <h3>{shows.Error}</h3>
    </div>
)
  return (
    <>
        <div>
            <div className="movie-wrapper">
              <div className="movie-list">
                <h2>Movies</h2>
                <div className="movie-container">
                  <Slider {...Settings}>{renderMovies}</Slider>
                </div>
              </div>
              <div className="show-list">
                <h2>Shows</h2>
                <div className="movie-container">
                <Slider {...Settings}>{renderMovies}</Slider>
                </div>
              </div>
            </div>
            
      </div>
    </>
  )
}

export default MovieListing
