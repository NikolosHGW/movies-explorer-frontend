import './Register.css';
import AuthForm from '../AuthForm/AuthForm';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  const [inputsValues, setInputsValues] = React.useState({
    name: '',
    email: '',
    password: '',
    nameValid: true,
    emailValid: true,
    passwordValid: true,
    nameValidMessage: '',
    emailValidMessage: '',
    passwordValidMessage: '',
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
    <div className='register'>
      <AuthForm buttonText='Зарегистрироваться'>
        <label className='auth-form__label'>
          <span>Имя</span>
          <input
            className={`auth-form__input auth-form__input_name${
              inputsValues.nameValidMessage ? ' auth-form__input_type_error' : ''}`}
            value={inputsValues.name}
            onChange={handleProfileChange}
            type="text"
            name="name"
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
            onChange={handleProfileChange}
            type="email"
            name="email"
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
            onChange={handleProfileChange}
            type="password"
            name="password"
            required
            minLength="8"
          />
          <span className={`auth-form__input-error password-input-error${
            inputsValues.passwordValid ? '' : ' auth-form__input-error_active'}`}
          >
            {inputsValues.passwordValid ? '' : inputsValues.passwordValidMessage}
          </span>
        </label>
      </AuthForm>
      <span className="register__span">
        Уже зарегистрированы? <Link
          className="register__link"
          to="/signin"
        >Войти</Link>
      </span>
    </div>
  );
}
