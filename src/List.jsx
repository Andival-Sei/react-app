import React from 'react';

const items = [
  {
    task: 'Выучить Реакт',
    icon: '😶‍🌫️',
    isCompleted: true,
  },
  {
    task: 'Закрепить JavaScript',
    icon: '😶‍🌫️',
    isCompleted: true,
  },
  {
    task: 'Не забивать на английский',
    icon: '😶‍🌫️',
    isCompleted: false,
  },
];

const List = () => {
  return (
    <div>
      {items.map((item, index) => {
        return (
          <section key={index} className={item.isCompleted ? 'completed' : ''}>
            <span>{item.icon}</span>
            <h4>{item.task}</h4>
          </section>
        );
      })}
    </div>
  );
};

export default List;
