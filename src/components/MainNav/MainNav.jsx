import { NavLink } from 'react-router-dom';
import { useAuth } from 'hook/useAuth';

export const MainNav = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
<div>
        <NavLink to="/" style={{marginRight: '20px'}}>
          Home
        </NavLink>
        {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
</div>
    </>
  );
};
