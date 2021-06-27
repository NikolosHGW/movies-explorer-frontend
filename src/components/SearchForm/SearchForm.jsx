import React from 'react';
import './SearchForm.css';

export default function SearchForm({ fetchMovies, handleSearch, handleSetInfoTool }) {
  const [value, setValue] = React.useState('');

  function handleChange(evt) {
    setValue(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!value) {
      handleSetInfoTool(false, 'Нужно ввести ключевое слово');
    }
    if (!localStorage.getItem('movies') && value) {
      fetchMovies(value);
    } else if (value) {
      handleSearch(value, JSON.parse(localStorage.getItem('movies')));
    }
  }

  return (
    <form
      className='search-form'
      name='searchForm'
      onSubmit={handleSubmit}
      noValidate>
      <div className='search-form__container'>
        <label className='search-form__text'>
          <input
            className='search-form__movie'
            placeholder="Фильм"
            type='text'
            name='movie'
            value={value}
            onChange={handleChange}
            required
          />
        </label>
        <button className='search-form__search-button' type='submit'>Найти</button>
      </div>
      <label className='search-form__checkbox'>
        <input
          className='search-form__short'
          type='checkbox'
          name='short'
          required
        />
        <span className='search-form__pseudo-item search-form__pseudo-item_type_checkbox'></span>
        <span className='search-form__short-text'>Короткометражки</span>
      </label>
    </form>
  );
}
