import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchMovieAsync, selectMovie } from '../redux/movieSlice';

export const MovieDetail = () => {
  const params = useParams();
  const movieName: string = params.name!;
  const movie = useAppSelector(selectMovie);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovieAsync(movieName));
  }, [movieName, dispatch]);

  return (
    <div>
      <div>
        <Link to='/'>go back home</Link>
      </div>
      <h1>Movie detail page</h1>
      <div>Name: {movie && movie.title}</div>
      <div>director: {movie && movie.director}</div>
      <div>Episode: {movie && movie.episode_id}</div>
      <div>openingCrawl: {movie && movie.opening_crawl}</div>
      <div>ReleaseDate: {movie && movie.release_date}</div>
      <div>Created: {movie && movie.created}</div>
      <div>Edited: {movie && movie.edited}</div>
      <div>Url: {movie && movie.url}</div>
    </div>
  );
};
