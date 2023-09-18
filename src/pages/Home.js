import css from './Home.module.css';
import { KEY_API, BASE_URL, TREND_DAY } from '../api/API_KEY';
import React, { useState, useEffect } from 'react';
// import Loading from '../components/Loading';
import ErrorView from '../components/ErrorView';
import FilmGalleryItem from '../components/FilmGalleryItem';

export default function Home() {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);
  // const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      // setLoading(true);
      try {
        fetch(`${BASE_URL}${TREND_DAY}?api_key=${KEY_API}`)
          .then(response => {
            return response.json();
          })
          .then(({ results }) => {
            setFilms(prevFilms => [...prevFilms, ...results]);
          });
      } catch (error) {
        console.log('Smth wrong with App fetch', error);
        setError({ error });
      }
    },
    // } finally {
    // setLoading(false);
    // }
    []
  );

  return (
    <div className={css.page}>
      {/* {isLoading && <Loading />} */}
      {error && <ErrorView message={error.message} />}
      <ul className={css.page_gallery}>
        {films.map(film => (
          <FilmGalleryItem
            key={film.id}
            film={film}
            // key={film.id}
            // image={image}
            // onClick={}
          />
        ))}
      </ul>
      !HOME PAGE!
    </div>
  );
}
