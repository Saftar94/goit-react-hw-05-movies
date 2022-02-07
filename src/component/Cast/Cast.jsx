import { renderParamMovie } from '../../Apiserver'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CastList from './Cast_list'
import styles from './Cast.module.scss'

const Cast = () => {
  const [credits, setCredits] = useState(null)
  const cardParams = useParams()

  useEffect(() => {
    renderParamMovie(cardParams.Id, 'credits').then((data) => setCredits(data))
  }, [cardParams])
  return (
    <>
      {credits && (
        <ul className={styles.CardList}>
          {credits.cast.map((cardCa) => (
            <CastList key={cardCa.id} data={cardCa} />
          ))}
        </ul>
      )}
    </>
  )
}

export default Cast
