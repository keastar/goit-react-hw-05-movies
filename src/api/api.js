// import axios from 'axios';
import { KEY_API, BASE_URL } from './API_KEY';

const { fetchMovies } = fetch(`${BASE_URL}?api_key=${KEY_API}`);

export { fetchMovies };
