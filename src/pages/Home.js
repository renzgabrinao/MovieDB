// home page
import { useEffect, useState, useContext } from 'react';
import MovieItem from '../components/MovieItem'
import SearchContext from '../contexts/SearchContext';

const MOVIE_DB_API_KEY = process.env.REACT_APP_MOVIE_DB_API_KEY;

const Home = () => {

  const { search, setSearch } = useContext(SearchContext)
  const [ list, setList ] = useState([]);

  useEffect( () => {
    const loadMovies = async () => {
      let response;

      response = await fetch(`https://api.themoviedb.org/3/movie/${search.filter}?api_key=${MOVIE_DB_API_KEY}&language=en-US`);

      if(search.search !== "") {
        response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_DB_API_KEY}&language=en-US&query=${search.search}&page=1&include_adult=false`)
      }

      const data = await response.json();
      setList(data.results.slice(0, 12));
    }
    loadMovies();
  }, [search]);

  const handleFilter = (method, value) => {
    switch(method) {
      case 'filter':
        setSearch({...search, filter: value})
        break;
      case 'search':
        setSearch({...search, search: value})
        break;
      default:
        break;
    }
  }

  return (
    <>
      <div className='filter'>
          <label className='filter-item label'>Show me: </label>
          <select className='filter-item' value={search.filter} onChange={(e) => {handleFilter('filter', e.target.value)}}>
            <option value='popular'>Popular</option>
            <option value='top_rated'>Top Rated</option>
            <option value='now_playing'>Now Playing</option>
            <option value='upcoming'>Upcoming</option>
          </select>

          <label className='filter-item label'>or</label>
          <input className="search-bar filter-item" type='text' name='search' value={search.search} placeholder='Search Movie...' onChange={(e) => {handleFilter('search', e.target.value)}}/>   
      </div>

      <div className='movie-list'>
        {list.length === 0 ? 
          <>                
            <div className='no-movies'>
              <h2>Sorry, your search query did not return any movies.</h2>
            </div>
          </> 
          : 
          <>
            {list.map((movie) => (
              <div key={movie.id.toString()}>
                <MovieItem movie={movie}/>
              </div>
            ))}
          </>
        }



        {list.map((movie) => (
          <div key={movie.id.toString()}>
            <MovieItem movie={movie}/>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home