import { AuthNav } from 'components/AuthNav/AuthNav';
import { MainNav } from 'components/MainNav/MainNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hook/useAuth';
import { Header, Navigation } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Navigation>
        <MainNav />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Navigation>
    </Header>
  );
};
