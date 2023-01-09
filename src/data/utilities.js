const getFavouriteMovies = () => {
  const favouriteMovies = localStorage.getItem('favourites')
  return JSON.parse(favouriteMovies)
}

const addToLocalStorage = (movie) => {
  let favs = getFavouriteMovies();

  if(favs === null) {
    favs = []
  }

  favs.push(movie);

  localStorage.setItem(`favourites`, JSON.stringify(favs));    
}

const removeFromLocalStorage = (movie) => {
  let favs = getFavouriteMovies();
  for(let i = 0; i < favs.length; i++) {
    if(favs[i].id === movie.id) {
      favs.splice(i, 1)
      localStorage.setItem(`favourites`, JSON.stringify(favs));    
    }
  }
}


const ifMovieInFavourites = (movie) => {
  const favs = getFavouriteMovies();
  if(favs !== null) {
    for(let i = 0; i < favs.length; i++) {
      if(favs[i].id === movie.id) {
        return true;
      }
    }
  }
  return false;
}

export {
  getFavouriteMovies,
  addToLocalStorage,
  removeFromLocalStorage,
  ifMovieInFavourites
}