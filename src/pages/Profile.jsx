// src/pages/dashboard/Profile.jsx
import { useState, useEffect } from 'react';
import { getAuth } from '../utils/auth';

export default function Profile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('User');

  useEffect(() => {
    const auth = getAuth();
    if (auth) {
      setName(auth.name);
      setEmail(auth.email);
      setRole(auth.role);
    }
  }, []);

  return (
    <div className="container mx-auto px-4 max-w-2xl">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Profil Pengguna</h2>

      <div className="mb-8">
        <p className="text-gray-700 mb-2">Anda saat ini login sebagai:</p>
        <div className="mt-2">
          {role === 'Admin' ? (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800">
              👑 Admin
            </span>
          ) : (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              👤 User
            </span>
          )}
        </div>
        {role !== 'Admin' && (
          <p className="mt-3 text-sm text-gray-600">
            Hanya pengguna dengan role <strong>Admin</strong> yang memiliki akses penuh ke dashboard JustPayIt.
          </p>
        )}
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Nama Lengkap</label>
            <div className="p-3 bg-gray-50 rounded-lg border">
              {name}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <div className="p-3 bg-gray-50 rounded-lg border">
              {email}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Role</label>
            <div className="p-3 bg-gray-50 rounded-lg">
              <span className="font-medium">
                {role === 'Admin' ? '👑 Admin' : '👤 User'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}