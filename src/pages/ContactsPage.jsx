import { SectionFormContacts } from 'components/Contacts/Contact';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';

const ContactPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return <SectionFormContacts />;
};

export default ContactPage;
