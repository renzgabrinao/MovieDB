// movie detail page
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ifMovieInFavourites, addToLocalStorage, removeFromLocalStorage, getFavouriteMovies } from '../data/utilities';
import FavouriteContext from '../contexts/FavouriteContext'

const MOVIE_DB_API_KEY = process.env.REACT_APP_MOVIE_DB_API_KEY;

const MovieDetail = () => { 

    const { setFavourites } = useContext(FavouriteContext);
    const { movieId } = useParams();
    const [ movie, setMovie ] = useState("");

    useEffect(() => {
        const getMovie = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${MOVIE_DB_API_KEY}&language=en-US`);
            const data = await response.json();
            setMovie(data);
        }
        getMovie()

    }, [movieId])

    const handleClick = (movie, method) => {
      switch(method) {
          case 'add':
              addToLocalStorage(movie)
              break;
          case 'remove':
              removeFromLocalStorage(movie);
              break;
          default:
              break;
      }
      let favs = getFavouriteMovies();
      setFavourites(favs);
  }

    return (
        <>
            <div className='movie-details' style={{
              backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.poster_path}")`,
              backgroundPosition: 'center',
              objectFit: 'cover',
              backgroundColor: 'rgba(0,0,0,0.85)',
              backgroundBlendMode:'multiply'
            }}>
                <img className='poster-img' src={'https://image.tmdb.org/t/p/original' + movie.poster_path} alt={'Poster for ' + movie.original_title}/>
                <span className='movie-info'>
                    <h2 className='movie-detail-title info'>{movie.original_title}</h2>
                    <p className='release-date info'>Release Date: {movie.release_date}</p>
                    <p className='rating info'>User Score: {`${Math.round(movie.vote_average*10)}%`}</p>
                    <article className='movie-overview info'>{movie.overview}</article>
                    <div className='buttons'>
                      {ifMovieInFavourites(movie) ? 
                      <button onClick={() => {handleClick(movie, 'remove')}}>Remove from Favourites</button> 
                      : <button onClick={() => {handleClick(movie, 'add')}}>Add to Favourites</button>}
                    </div>
                </span>
            </div>
        </>
    )
}

export default MovieDetail