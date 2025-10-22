// src/components/PrivateAdminRoute.jsx
import { Navigate } from 'react-router-dom';

export default function PrivateAdmin({ children }) {
  const auth = JSON.parse(localStorage.getItem('auth'));

  if (!auth?.isAuthenticated || auth.role !== 'Admin') {
    // Redirect ke Home tanpa perlu useLocation
    return <Navigate to="/" replace />;
  }

  return children;
}