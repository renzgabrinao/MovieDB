// about page
import tmdb_logo from '../globals/images/tmbd_logo.svg'
import button from '../globals/images/back-button.png'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <Link to="/moviedb"><img src={button} alt='Back Button' className='back-button'/></Link>
      <div className='about-container'>
        <h1>Welcome to MovieDB!</h1>
        <span className='about-info'>
          <article className='about-tmdb'>
            <section>
              <h2>About the Project</h2>
              <p>
                MovieDB is a movie database listing currently playing, top rated, popular, and upcoming movies. Browse you favourite films and add it to your list!
              </p>
              <p>
                This application uses the <a className='links' href="https://developers.themoviedb.org/3/getting-started/introduction">TMDB API</a> but is not endorsed or certified by TMDB
              </p>
            </section>
            <section>
              <h2>Powered by:</h2>
              <a href="https://developers.themoviedb.org/3/getting-started/introduction"><img className='tmdb-logo' src={tmdb_logo} alt='TMDB Logo'/></a>
            </section>
          </article>
          <article className='about-dev'>
            <h2>About the developer</h2>
            <p>MovieDB is a React JS application made by <a className='links' href='https://github.com/renzgabrinao'>Renz Gabrinao</a></p>
          </article>
        </span>
      </div>
    </>
  )
}

export default About