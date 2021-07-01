import './AuthForm.css';
import Logo from '../Logo/Logo';
import React from 'react';

export default function AuthForm({ children, buttonText, greeting, isValid, onSubmit }) {
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => setIsLoading(false), []);

  return (
    <form
      className='auth-form'
      onSubmit={onSubmit}
      noValidate
    >
      <Logo />
      <h2 className='auth-form__heading'>{greeting}</h2>
      <fieldset className='auth-form__field'>
        {children}
      </fieldset>
      <button
        className={`auth-form__submit${isValid ? '' : ' auth-form__submit_inactive'}`}
        type='submit'
        disabled={!isValid}
        onClick={() => setIsLoading(true)}
      >
        {isLoading ? (<div className="auth-form__spinner"></div>) : buttonText}
      </button>
    </form>
  );
}
