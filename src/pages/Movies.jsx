// import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import css from './Movies.module.css';
import { useState, useEffect } from 'react';
import { searchMovie } from '../api/API_KEY';
import { useLocation, useSearchParams, Link } from 'react-router-dom';

export default function Movies() {
  const [moviesFind, setMoviesFind] = useState([]);
  const [noFilms, setNoFilms] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('search');
  const location = useLocation();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    const searchQuery = form.elements.search.value;

    setSearchParams({ search: searchQuery });
    form.reset();
  };

  useEffect(() => {
    setNoFilms(false);
    if (!query) return;

    (async function searchMovies() {
      const res = await searchMovie(query);
      if (res.data.results.lenght === 0) {
        setNoFilms(true);
        return;
      }
      setMoviesFind(res.data.results);
    })(query);

    return () => {};
  }, [query]);

  return (
    <>
      <div className={css.movies}>
        <form className={css.form} onSubmit={handleSubmit}>
          <input
            className={css.input}
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
          />
          <button type="submit" className={css.button}>
            <ImSearch
              style={{
                height: '15',
                width: '15',
              }}
            />
          </button>
        </form>
      </div>
      {query && !noFilms && (
        <ul className={css.ul}>
          {moviesFind.map(({ id, name, title }) => (
            <li key={id}>
              <Link
                // className={css.li}
                key={id}
                to={`${id}`}
                state={{ from: location }}
              >
                {title} {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <div className={css.page_this}>!MOVIES PAGE!</div>
    </>
  );
}
