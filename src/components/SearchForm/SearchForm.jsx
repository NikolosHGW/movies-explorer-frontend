import React from 'react';
import './SearchForm.css';

export default function SearchForm({ searchLogic, handleSearch, handleSetInfoTool, moviesArrayForFilter, parentComponent }) {
  const [value, setValue] = React.useState('');
  const [checked, setChecked] = React.useState(false);

  function handleChangeValue(evt) {
    setValue(evt.target.value);
  }

  function handleChangeChecked(evt) {
    setChecked(evt.target.checked);
    handleSearch(value, moviesArrayForFilter, evt.target.checked);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!value) {
      handleSetInfoTool(false, 'Нужно ввести ключевое слово');
    }
    searchLogic(value, checked);
  }

  React.useEffect(() => {
    const prevTextSearch = localStorage.getItem('prevTextSearch');
    if (prevTextSearch && parentComponent === 'Movies') {
      setValue(prevTextSearch);
    }
  }, [parentComponent]);

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
            onChange={handleChangeValue}
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
          defaultChecked={checked}
          onChange={handleChangeChecked}
          required
        />
        <span className='search-form__pseudo-item search-form__pseudo-item_type_checkbox'></span>
        <span className='search-form__short-text'>Короткометражки</span>
      </label>
    </form>
  );
}
