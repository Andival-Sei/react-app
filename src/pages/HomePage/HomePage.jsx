import React from 'react';
import { QuestionCard } from '../../components/QuestionCard/index.jsx';

const cards = [
  {
    id: 1,
    question: 'Что такое React?',
    answer: 'React - это библиотека для создания пользовательских интерфейсов.',
    description:
      'Reac - это JavaScript-библиотека, разработтная Facebook, которая используется для построения UI с компонентным подходом. React позволяет вам создавать пользовательские интерфейсы из отдельных частей, называемых компонентами.',
    resources: ['https://react.dev', 'https://react.dev/reference/react'],
    level: 1,
    completed: false,
    editDate: '03.02.2025, 19:49',
  },
  {
    id: 1,
    question: 'Что такое React111?',
    answer: 'React - это библиотека для создания пользовательских интерфейсов.',
    description:
      'Reac - это JavaScript-библиотека, разработтная Facebook, которая используется для построения UI с компонентным подходом. React позволяет вам создавать пользовательские интерфейсы из отдельных частей, называемых компонентами.',
    resources: ['https://react.dev', 'https://react.dev/reference/react'],
    level: 1,
    completed: false,
    editDate: '03.02.2025, 19:49',
  },
  {
    id: 1,
    question: 'Что такое React?',
    answer: 'React - это библиотека для создания пользовательских интерфейсов.',
    description:
      'Reac - это JavaScript-библиотека, разработтная Facebook, которая используется для построения UI с компонентным подходом. React позволяет вам создавать пользовательские интерфейсы из отдельных частей, называемых компонентами.',
    resources: ['https://react.dev', 'https://react.dev/reference/react'],
    level: 1,
    completed: false,
    editDate: '03.02.2025, 19:49',
  },
];

export const HomePage = () => {
  return (
    <>
      {cards.map((card, index) => {
        return <QuestionCard card={card} key={index} />;
      })}
    </>
  );
};
