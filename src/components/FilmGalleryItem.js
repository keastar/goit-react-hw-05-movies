import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import css from './FilmGalleryItem.module.css';

export default function FilmGalleryItem({ film }) {
  return (
    <li>
      {/* <NavLink to="/movies">Movies</NavLink> */}
      <Link key={film.id} to={`/movies/${film.id}`}>
        {film.title}
        {film.name}
      </Link>
      {/* <img
        src={image.webformatURL}
        alt={image.tags}
        className={css.gallery_item_image}
        onClick={() => onClick(image.largeImageURL, image.tags)}
      /> */}
    </li>
  );
}

FilmGalleryItem.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    name: PropTypes.string,
  }),
  // onClick: PropTypes.func.isRequired,
};
