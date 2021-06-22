import React from 'react';
import './SearchForm.css';

export default function SearchForm() {
  return (
    <form className='search-form' name='searchForm' noValidate>
      <div className='search-form__container'>
        <label className='search-form__text'>
          <input
            className='search-form__movie'
            placeholder="Фильм"
            type='text'
            name='movie'
          />
        </label>
        <button className='search-form__search-button' type='submit'>Найти</button>
      </div>
      <label className='search-form__checkbox'>
        <input
          className='search-form__short'
          type='checkbox'
          name='short'
        />
        <span className='search-form__pseudo-item search-form__pseudo-item_type_checkbox'></span>
        <span className='search-form__short-text'>Короткометражки</span>
      </label>
    </form>
  );
}
