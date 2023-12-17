import { useDispatch, useSelector } from 'react-redux';
import { Container } from './Filter.styled';
import { setFilter } from 'redux/filtersSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const filters = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterContacts = value => {
    dispatch(setFilter(value.currentTarget.value));
  };

  return (
    <Container>
      <p>Find contacts by name</p>
      <input
        value={filters}
        onChange={handleFilterContacts}
        type="text"
        name="filter"
        placeholder="name search"
      ></input>
    </Container>
  );
};
