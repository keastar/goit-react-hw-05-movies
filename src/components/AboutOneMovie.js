import PropTypes from 'prop-types';
// import { Container } from './AboutOneMovie.module.css';
import css from './AboutOneMovie.module.css';

export const AboutOneMovie = ({ movieInfo }) => {
  const {
    genres = [],
    original_title,
    overview = '',
    popularity,
    poster_path,
  } = movieInfo;

  return (
    <div className={css.Container}>
      {poster_path ? (
        <img
          src={'https://image.tmdb.org/t/p/w500' + poster_path}
          alt="Poster"
          className={css.img_movie}
        />
      ) : (
        <div className={css.no_img_movie}>There`s no image</div>
      )}
      <div className={css.text_movie}>
        <h1>{original_title}</h1>
        <h4>User Score:</h4>
        <p>{Math.round(popularity) / 100} % </p>
        <br></br>
        <h4>Overwiev:</h4>
        <p>{overview}</p>
        <h5>Genres</h5>
        <ul>
          {genres.map(genre => (
            <li key={genre.id} className={css.li}>
              {genre.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

AboutOneMovie.propTypes = {
  movieInfo: PropTypes.shape({
    genres: PropTypes.array,
    original_title: PropTypes.string,
    overview: PropTypes.string,
    popularity: PropTypes.number,
    poster_path: PropTypes.string,
  }).isRequired,
};
