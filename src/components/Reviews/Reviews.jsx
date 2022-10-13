import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../../api';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function getReviews() {
      try {
        const data = await fetchReviews(movieId);

        if (data.results.length === 0) {
          throw new Error('Oooops there are no reviews yet =(');
        }
        console.log(data.results);
        setReviews(data.results);
      } catch (e) {
        setError(e);
      }
    }

    getReviews();

    return () => {
      setError(null);
    };
  }, [movieId]);

  if (!reviews) return;

  return (
    <>
      {error && <p>{error.message}</p>}

      <ul>
        {reviews.map(({ author, content, id }) => {
          return (
            <li key={id}>
              <b>Author: {author}</b>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};