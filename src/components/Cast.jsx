// import { KEY_API, BASE_URL, MOVIE_DETAILS, movieRequest } from '../api/API_KEY';
import React, { useState, useEffect } from 'react';
// import Loading from '../components/Loading';
// import ErrorView from '../components/ErrorView';
import css from '../components/Cast.module.css';
import { castRequest } from '../api/API_KEY';
// import { KEY_API, BASE_URL, MOVIE_DETAILS } from '../api/API_KEY';

import { useParams } from 'react-router-dom';

export default function Cast() {
  const { movieId } = useParams();
  console.log(movieId);
  const [castInfo, setCastInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!movieId) return;

    (async function castMovie() {
      const res = await castRequest(movieId);

      setCastInfo(res.data.cast);
      setIsLoading(false);
    })();

    return () => {};
  }, [movieId]);

  return (
    <>
      <div className={css.cast}>
        {/* {isLoading && <Loading />} */}
        {!isLoading && (
          <ul>
            {castInfo.map(({ id, character, name, profile_path }) => {
              return (
                <li className={css.cast_list} key={id}>
                  {profile_path ? (
                    <img
                      src={'https://image.tmdb.org/t/p/w500' + profile_path}
                      alt={name}
                      height={150}
                      className={css.cast_img}
                    ></img>
                  ) : (
                    <p className={css.cast_info}>Image do not found</p>
                  )}
                  <p className={css.cast_info}>
                    <b className={css.cast_headers}>Character:</b>
                    <br></br>
                    {character}
                  </p>
                  <br></br>
                  <p className={css.cast_info}>
                    <b className={css.cast_headers}>Name:</b>
                    <br></br>
                    {name}
                  </p>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
}
