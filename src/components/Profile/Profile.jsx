import './Profile.css';
import Header from '../Header/Header';
import React from 'react';

export default function Profile() {
  const [inputsValues, setInputsValues] = React.useState({
    name: 'Аккаунт',
    email: 'acc@yandex.ru',
    nameValid: true,
    emailValid: true,
    nameValidMessage: '',
    emailValidMessage: '',
  });

  function handleProfileChange(evt) {
    setInputsValues({
      ...inputsValues,
      [evt.target.name]: evt.target.value,
      [`${evt.target.name}Valid`]: evt.target.validity.valid,
      [`${evt.target.name}ValidMessage`]: evt.target.validationMessage,
    });
  }

  return (
    <div className='profile'>
      <Header />
      <h2 className='profile__heading'>{`Привет, ${inputsValues.name}!`}</h2>
      <form className='profile__form' noValidate>
        <fieldset className='profile__fieldset'>
          <label className='profile__label profile__label_border'>Имя
            <input
              className={`profile__input profile__input_name${
                inputsValues.nameValidMessage ? ' profile__input_type_error' : ''}`}
              value={inputsValues.name}
              onChange={handleProfileChange}
              type="text"
              name="name"
              required
              minLength="2"
              maxLength="40"
            />
            <span className={`profile__input-error name-input-error${
              inputsValues.nameValid ? '' : ' profile__input-error_active'}`}
            >
              {inputsValues.nameValid ? '' : inputsValues.nameValidMessage}
            </span>
          </label>
          <label className='profile__label'>Почта
            <input
              className={`profile__input profile__input_email${
                inputsValues.emailValidMessage ? ' profile__input_type_error' : ''}`}
              value={inputsValues.email}
              onChange={handleProfileChange}
              type="email"
              name="email"
              required
            />
            <span className={`profile__input-error email-input-error${
              inputsValues.emailValid ? '' : ' profile__input-error_active'}`}
            >
              {inputsValues.emailValid ? '' : inputsValues.emailValidMessage}
            </span>
          </label>
        </fieldset>
        <button
          className="profile__edit-button"
          type="submit"
        >
          Редактировать
        </button>
      </form>
      <button className='profile__exit-button' type='button'>Выйти из аккаунта</button>
    </div>
  );
}
