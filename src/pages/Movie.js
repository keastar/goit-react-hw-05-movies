// import { KEY_API, BASE_URL, MOVIE_DETAILS, movieRequest } from '../api/API_KEY';
import React, { useState, useEffect, useRef } from 'react';
import { BackLink } from '../components/BackLink';
import { useLocation } from 'react-router-dom';
// import { Suspense } from 'react';
// import Loading from '../components/Loading';
// import ErrorView from '../components/ErrorView';
import css from '../pages/Movie.module.css';
import { movieRequest } from '../api/API_KEY';
import { AboutOneMovie } from '../components/AboutOneMovie';
// import { KEY_API, BASE_URL, MOVIE_DETAILS } from '../api/API_KEY';

import { Link, Outlet, useParams } from 'react-router-dom';

export default function Movie() {
  const { movieId } = useParams();
  console.log(movieId);
  const [movieInfo, setMovieInfo] = useState([]);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from);
  // const [genres, setGenres] = useState([]);
  // const [original_title, setOriginal_title] = useState('');
  // const [overview, setOverview] = useState('');
  // const [popularity, setPopularity] = useState(null);
  // const [poster_path, setPoster_path] = useState('');
  // const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!movieId) return;

    (async function aboutMovie() {
      const res = await movieRequest(movieId);
      if (res.data.length === 0) {
        return;
      }
      setMovieInfo(res.data);
      setIsLoading(false);
    })();

    return () => {};
  }, [movieId]);

  //получаю данные с сервера и обновляю массив картинок

  return (
    <>
      <div className={css.movie}>
        <BackLink to={backLinkLocationRef.current ?? '/'}>Back</BackLink>
        {/* {isLoading && <Loading />} */}
        {!isLoading && (
          <AboutOneMovie movieInfo={movieInfo} className={css.movie_details} />
        )}
        {/* {error && <ErrorView message={error.message} />} */}
      </div>
      <div>
        <ul className={css.details}>
          <li>
            <Link to={`cast`}> Cast </Link>
          </li>
          <li>
            <Link to={`reviews`}> Reviews </Link>
          </li>
        </ul>
        {/* <Suspense fallback={<div>Loading page...</div>}> */}
        <Outlet />
        {/* </Suspense> */}
        !MOVIE PAGE!{movieId}
      </div>
    </>
  );
}
