import { renderParamMovie } from '../Apiserver'
import { lazy, Suspense, useState, useEffect } from 'react'
import styles from './MovieDetailsPage.module.scss'
import {
  useRouteMatch,
  useParams,
  useHistory,
  useLocation,
} from 'react-router-dom'
import { ImStarFull } from 'react-icons/im'
import { Link, Route } from 'react-router-dom'
import { BallTriangle } from 'react-loader-spinner'
import Section from '../component/Section/Section'

const Cast = lazy(() =>
  import('../component/Cast/Cast' /* webpackChunkName: "Cast-components" */),
)
const Reviews = lazy(() =>
  import(
    '../component/Reviews/Reviews' /* webpackChunkName: "Reviews-components" */
  ),
)

const MovieDetauls = () => {
  const [movieCard, setmovieCard] = useState(null)
  const params = useParams()
  const { url } = useRouteMatch()
  const history = useHistory()
  const location = useLocation()

  useEffect(() => {
    renderParamMovie(params.Id).then((data) => setmovieCard(data))
  }, [])

  const GoBack = () => {
    history.push(location?.state?.from ?? '/movies')
  }

  return (
    <>
      <Section>
        <ul className={styles.UlList}>
          <div className={styles.DivButton}>
            <button className={styles.Link} type="button" onClick={GoBack}>
              GO BACK
            </button>
          </div>
          {movieCard && (
            <div>
              <li className={styles.List} key={movieCard.id}>
                <img
                  className={styles.ImageMov}
                  src={`https://image.tmdb.org/t/p/w500${movieCard.poster_path}`}
                  alt={movieCard.title}
                  height={450}
                />
                <div className={styles.DiscripMovies}>
                  <h2>{movieCard.title}</h2>
                  <span className={styles.SpanMov}>ABOUT THE MOVIE</span>
                  <p>
                    <span className={styles.SpanDAMov}>Release date:</span>
                    {movieCard.release_date}
                  </p>
                  <p>
                    <span className={styles.SpanDAMov}>LIKES:</span>
                    {movieCard.popularity}
                  </p>
                  <p>
                    <span className={styles.SpanDAMov}>IMDb RATING:</span>
                    <ImStarFull />
                    {movieCard.vote_average}/10.0
                  </p>
                  <span className={styles.SpanDescMov}> Description:</span>
                  <p>{movieCard.overview}</p>
                  <p>
                    <span className={styles.SpanDAMov}> Genre:</span>

                    {movieCard.genres.map((gener) => `${gener.name} `)}
                  </p>
                </div>
              </li>
              <div className={styles.DivLink}>
                <Link className={styles.Link} to={`${url}/cast`}>
                  Cast
                </Link>
                <Link className={styles.Link} to={`${url}/reviews`}>
                  Reviews
                </Link>
              </div>
              <Suspense
                fallback={
                  <BallTriangle
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000}
                  />
                }
              >
                <Route exact path="/movies/:Id/cast">
                  <Cast />
                </Route>
                <Route exact path="/movies/:Id/reviews">
                  <Reviews />
                </Route>
              </Suspense>
            </div>
          )}
        </ul>
      </Section>
    </>
  )
}

export default MovieDetauls
