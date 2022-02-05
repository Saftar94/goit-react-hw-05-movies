const KEY = "8eadd8b4df8a5dcd77ffa3f63c5736c3";
const BASE = "https://api.themoviedb.org/3";
const MOOVIEWEEK = `${BASE}/trending/movie/week`;
const SEARCHURL = `${BASE}/search/movie`;
const ID_URL = `${BASE}/movie/`;

export function renderMovies(page, searchQuery, option) {
  if (option === "home") {
    const URL_ADDRES = `${MOOVIEWEEK}?api_key=${KEY}&page=${page}`;
    return FetchAPi(URL_ADDRES);
  } else if (searchQuery !== undefined) {
    const URL_ADDRES = `${SEARCHURL}?api_key=${KEY}&language=en-US&query=${searchQuery}&page=${page}`;
    return FetchAPi(URL_ADDRES);
  }
}

export function renderParamMovie(id, option) {
  if (option) {
    const URL_ADDRES = `${ID_URL}${id}/${option}?api_key=${KEY}`;
    return FetchAPi(URL_ADDRES)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        "error";
      });
  } else {
    const URL_ADDRES = `${ID_URL}${id}?api_key=${KEY}`;
    return FetchAPi(URL_ADDRES).then((response) => {
      return response;
    });
  }
}

function FetchAPi(URL_ADDRES) {
  return fetch(URL_ADDRES).then((res) => {
    if (res.status === 200) {
      return res.json();
    } else {
      return new Error();
    }
  });
}
