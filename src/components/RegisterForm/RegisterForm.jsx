import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Wrapper } from './RegisterForm.styled';
import { useAuth } from 'hook/useAuth';
import { Loader } from 'components/Loader/Loader';


export const RegisterForm = () => {
  const dispatch = useDispatch();
   const { isLoading } = useAuth();

  const handleSubmitRegisterForm = evt => {
    evt.preventDefault();

    const form = evt.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <Wrapper>
      {isLoading === 'loading' && <Loader/>}
      <form
        onSubmit={handleSubmitRegisterForm}
        autoComplete="off"
      >
        <label>
          Username
          <input
            type="text"
            name="name"
            autoComplete="current-name"
          />
        </label>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            autoComplete="current-password"
          />
        </label>
        <button type="submit">
          Register
        </button>
      </form>
    </Wrapper>
  );
};
