import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export const SearchForm = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  function onChange(e) {
    const userQuery = e.target.value;
    const param = `query=${userQuery.trim()}`;
    if (param) {
      setSearchParams(param);
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="query" value={query} onChange={onChange} />
      <button type="submit">Search</button>
    </form>
  );
};
