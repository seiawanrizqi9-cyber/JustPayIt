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
    <nav className="bg-white shadow-md border-b border-emerald-100">
      <div className="container mx-auto px-4 py-2 md:px-6 md:py-3 flex items-center justify-between">
        <Link to="/" className="text-xl md:text-2xl font-bold text-emerald-700">
          JustPayIt
        </Link>

        <div className="flex items-center">
          {publicLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="px-3 py-1.5 text-sm md:px-4 md:py-2 md:text-base font-medium text-gray-800 hover:text-emerald-700 transition"
            >
              {link.name}
            </Link>
          ))}

          <button
            onClick={onDashboardClick}
            className="px-3 py-1.5 text-sm md:px-4 md:py-2 md:text-base font-medium text-gray-800 hover:text-emerald-700 transition"
          >
            Dashboard
          </button>

          <button
            onClick={onOpenCart}
            className="px-3 py-1.5 text-lg md:px-4 md:py-2 md:text-xl text-gray-800 hover:text-emerald-700 transition"
            aria-label="Keranjang"
          >
            🛒
          </button>

          {auth?.isAuthenticated ? (
            <div className="ml-2 md:ml-3">
              <ProfileDropdown initial={auth.name.charAt(0).toUpperCase()} />
            </div>
          ) : (
            <button
              onClick={() => navigate('/login')}
              className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-base md:text-lg hover:bg-emerald-200 transition ml-2 md:ml-3"
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