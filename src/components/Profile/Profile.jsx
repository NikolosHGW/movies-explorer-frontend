import './Profile.css';
import Header from '../Header/Header';
import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export default function Profile({ onLogout, handleEditProfile }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [isLoading, setIsLoading] = React.useState(false);
  const [inputsValues, setInputsValues] = React.useState({
    name: '',
    email: '',
    nameValid: false,
    emailValid: false,
    nameValidMessage: '',
    emailValidMessage: '',
  });

  function handleProfileChange(evt) {
    setInputsValues({
      ...inputsValues,
      [evt.target.name]: evt.target.value,
      nameValid: evt.target.value === currentUser.name ? false : evt.target.validity.valid,
      emailValid: evt.target.value === currentUser.email ? false : evt.target.validity.valid,
      [`${evt.target.name}ValidMessage`]: evt.target.validationMessage,
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    const { name, email } = inputsValues;
    handleEditProfile(name, email);
  }

  React.useEffect(() => {
    setInputsValues(prev => currentUser.name ? ({
      ...prev,
      name: currentUser.name,
      email: currentUser.email,
    }) : prev);
  }, [currentUser]);

  React.useEffect(() => {
    setIsLoading(false);
    setInputsValues(prev => currentUser.name ? ({
      ...prev,
      name: currentUser.name,
      email: currentUser.email,
      nameValid: false,
      emailValid: false,
      nameValidMessage: '',
      emailValidMessage: '',
    }) : prev);
  }, [currentUser]);

  return (
    <div className='profile'>
      <Header />
      <h2 className='profile__heading'>{`Привет, ${currentUser.name}!`}</h2>
      <form className='profile__form' onSubmit={handleSubmit} noValidate>
        <fieldset className='profile__fieldset'>
          <label className='profile__label profile__label_border'>Имя
            <input
              className={`profile__input profile__input_name${
                inputsValues.nameValidMessage ? ' profile__input_type_error' : ''}`}
              value={inputsValues.name}
              onChange={handleProfileChange}
              type='text'
              name='name'
              placeholder='Имя'
              required
              minLength='2'
              maxLength='30'
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
              type='email'
              name='email'
              placeholder='Почта'
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
          className={`profile__edit-button${inputsValues.nameValid && inputsValues.emailValid ? '' : ' profile__edit-button_inactive'}`}
          type='submit'
          disabled={!(inputsValues.nameValid && inputsValues.emailValid)}
          onClick={() => setIsLoading(true)}
        >
          {isLoading ? (<div className="profile__spinner"></div>) : 'Редактировать'}
        </button>
      </form>
      <button
        className='profile__exit-button'
        type='button'
        onClick={() => onLogout()}
      >
        {isLoading ? (<div className="profile__spinner"></div>) : 'Выйти из аккаунта'}
      </button>
    </div>
  );
}
