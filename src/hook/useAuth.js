import {
  selectIsloggedIn,
  selectUser,
  selectIsRefreshing,
  selectStatus,
} from '../redux/auth/selectors';
import { useSelector } from 'react-redux/es/hooks/useSelector';

export const useAuth = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsloggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoading = useSelector(selectStatus);

  return {
    user,
    isLoggedIn,
    isRefreshing,
    isLoading,
  };
};
