import cls from './ThemeToggler.module.css';
import { useTheme } from '../../hooks/useTheme.js';
import { THEME_STORAGE } from '../../constants/index.js';

export const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  const onChangeHandler = (e) => {
    const isChecked = e.target.checked === true;
    const updatedTheme = isChecked === false ? 'light' : 'dark';

    setTheme(updatedTheme);
    isChecked ? document.body.classList.add('darkLayout') : document.body.classList.remove('darkLayout');

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
