import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from '../../api';

export const MovieDetails = () => {
  const [movie, setMovie] = useState('');
  const { movieId } = useParams();
  console.log(movieId);

  return <div>it`s works</div>;
};
