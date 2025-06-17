import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import {
	addToLocalStorage,
	removeFromLocalStorage,
	ifMovieInFavourites,
	getFavouriteMovies,
} from '../data/utilities';
import { useContext } from 'react';
import FavouriteContext from '../contexts/FavouriteContext';
import '../styles/MovieItem.css';

const MovieItem = ({ movie }) => {
	const { setFavourites } = useContext(FavouriteContext);

	let movieOverview = movie.overview;
	if (movieOverview.length > 100) {
		movieOverview = movieOverview.slice(0, 74) + ' ...';
	}

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
		<div className="movie-item">
			<div className="movie-item-details">
				<img
					src={'https://image.tmdb.org/t/p/w780' + movie.poster_path}
					alt={'Poster for ' + movie.original_title}
				/>

				<span>
					<h2>{movie.original_title}</h2>
					<p>Release Date: {movie.release_date}</p>
					<div className="rating">
						<StarRatings
							rating={movie.vote_average / 2}
							starRatedColor="yellow"
							numberOfStars={5}
							name="rating"
							starDimension="30px"
							starSpacing="1px"
						/>
						<p>{(movie.vote_average * 10).toFixed(2)}%</p>
					</div>

					<div className="buttons">
						<Link to={'/movie/' + movie.id}>
							<button>More Info</button>
						</Link>
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
				</span>
			</div>

			<div className="movie-description">
				<article>{movieOverview}</article>
			</div>
		</div>
	);
};

export default MovieItem;
