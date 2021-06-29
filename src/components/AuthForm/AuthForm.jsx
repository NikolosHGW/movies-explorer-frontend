import './AuthForm.css';
import Logo from '../Logo/Logo';

export default function AuthForm({ children, buttonText, greeting, isValid, onSubmit }) {
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
      >{buttonText}</button>
    </form>
  );
}
