import { useState } from 'react';

export const SearchForm = ({ getQuery, value }) => {
  const [query, setQuery] = useState(value || '');

  function onSubmit(e) {
    e.preventDefault();
    const value = e.currentTarget.elements.query.value;
    if (value.trim() === '') {
      alert('Type something!');
      return;
    }
    getQuery(value.trim());
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="query"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};
