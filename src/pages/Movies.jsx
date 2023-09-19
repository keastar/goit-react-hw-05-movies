import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import css from './Movies.module.css';
import { useState } from 'react';
import { searchMovie } from '../api/API_KEY';

export default function Movies({ onSubmit }) {
  const [searchMvName, setSearchMvName] = useState('');
  const handleNameChange = event => {
    setSearchMvName(event.currentTarget.value.toLowerCase());
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (searchMvName.trim() === '') {
      return alert('Введите, что хотите найти из фильмов!');
    }
    //2.И передаю в метод значение из этого файла state=searchImgName -> прокидываем пропс с App 'propName' и передаем ему значение с Searchbar -> searchImgName
    onSubmit(searchMvName);
    //5.Идет очистка формы поля input после ее сабмита
    setSearchMvName('');
  };

  return (
    <>
      <div className={css.movies}>
        {/* // 1.при событии Submit формы -> вызываю из App -> handleSubmit -> propName */}
        <form className={css.form} onSubmit={handleSubmit}>
          <input
            className={css.input}
            type="text"
            name="searchMvName"
            value={searchMvName}
            onChange={handleNameChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
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
      <div className={css.page_this}>!MOVIES PAGE!</div>
    </>
  );
}
// export default Movies;

// Movies.propTypes = {
// onSubmit: PropTypes.func.isRequired,
// };
