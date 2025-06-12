import { useContext } from 'react';
import { AuthContext } from '../auth/AuthProvider/index.jsx';

export const useAuth = () => {
  return useContext(AuthContext);
};
