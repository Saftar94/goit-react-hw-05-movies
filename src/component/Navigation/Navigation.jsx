import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.scss'

const Navigation = () => (
  <nav>
    <NavLink
      to="/"
      exact
      className={styles.link}
      activeClassName={styles.active}
    >
      Home
    </NavLink>
    <NavLink
      to="/movies"
      className={styles.link}
      activeClassName={styles.active}
    >
      Movies
    </NavLink>
  </nav>
)

export default Navigation
