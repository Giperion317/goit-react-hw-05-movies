import { useState } from 'react';
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
    <form onSubmit={handleSubmit}>
      <button type="submit">Search</button>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie name"
        onChange={handleChange}
        name="serchQuery"
        value={serchQuery}
      />
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};