// src/components/Navbar.jsx
import { Link, useNavigate } from 'react-router-dom';
import { getAuth } from '../utils/auth';
import ProfileDropdown from './ProfileDropdown';

export default function Navbar({ onOpenCart, onDashboardClick }) {
  const auth = getAuth();
  const navigate = useNavigate();

  const publicLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-emerald-700">
          JustPayIt
        </Link>

        <div className="flex items-center">
          {publicLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600 transition"
            >
              {link.name}
            </Link>
          ))}

          <button
            onClick={onDashboardClick}
            className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600 transition"
          >
            Dashboard
          </button>

          <button
            onClick={onOpenCart}
            className="px-3 py-2 text-lg text-gray-700 hover:text-emerald-600 transition"
            aria-label="Keranjang"
          >
            🛒
          </button>

          {auth?.isAuthenticated ? (
            <div className="ml-1">
              <ProfileDropdown initial={auth.name.charAt(0).toUpperCase()} />
            </div>
          ) : (
            <button
              onClick={() => navigate('/login')}
              className="w-10 h-10 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center text-lg hover:bg-gray-200 transition ml-1"
              aria-label="Login"
            >
              👤
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}