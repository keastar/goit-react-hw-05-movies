// import { KEY_API, BASE_URL, MOVIE_DETAILS, movieRequest } from '../api/API_KEY';
import React, { useState, useEffect } from 'react';
// import Loading from '../components/Loading';
// import ErrorView from '../components/ErrorView';
import css from '../components/Reviews.module.css';
import { reviewRequest } from '../api/API_KEY';
// import { KEY_API, BASE_URL, MOVIE_DETAILS } from '../api/API_KEY';

import { useParams } from 'react-router-dom';

export default function Cast() {
  const { movieId } = useParams();
  console.log(movieId);
  const [reviewInfo, setReviewInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!movieId) return;

    (async function reviewMovie() {
      const res = await reviewRequest(movieId);

      setReviewInfo(res.data.results);
      setIsLoading(false);
    })();

    return () => {};
  }, [movieId]);

  return (
    <>
      <div className={css.review}>
        {/* {isLoading && <Loading />} */}
        {!isLoading && (
          <ul className={css.all_list}>
            {reviewInfo.map(({ id, author, content }) => {
              return (
                <li className={css.review_list} key={id}>
                  <p className={css.review_info}>
                    <b className={css.review_headers}>Author: {author}</b>
                  </p>
                  <br></br>
                  <p className={css.review_info}>{content}</p>
                </li>
              );
            })}
          </ul>
        )}
        {!isLoading && reviewInfo.length === 0 && (
          <div className={css.review_info}>
            There`s no info about this Movie!
          </div>
        )}
      </div>
    </>
  );
}
