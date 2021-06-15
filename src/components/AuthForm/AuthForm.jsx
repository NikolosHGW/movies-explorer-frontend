import './AuthForm.css';
import Logo from '../Logo/Logo';

export default function AuthForm({ children, buttonText }) {
  return (
    <form className='auth-form'>
      <Logo />
      <h2 className='auth-form__heading'>Добро пожаловать!</h2>
      <fieldset className='auth-form__field'>
        {children}
      </fieldset>
      <button className='auth-form__submit' type='submit'>{buttonText}</button>
    </form>
  );
}
