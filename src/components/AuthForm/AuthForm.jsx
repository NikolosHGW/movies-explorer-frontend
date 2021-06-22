import './AuthForm.css';
import Logo from '../Logo/Logo';

export default function AuthForm({ children, buttonText, greeting }) {
  return (
    <form className='auth-form'>
      <Logo />
      <h2 className='auth-form__heading'>{greeting}</h2>
      <fieldset className='auth-form__field'>
        {children}
      </fieldset>
      <button className='auth-form__submit' type='submit'>{buttonText}</button>
    </form>
  );
}
