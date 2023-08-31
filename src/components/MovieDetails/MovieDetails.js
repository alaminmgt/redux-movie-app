import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ScaleLoader from "react-spinners/ScaleLoader";
import {
  fetchAsynMovieDetalis,
  getMovieDetails,
  removeSelectedMovieOrShow,
} from "../../features/movies/movieSlice";
import "../MovieDetails/MovieDetails.scss";

const MovieDetails = () => {
  const [loading, setLoading] = useState(false);

  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getMovieDetails);
  console.log("Movie details", data);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);

    dispatch(fetchAsynMovieDetalis(imdbID));
    return ()=>{
      dispatch(removeSelectedMovieOrShow())
    }
  }, [dispatch, imdbID]);

  return (
    <>
      <div>
        <div className="movie-section">
          {Object.keys(data).length === 0 ? 
            (<div><ScaleLoader color="#fff" /></div>) :
            (<div>
            <div className="section-left">
              <div className="movie-title">{data.Title}</div>
              <div className="movie-rating">
                <span>
                  IMDB Rating <i class="fa-solid fa-star"></i> : {data.imdbRating}
                </span>
                <span>
                  IMDB Votes <i className="fa fa-thumbs-up"></i> :
                  {data.imdbVotes}
                </span>
                <span>
                  Runtime <i class="fa-solid fa-film"></i> : {data.Runtime}
                </span>
                <span>
                  Year <i class="fa-solid fa-calendar-days"></i> : {data.Year}
                </span>
              </div>
              <div className="movie-plot">Plot : {data.Plot}</div>
              <div className="movie-info">
                <div>
                  <span>Director :</span>
                  <span>{data.Director}</span>
                </div>
                <div>
                  <span>Stars :</span>
                  <span>{data.Actors}</span>
                </div>
                <div>
                  <span>Generes :</span>
                  <span>{data.Genre}</span>
                </div>
                <div>
                  <span>Language :</span>
                  <span>{data.Language}</span>
                </div>
                <div>
                  <span>Awards :</span>
                  <span>{data.Awards}</span>
                </div>
              </div>
            </div>
            <div className="section-right">
              <img src={data.Poster} alt={data.Title} />
            </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
