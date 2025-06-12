import { useContext } from 'react';
import { AuthContext } from '../auth/AuthProvider/imdex.jsx';

export const useAuth = () => {
  return useContext(AuthContext);
};
