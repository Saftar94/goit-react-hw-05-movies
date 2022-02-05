import { renderMovies } from '../Apiserver'
import { useState, useEffect } from 'react'
import MoviesGallery from '../component/MoviesGallery/MoviesGallery'
import InfiniteScroll from 'react-infinite-scroll-component'
import { BallTriangle } from 'react-loader-spinner'

const HomeViews = ({ title }) => {
  const [movies, setMovies] = useState(null)
  const [page, setPage] = useState(1)
  useEffect(() => {
    renderMovies(page, '', 'home').then((data) => {
      if (movies) {
        setMovies([...movies, ...data.results])
      } else {
        setMovies(data.results)
      }
    })
  }, [page])

  return (
    <>
      <h1>{title}</h1>
      {movies && (
        <InfiniteScroll
          dataLength={movies.length}
          next={() => setPage(page + 1)}
          hasMore={true}
          style={{ overflow: 'hidden' }}
          loader={
            <BallTriangle
              color="#00BFFF"
              height={80}
              width={80}
              timeout={5000}
            />
          }
        >
          <MoviesGallery movies={movies} />
        </InfiniteScroll>
      )}
    </>
  )
}

export default HomeViews
