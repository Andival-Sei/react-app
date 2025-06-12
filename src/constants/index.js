// export const API_URL = 'http://localhost:3001';

export const API_URL = process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:3001';

export const AUTH_STORAGE = 'reactCardLogin';
export const THEME_STORAGE = 'reactCardTheme';
