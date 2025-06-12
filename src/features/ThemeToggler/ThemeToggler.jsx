import cls from './ThemeToggler.module.css';
import { useTheme } from '../../hooks/useTheme.js';
import { THEME_STORAGE } from '../../constants/index.js';

export const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  const onChangeHandler = (e) => {
    const updatedTheme = e.target.checked === false ? 'light' : 'dark';
    setTheme(updatedTheme);
    localStorage.setItem(THEME_STORAGE, updatedTheme);
  };

  return (
    <label className={cls.switch}>
      <input type="checkbox" onChange={onChangeHandler} checked={theme === 'dark'} />
      <span className={cls.slider}></span>
      <span className={cls.clouds_stars}></span>
    </label>
  );
};
