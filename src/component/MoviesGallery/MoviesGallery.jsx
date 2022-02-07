import styles from './MoviesGallery.module.scss'
import { ImStarFull } from 'react-icons/im'
import { Link, useLocation } from 'react-router-dom'
const star = {
  width: 30,
  textAlign: 'centre',
}

function MoviesGallery({ movies }) {
  const location = useLocation()
  console.log(location)
  return (
    <>
      <ul className={styles.List}>
        {movies.map((move) => (
          <li className={styles.Main} key={move.id}>
            <Link
              to={{
                pathname: `/movies/${move.id}`,
                state: { from: location },
              }}
            >
              <p>{move.title}</p>
              <img
                className={styles.HomaImg}
                src={`https://image.tmdb.org/t/p/w500${move.poster_path}`}
                alt={move.title}
                height={300}
              />
              <div>
                <p>
                  <ImStarFull style={star} />
                  {move.vote_average}
                </p>
                <p>{move.release_date}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
export default MoviesGallery
