import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Wrapper } from './LoginForm.styled';
import { Loader } from 'components/Loader/Loader';
import { useAuth } from 'hook/useAuth';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const { isLoading } = useAuth();
  
  const handleSubmitLoginForm = evt => {
    evt.preventDefault();

    const form = evt.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <Wrapper>
      {isLoading === 'loading' && <Loader />}
      <form onSubmit={handleSubmitLoginForm} autoComplete="off">
        <label>
          Email
          <input type="email" name="email" autoComplete="current-email" />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            autoComplete="current-password"
          />
        </label>
        <button type="submit">Log In</button>
      </form>
    </Wrapper>
  );
};
