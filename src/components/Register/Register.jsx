import './Register.css';
import AuthForm from '../AuthForm/AuthForm';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Register({ onRegister }) {
  const [inputsValues, setInputsValues] = React.useState({
    name: '',
    email: '',
    password: '',
    nameValid: false,
    emailValid: false,
    passwordValid: false,
    nameValidMessage: '',
    emailValidMessage: '',
    passwordValidMessage: '',
  });

  function handleProfileCreate(evt) {
    setInputsValues({
      ...inputsValues,
      [evt.target.name]: evt.target.value,
      [`${evt.target.name}Valid`]: evt.target.validity.valid,
      [`${evt.target.name}ValidMessage`]: evt.target.validationMessage,
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    const {name, email, password} = inputsValues;
    onRegister(name, email, password);
  }

  return (
    <div className='register'>
      <AuthForm
        buttonText='Зарегистрироваться'
        greeting='Добро пожаловать!'
        isValid={inputsValues.nameValid && inputsValues.emailValid && inputsValues.passwordValid}
        onSubmit={handleSubmit}
      >
        <label className='auth-form__label'>
          <span>Имя</span>
          <input
            className={`auth-form__input auth-form__input_name${
              inputsValues.nameValidMessage ? ' auth-form__input_type_error' : ''}`}
            value={inputsValues.name}
            onChange={handleProfileCreate}
            type='text'
            name='name'
            placeholder='Имя'
            required
            minLength="2"
            maxLength="30"
          />
          <span className={`auth-form__input-error name-input-error${
            inputsValues.nameValid ? '' : ' auth-form__input-error_active'}`}
          >
            {inputsValues.nameValid ? '' : inputsValues.nameValidMessage}
          </span>
        </label>
        <label className='auth-form__label'>
          <span>E-mail</span>
          <input
            className={`auth-form__input auth-form__input_email${
              inputsValues.emailValidMessage ? ' auth-form__input_type_error' : ''}`}
            value={inputsValues.email}
            onChange={handleProfileCreate}
            type='email'
            name='email'
            placeholder='E-mail'
            required
          />
          <span className={`auth-form__input-error email-input-error${
            inputsValues.emailValid ? '' : ' auth-form__input-error_active'}`}
          >
            {inputsValues.emailValid ? '' : inputsValues.emailValidMessage}
          </span>
        </label>
        <label className='auth-form__label'>
          <span>Пароль</span>
          <input
            className={`auth-form__input auth-form__input_password${
              inputsValues.passwordValidMessage ? ' auth-form__input_type_error' : ''}`}
            value={inputsValues.password}
            onChange={handleProfileCreate}
            type='password'
            name='password'
            placeholder='Пароль'
            required
            minLength='8'
          />
          <span className={`auth-form__input-error password-input-error${
            inputsValues.passwordValid ? '' : ' auth-form__input-error_active'}`}
          >
            {inputsValues.passwordValid ? '' : inputsValues.passwordValidMessage}
          </span>
        </label>
      </AuthForm>
      <span className='register__span'>
        Уже зарегистрированы? <Link
          className='register__link'
          to='/signin'
        >Войти</Link>
      </span>
    </div>
  );
}
