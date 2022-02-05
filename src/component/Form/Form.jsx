import styles from './Form.module.scss'

function Form({ handelSubmit, SearchNamae, HandelMoviesInput }) {
  return (
    <form onSubmit={handelSubmit} className={styles.search} action="">
      <input
        className={styles.input}
        type="search"
        placeholder="Search here..."
        required
        onChange={HandelMoviesInput}
        value={SearchNamae}
      ></input>
      <button className={styles.button} type="submit">
        Search
      </button>
    </form>
  )
}

export default Form
