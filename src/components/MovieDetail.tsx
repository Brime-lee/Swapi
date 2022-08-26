import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchMovieAsync, selectMovie } from '../redux/movieSlice';
import { AppLayout } from './AppLayout';

const HomeLink = styled(Link)`
  display: inline-block;
  font-size: 12px;
  text-decoration: none;
  color: #aaa;
  margin-bottom: 10px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  transition: color 0.25s ease-in;

  &:hover {
    color: #777;
  }
`;

const MainTitle = styled.h1`
  color: palevioletred;
  margin-bottom: 10px;
`;

const Typography = styled.p`
  margin-bottom: 10px;
`;

export const MovieDetail = () => {
  const params = useParams();
  const movieName: string = params.name!;
  const movie = useAppSelector(selectMovie);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovieAsync(movieName));
  }, [movieName, dispatch]);

  return (
    <AppLayout>
      <div>
        <HomeLink to='/'>go back home</HomeLink>
      </div>
      <MainTitle>What to know about: {movie && movie.title}</MainTitle>
      <Typography>
        <strong>Name</strong>: {movie && movie.title}
      </Typography>
      <Typography>
        <strong>Director</strong>: {movie && movie.director}
      </Typography>
      <Typography>
        <strong>Episode</strong>: {movie && movie.episode_id}
      </Typography>
      <Typography>
        <strong>Movie description</strong>: {movie && movie.opening_crawl}
      </Typography>
      <Typography>
        <strong>Release date</strong>: {movie && movie.release_date}
      </Typography>
    </AppLayout>
  );
};
