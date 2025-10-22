// src/components/ProfileDropdown.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout, getAuth } from '../utils/auth';

export default function ProfileDropdown({ initial }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  const handleProfile = () => {
    setIsOpen(false);
    navigate('/profile');
  };

  const handleLogout = () => {
    setIsOpen(false);
    logout();
    navigate('/');
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold hover:bg-emerald-200 transition"
        aria-label="Profile"
      >
        {initial}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
          <div className="p-3 border-b border-gray-100">
            <p className="text-sm font-medium text-gray-900">{auth?.name}</p>
            <p className="text-xs text-gray-500">{auth?.email}</p>
          </div>
          <button
            onClick={handleProfile}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
          >
            Profile
          </button>
          <hr className="my-1" />
          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}