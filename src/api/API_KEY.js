import axios from 'axios';

const KEY_API = `4523ef29a1d3e4e799126624640d84fe`;
const BASE_URL = `https://api.themoviedb.org/3/`;
const TREND_DAY = `trending/all/day`;
const MOVIE_DETAILS = `movie/`;

export async function movieRequest(movieId) {
  try {
    const response = await axios.get(
      `${BASE_URL}${MOVIE_DETAILS}${movieId}?api_key=${KEY_API}`
    );
    return response;
  } catch (error) {
    console.log('Smth wrong with App fetch', error);
  }
}

export async function castRequest(movieId) {
  try {
    const response = await axios.get(
      `${BASE_URL}${MOVIE_DETAILS}${movieId}/credits?api_key=${KEY_API}`
    );
    return response;
  } catch (error) {
    console.log('Smth wrong with App fetch', error);
  }
}

export { KEY_API, BASE_URL, TREND_DAY, MOVIE_DETAILS };
