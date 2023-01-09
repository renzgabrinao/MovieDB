import { HashRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react'
import '../styles/App.css';

import FavouriteContext from '../contexts/FavouriteContext'
import SearchContext from '../contexts/SearchContext'
import { getFavouriteMovies } from '../data/utilities'

import Header from './Header';
import Footer from './Footer';

import Home from '../pages/Home';
import Favourites from '../pages/Favourites';
import About from '../pages/About';
import PageNotFound from '../pages/PageNotFound';
import MovieDetail from '../pages/MovieDetail';

function App() {

  const [ favourites, setFavourites ] = useState([])
  const [ search, setSearch ] = useState({ search: "", filter: "popular"})

  // grab favourites and store in a state variable  
  useEffect(() => {
    const movies = getFavouriteMovies()
    movies !== null ? setFavourites(movies) : setFavourites([])
  }, [])

  return (
    <HashRouter>
      <div className="App">
        <SearchContext.Provider value={{ search, setSearch }}>
        <FavouriteContext.Provider value={{ favourites, setFavourites }}>
          <Header/>
            <main className="main">
            <Routes>
              <Route path="/MovieDB" element={<Home/>}/>
              <Route path="/MovieDB/favourites" element={<Favourites/>}/>
              <Route path="/MovieDB/about" element={<About/>}/>
              <Route path="/MovieDB/movie/:movieId" element={<MovieDetail/>}/>
              <Route path="/MovieDB/*" element={<PageNotFound/>}/>
            </Routes>
            </main>
          <Footer/>
        </FavouriteContext.Provider>
        </SearchContext.Provider>
      </div>
    </HashRouter>
  );
}

export default App;
