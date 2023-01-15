// movie detail page
import { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import {
	ifMovieInFavourites,
	addToLocalStorage,
	removeFromLocalStorage,
	getFavouriteMovies,
} from '../data/utilities';
import button from '../globals/images/back-button.png';
import FavouriteContext from '../contexts/FavouriteContext';

const MOVIE_DB_API_KEY = process.env.REACT_APP_MOVIE_DB_API_KEY;

const MovieDetail = () => {
	const { setFavourites } = useContext(FavouriteContext);
	const { movieId } = useParams();

	const [movie, setMovie] = useState({});
	const [genres, setGenres] = useState([]);

	useEffect(() => {
		const getMovie = async () => {
			const response = await fetch(
				`https://api.themoviedb.org/3/movie/${movieId}?api_key=${MOVIE_DB_API_KEY}&language=en-US`
			);
			const data = await response.json();
			setMovie(data);
			setGenres(data.genres);
		};
		getMovie();
	}, [movieId]);

	console.log(movie);

	const handleClick = (movie, method) => {
		switch (method) {
			case 'add':
				addToLocalStorage(movie);
				break;
			case 'remove':
				removeFromLocalStorage(movie);
				break;
			default:
				break;
		}
		let favs = getFavouriteMovies();
		setFavourites(favs);
	};

	return (
		<>
			<div
				className="movie-details"
				style={{
					backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.poster_path}")`,
					backgroundPosition: 'center',
					objectFit: 'cover',
					backgroundColor: 'rgba(0,0,0,0.85)',
					backgroundBlendMode: 'multiply',
					// minHeight: '100vh',
				}}
			>
				<Link to="/" className="back-button">
					<img src={button} alt="Back Button" />
				</Link>
				<img
					className="poster-img"
					src={'https://image.tmdb.org/t/p/original' + movie.poster_path}
					alt={'Poster for ' + movie.original_title}
				/>
				<div className="movie-details-info">
					<h2>{movie.original_title}</h2>
					<h3>Release Date: {movie.release_date}</h3>
					{movie.vote_average ? (
						<>
							<div className="rating">
								<StarRatings
									rating={movie.vote_average / 2}
									starRatedColor="yellow"
									numberOfStars={5}
									name="rating"
									starDimension="30px"
									starSpacing="1px"
								/>
								<p>{movie.vote_average * 10}%</p>
							</div>
						</>
					) : (
						<></>
					)}
					<article>{movie.overview}</article>
					<div className="genre-list">
						{genres.map((genre) => (
							<>
								<h3 key={genre.id}>{genre.name}</h3>
							</>
						))}
					</div>

					<div className="buttons">
						{ifMovieInFavourites(movie) ? (
							<button
								onClick={() => {
									handleClick(movie, 'remove');
								}}
							>
								Remove from Favourites
							</button>
						) : (
							<button
								onClick={() => {
									handleClick(movie, 'add');
								}}
							>
								Add to Favourites
							</button>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default MovieDetail;
