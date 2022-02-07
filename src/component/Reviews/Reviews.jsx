import { renderParamMovie } from '../../Apiserver'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReviewsList from './Reviews_list'

const Reviews = () => {
  const [reviews, setReviews] = useState(null)
  const cardParams = useParams()

  useEffect(() => {
    renderParamMovie(cardParams.Id, 'reviews').then((data) => setReviews(data))
  }, [cardParams])

  return (
    <>
      {reviews && (
        <ul>
          {reviews.results.map((rev) => (
            <ReviewsList key={rev.id} data={rev} />
          ))}
        </ul>
      )}
    </>
  )
}

export default Reviews
