// favourites page
import { useContext } from 'react';
import FavouriteContext from '../contexts/FavouriteContext';
import MovieItem from '../components/MovieItem';
import button from '../globals/images/back-button.png';
import { Link } from 'react-router-dom';

const Favourites = () => {
	const { favourites } = useContext(FavouriteContext);
	console.log(favourites);
	return (
		<>
			<Link to="/" className="back-button">
				<img src={button} alt="Back Button" />
			</Link>
			<div>
				{favourites.length === 0 ? (
					<>
						<div className="no-movies">
							<h2>
								Sorry, you have no favourited movies. <br />
								Return to the home page to add a favourite movie
							</h2>
						</div>
					</>
				) : (
					<>
						<h1 className="favourites-title">Favourites</h1>
						<div className="movie-list">
							{favourites.map((movie) => (
								<div key={movie.id.toString()}>
									<MovieItem movie={movie} />
								</div>
							))}
						</div>
					</>
				)}
			</div>
		</>
	);
};

export default Favourites;
