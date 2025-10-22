// src/pages/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../utils/auth';

export default function Login() {
  const [role, setRole] = useState('User');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (role === 'Admin') {
      if (password !== 'Admin1234#') {
        setError('Password admin salah. Harus: Admin1234#');
        return;
      }
    }

    login(role, name || 'Pengguna', email || 'user@example.com');

    // ✅ HANYA SETELAH LOGIN BERHASIL
    const shouldOpenCheckout = localStorage.getItem('shouldOpenCheckoutAfterLogin');
    if (shouldOpenCheckout) {
      localStorage.removeItem('shouldOpenCheckoutAfterLogin');
      localStorage.setItem('openCheckout', 'true'); // ✅ Buka checkout SEKARANG
    }

    navigate('/');
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-md">
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">Login</h1>

        {error && <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Login Sebagai</label>
            <div className="flex space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="role"
                  checked={role === 'User'}
                  onChange={() => setRole('User')}
                  className="mr-2"
                />
                <span>User</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="role"
                  checked={role === 'Admin'}
                  onChange={() => setRole('Admin')}
                  className="mr-2"
                />
                <span>Admin</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Nama Lengkap</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="Nama Anda"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="email@example.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">
              Password {role === 'Admin' && '(Harus: Admin1234#)'}
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition shadow-md"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600 text-sm">
          Belum punya akun? Login sebagai User bebas!
        </p>
      </div>
    </div>
  );
}