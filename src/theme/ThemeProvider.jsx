import React, { createContext, useEffect, useLayoutEffect, useState } from 'react';
import { THEME_STORAGE } from '../constants/index.js';

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  // Инициализируем тему из localStorage или системных настроек
  const initialTheme =
    localStorage.getItem(THEME_STORAGE) ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  const [theme, setTheme] = useState(initialTheme);

  // Этот эффект применяет классы к body при изменении темы
  useEffect(() => {
    // Применяем соответствующие стили
    if (theme === 'dark') {
      document.body.classList.add('darkLayout');
    } else {
      document.body.classList.remove('darkLayout');
    }

    // Сохраняем выбор пользователя в localStorage
    localStorage.setItem(THEME_STORAGE, theme);
  }, [theme]); // Зависимость от theme, чтобы эффект срабатывал при изменении темы

  // Слушаем изменения системной темы
  useLayoutEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // Этот обработчик будет вызываться только при изменении системной темы
    const handleSystemThemeChange = (e) => {
      // Можно добавить логику, чтобы предлагать пользователю сменить тему
      // или автоматически менять, если пользователь не выбирал тему вручную
      console.log('System theme changed:', e.matches ? 'dark' : 'light');
      // Если хотите автоматически менять тему при изменении системной:
      // if (!localStorage.getItem(THEME_STORAGE)) {
      //   setTheme(e.matches ? 'dark' : 'light');
      // }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, []);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
