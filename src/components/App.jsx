import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hook/useAuth';
import {PrivateRoute} from './PrivateRoute'
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { Layout } from './Layout/Layout';
import { Loader } from './Loader/Loader';

const InitPage = lazy(() => import('../pages/InitPage.jsx'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ContactPage = lazy(() => import('../pages/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    // <b>Refreshing user...</b>
    <Loader/>
    // сюда спинер 
  ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<InitPage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<ContactPage />} />
              }
            />
          </Route>
        </Routes>
  );
};
