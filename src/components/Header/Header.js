import React, { useState } from 'react'
import {Link} from "react-router-dom"
import user from "../../images/user.png"
import "./Header.scss"
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncshows } from '../../features/movies/movieSlice'

const Header = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) =>{
    e.preventDefault();
    dispatch(fetchAsyncMovies(search));
    dispatch(fetchAsyncshows(search));
    setSearch("");
  }
  return (
    <>
        <div className='header'>
              <div className="logo">
                <Link to="/">Movie app</Link>
              </div>
              <div className="search-bar">
                <form onSubmit={submitHandler}>
                    <input
                     type="text" 
                    placeholder='Search movie or show'
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                    />
                    <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                </form>
              </div>
              <div className="user-image">
              <img src={user} alt="user" />
            </div>
      </div>
    </>
  )
}

export default Header
