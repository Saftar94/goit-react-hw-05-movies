import { useState, useEffect } from 'react'
import Form from '../component/Form/Form'
import { renderMovies } from '../Apiserver'
import { useHistory, useLocation } from 'react-router-dom'
import MoviesGallery from '../component/MoviesGallery/MoviesGallery'
import InfiniteScroll from 'react-infinite-scroll-component'
import { BallTriangle } from 'react-loader-spinner'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export function Movies({ onSubmit }) {
  const [movieName, setMovieName] = useState('')
  const [submitMovieName, setSubmitMovieName] = useState('null')
  const [movies, setMovies] = useState(null)
  const [status, setStatus] = useState('idle')
  const [page, setPage] = useState(1)
  const history = useHistory()
  const location = useLocation()
  const sortOrder = new URLSearchParams(location.search).get('searchBy')

  useEffect(() => {
    if (!submitMovieName) {
      if (sortOrder) {
        setSubmitMovieName(sortOrder)
        setStatus('pending')
      }
      return
    }
    renderMovies(page, submitMovieName)
      .then((data) => {
        if (data.results.length === 0)
          throw new Error(toast.error('No results were found for your search!'))

        if (status === 'pending') {
          setMovies(data.results)
        } else {
          setMovies([...movies, ...data.results])
        }
        setStatus('resolved')
      })
      .catch((error) => {
        return 'error'
      })
  }, [page, submitMovieName])

  const HandelMoviesInput = (event) => {
    setMovieName(event.currentTarget.value.toLowerCase())
  }

  const handelSubmit = (event) => {
    event.preventDefault()

    if (movieName.trim() === '') {
      return
    }
    setSubmitMovieName(movieName)
    setPage(1)
    setMovieName('')
    setStatus('pending')
    history.push({
      ...location,
      search: `searchBy=${movieName}`,
    })
  }

  return (
    <>
      <Form
        handelSubmit={handelSubmit}
        SearchNamae={movieName}
        HandelMoviesInput={HandelMoviesInput}
      />
      <ToastContainer />
      {status === 'idle' && <p>Input value</p>}
      {status === 'pending' && (
        <BallTriangle
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={300}
        />
      )}
      {status === 'resolved' && (
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
              timeout={500}
            />
          }
        >
          <MoviesGallery movies={movies} />
        </InfiniteScroll>
      )}
    </>
  )
}

export default Movies
