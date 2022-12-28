import { useState } from 'react';
import { Searchform, SearchBtn, SearchInput } from './SearchForm.styled';
import PropTypes from 'prop-types';

export const SearchForm = ({ onSubmit }) => {
  const [serchQuery, setSerchQuery] = useState('');

  const handleChange = ({ target: { value } }) => {
    setSerchQuery(value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (serchQuery.trim() === '') {
      return alert('Please enter name movie');
    }
    onSubmit(serchQuery);
    reset();
  };

  const reset = () => {
    setSerchQuery('');
  };

  return (
    <Searchform onSubmit={handleSubmit}>
      <SearchBtn type="submit"></SearchBtn>
      <SearchInput
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie name"
        onChange={handleChange}
        name="serchQuery"
        value={serchQuery}
      />
    </Searchform>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};