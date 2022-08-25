import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchMovieAsync, selectMovie } from '../redux/movieSlice';

export const Home = () => {
  const movie = useAppSelector(selectMovie);
  const dispatch = useAppDispatch();
  const [searchParam, setSearchParam] = useState<string>('');

  const handleSearch = () => {
    if (!searchParam) {
      alert('Kindly input the name');
      return;
    }
    dispatch(fetchMovieAsync(searchParam));
  };

  console.log('mmmmmm', movie);

  return (
    <div>
      <h1>Home Page</h1>
      <input type='text' onChange={(e) => setSearchParam(e.target.value)} />
      <button onClick={() => handleSearch()}>search</button>
      {movie && (
        <div>
          <Link to={`movie/${movie.title}`}>{movie.title}</Link>
        </div>
      )}
    </div>
  );
};
