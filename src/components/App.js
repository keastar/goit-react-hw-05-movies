// import React, { useEffect, useState } from 'react';
// import { KEY_API, BASE_URL } from '../api/API_KEY';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import Movie from 'pages/Movie';
import Cast from './Cast';
import Reviews from './Reviews';
import css from './App.module.css';
// import Container from './Container';
// import { fetchMovies } from '../api/api';
import SharedLayout from './SharedLayout';

export default function App() {
  // const [films, setFilms] = useState([]);
  // const [searchImgName, setSearchImgName] = useState('');
  // const [currentPage, setCurrentPage] = useState(1);
  // const [showModal, setShowModal] = useState(false);
  // const [largeImageURL, setLargeImageURL] = useState(null);
  // const [error, setError] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  // const [total, setTotal] = useState(0);
  // const [tags, setTags] = useState('');

  // аналог ComponentDidUpdate - срабатывает фетч fetchMovies
  // каждый раз при изменении запроса в поле поиска

  // useEffect(() => {
  // if (!searchImgName) return;
  // getMovies();
  // }, []);

  // const getMovies = () => {
  //   fetch(`${BASE_URL}?api_key=${KEY_API}`)
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(({ results }) => {
  //       setFilms(prevFilms => [...prevFilms, ...results]);
  //       // eslint-disable-next-line
  //     });
  // };
  // [setFilms]

  //принимаю с формы запрос и пишу в стейт, сбрасывается после отправки стейтa из inputa
  // const handleFormSubmit = searchImgName => {
  //   setSearchImgName(searchImgName);
  //   setImages([]);
  //   setCurrentPage(1);
  //   setError(null);
  // };

  //получаю данные с сервера и обновляю массив картинок
  // const getImgs = () => {
  //   setIsLoading(true);

  //   fetchImages(searchImgName, currentPage)
  //     .then(({ hits, totalHits }) => {
  //       setImages(prevImages => [...prevImages, ...hits]);
  //       setCurrentPage(prevCurrentPage => prevCurrentPage + 1);
  //       setTotal(totalHits);
  //     })
  //     .catch(error => setError(error.message))
  //     .finally(() => setIsLoading(false));
  // };

  return (
    <div>
      <nav className={css.nav}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<Movie />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}
