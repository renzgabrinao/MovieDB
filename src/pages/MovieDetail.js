// movie detail page
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MOVIE_DB_API_KEY = process.env.REACT_APP_MOVIE_DB_API_KEY;

const MovieDetail = () => { 

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

    return (
        <>
            <div className='main movie-details'>
                <img className='poster-img' src={'https://image.tmdb.org/t/p/original' + movie.poster_path} alt={'Poster for ' + movie.original_title}/>
                <span className='movie-info'>
                    <h2 className='movie-detail-title info'>{movie.original_title}</h2>
                    <p className='release-date info'>Release Date: {movie.release_date}</p>
                    <p className='rating info'>User Score: {`${Math.round(movie.vote_average*10)}%`}</p>
                    <article className='movie-overview info'>{movie.overview}</article>
                </span>
            </div>
        </>
    )
}

export default MovieDetail