import styles from './Reviews.module.scss'
const ReviewsList = ({ data }) => {
  return (
    <>
      <li className={styles.List}>
        <h3 className={styles.Titile}>{data.author}</h3>
        <p>{data.content}</p>
      </li>
    </>
  )
}
export default ReviewsList
