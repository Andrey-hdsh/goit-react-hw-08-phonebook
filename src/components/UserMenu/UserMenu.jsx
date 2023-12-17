import { useAuth } from 'hook/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Wrapper } from './UserMenu.styled';
import { Loader } from 'components/Loader/Loader';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user, isLoading } = useAuth();

  const handleClickLogout = () => {
    dispatch(logOut());
  };

  return (
    <Wrapper>
      {isLoading === 'loading' && <Loader />}
      <p> Welcome, {user.name}</p>
      <button type="button" onClick={handleClickLogout}>
        Logout
      </button>
    </Wrapper>
  );
};
