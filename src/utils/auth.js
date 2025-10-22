// src/utils/auth.js

export const login = (role, name, email) => {
  const data = {
    isAuthenticated: true,
    role,
    name,
    email,
    token: 'dummy-jwt-token-' + Date.now(),
  };
  localStorage.setItem('auth', JSON.stringify(data));
};

export const logout = () => {
  localStorage.removeItem('auth');
};

export const getAuth = () => {
  const data = localStorage.getItem('auth');
  return data ? JSON.parse(data) : null;
};

export const isAuthenticated = () => {
  const auth = getAuth();
  return auth?.isAuthenticated === true;
};

export const hasRole = (allowedRoles) => {
  const auth = getAuth();
  return auth && allowedRoles.includes(auth.role);
};