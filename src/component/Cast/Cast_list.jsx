import styles from './Cast.module.scss'
const CastList = ({ data }) => {
  return (
    <>
      <li className={styles.List}>
        {data.profile_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${data.profile_path}`}
            alt={data.name}
            width="200px"
            height="250px"
            className={styles.image}
          />
        ) : (
          <img
            src={`https://i.dlpng.com/static/png/6210084-follower-instagram-profile-user-icon-follower-png-512_512_preview.png`}
            alt={data.name}
            width="200px"
            height="250px"
          />
        )}
        <h4>{data.name}</h4>
        <p>{data.character}</p>
      </li>
    </>
  )
}

export default CastList
