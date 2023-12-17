import { ContactForm } from '../ContactsForm/ContactsForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../List/List';
import { Loader } from 'components/Loader/Loader';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';
import { Container, ErrorMsg, Wrapper } from './Contacts.styled';

export const SectionFormContacts = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Wrapper>
        <div>
          <ContactForm />

          <Filter />
        </div>
        <div>
          <ContactList />
        </div>
      </Wrapper>
      {isLoading && !error && <Loader />}
      {error !== null && (
        <ErrorMsg>
          Sorry, something went wrong... Try reloading the page!
        </ErrorMsg>
      )}
    </Container>
  );
};
