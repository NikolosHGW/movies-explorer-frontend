import './Login.css';
import AuthForm from '../AuthForm/AuthForm';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [inputsValues, setInputsValues] = React.useState({
    email: '',
    password: '',
    emailValid: true,
    passwordValid: true,
    emailValidMessage: '',
    passwordValidMessage: '',
  });

  function handleLogin(evt) {
    setInputsValues({
      ...inputsValues,
      [evt.target.name]: evt.target.value,
      [`${evt.target.name}Valid`]: evt.target.validity.valid,
      [`${evt.target.name}ValidMessage`]: evt.target.validationMessage,
    });
  }

  return (
    <div className='login'>
      <AuthForm buttonText='Войти' greeting='Рады видеть!'>
        <label className='auth-form__label'>
          <span>E-mail</span>
          <input
            className={`auth-form__input auth-form__input_email${
              inputsValues.emailValidMessage ? ' auth-form__input_type_error' : ''}`}
            value={inputsValues.email}
            onChange={handleLogin}
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
            onChange={handleLogin}
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
      <span className='login__span'>
        Ещё не зарегистрированы? <Link
          className='login__link'
          to='/signup'
        >Регистрация</Link>
      </span>
    </div>
  );
}
