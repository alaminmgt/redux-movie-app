import React from 'react'
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MovieDetails from './components/MovieDetails/MovieDetails';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './Footer/Footer';

const App = () => {
  return (
    <div className='app'>
      <Header/>
    <div className="container">
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/movie/:imdbID' element={<MovieDetails/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
