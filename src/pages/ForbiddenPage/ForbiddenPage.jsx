import React, { useEffect } from 'react';
import cls from './ForbiddenPage.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth.js';

export const ForbiddenPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { isAuth } = useAuth();

  useEffect(() => {
    const fromPage = location.state?.from || '/';

    isAuth && navigate(fromPage, { replace: true });
  }, [isAuth]);

  return <h2 className={cls.title}>Page if forbidden!</h2>;
};
