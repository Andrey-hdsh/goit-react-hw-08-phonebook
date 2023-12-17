import { NavLink } from 'react-router-dom';
import { AuthNavigationWrapper } from './AuthNav.styled';
export const AuthNav = () => {

  
  return (
    <AuthNavigationWrapper>
      <NavLink to="/register">
        Register
      </NavLink>
      <NavLink to="/login">
        Log In
      </NavLink>
    </AuthNavigationWrapper>
  );
};