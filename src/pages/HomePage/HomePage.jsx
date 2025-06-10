import React, { useEffect, useState } from 'react';
import { API_URL } from '../../constants/index.js';
import { QuestionCardList } from '../../components/QuestionCardList/index.jsx';
import { Loader } from '../../components/Loader/index.jsx';
import { useFetch } from '../../hooks/useFetch.js';

export const HomePage = () => {
  const [questions, setQuestions] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const [getQuestions, isLoading, error] = useFetch(async (url) => {
    const response = await fetch(`${API_URL}/${url}`);
    const questions = await response.json();

    setQuestions(questions);
    return questions;
  });

  useEffect(() => {
    getQuestions('react');
  }, []);

  const onSearchChangeHandler = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <input type="text" value={searchValue} onChange={onSearchChangeHandler} />

      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      <QuestionCardList cards={questions} />
    </>
  );
};
