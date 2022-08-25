import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Alert } from 'antd';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchMovieAsync, selectMovie } from '../redux/movieSlice';
import { AppLayout } from './AppLayout';

const CardWrapper = styled.div`
  padding: 0 0 32px;
  margin: 48px auto 0;
  max-height: 300px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

const CardHeader = styled.header`
  padding: 10px 0px;
`;

const CardHeading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const CardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
  color: #db7093;
`;

const SearchContainer = styled.div`
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  width: 70%;
  height: 100%;
  font-size: 16px;
  padding: 20px;
  background-color: #eb2f960d;
  border-radius: 5px;
  margin-right: 5px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
`;

const SearchHeader = styled.h1`
  font-size: 1.5rem;
  color: palevioletred;
`;

const NoMovie = styled(Alert)`
  max-width: 400px;
`;

const SearchButton = styled.button`
  height: 100%;
  background-color: #eb2f960d;
  border-radius: 5px;
  padding: 4px 10px;
  cursor: pointer;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
  }
`;

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
    <AppLayout>
      <SearchHeader>Search for your favorite movie</SearchHeader>
      <SearchContainer>
        <SearchInput
          type='text'
          onChange={(e) => setSearchParam(e.target.value)}
        />
        <SearchButton onClick={() => handleSearch()}>search</SearchButton>
      </SearchContainer>
      {movie.title !== '' ? (
        <CardWrapper>
          <Link to={`movie/${movie.title}`}>
            <CardHeader>
              <CardHeading>{movie.title}</CardHeading>
            </CardHeader>

            <CardBody>{movie.opening_crawl.substring(0, 200) + '...'}</CardBody>
          </Link>
        </CardWrapper>
      ) : (
        // <NoMovie>No searched movie yet</NoMovie>
        <NoMovie
          message='No searched movie yet'
          description='Please enter the title of your favourite movie in the input field above'
          type='error'
        />
      )}
    </AppLayout>
  );
};
