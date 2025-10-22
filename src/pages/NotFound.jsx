import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="text-6xl font-bold text-gray-300 mb-4">404</div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Halaman Tidak Ditemukan</h1>
      <p className="text-gray-600 mb-6 max-w-md mx-auto">
        Maaf, halaman yang kamu cari tidak tersedia. Mungkin sudah dipindahkan atau dihapus.
      </p>
      <Link
        to="/"
        className="inline-block px-5 py-2.5 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition shadow-md"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}