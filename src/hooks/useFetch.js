import { useState } from 'react';
import { delayFn } from '../helpers/delayFn.js';

export const useFetch = (callback) => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchFn = async (arg) => {
    try {
      setLoading(true);
      setError('');
      await delayFn();

      const response = await callback(arg);

      return response;
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return [fetchFn, isLoading, error];
};
