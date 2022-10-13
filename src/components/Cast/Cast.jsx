import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from '../../api';
import noPhoto from './noPhoto.png';

export const Cast = () => {
  const [castInfo, setCastInfo] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function getCastInfo() {
      try {
        const data = await fetchCast(movieId);
        setCastInfo(data);
      } catch (e) {
        setError(e);
      }
    }

    getCastInfo();

    return () => {
      setError(null);
    };
  }, [movieId]);

  if (!castInfo) return;

  return (
    <>
      {error && <p>Something goes wrong. {error.message}</p>}

      <ul>
        {castInfo.map(({ name, profile_path, character, id }) => {
          return (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/original${profile_path}`
                    : noPhoto
                }
                alt={name}
                width="100"
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
