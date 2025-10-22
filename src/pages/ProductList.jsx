// src/pages/ProductList.jsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ProductsList() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch('https://fakestoreapi.com/products');
        if (!res.ok) throw new Error('Gagal memuat produk');
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err.message || 'Terjadi kesalahan jaringan');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent"></div>
        <p className="mt-4 text-gray-600">Memuat produk...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-red-600 mb-6">Error: {error}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition shadow-md"
        >
          Muat Ulang
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">Daftar Produk</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <Link to={`/products/${product.id}`} className="block">
              <div className="h-48 bg-gray-100 flex items-center justify-center p-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-contain h-full"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/150?text=No+Image';
                  }}
                />
              </div>
              <div className="p-4">
                <span className="text-xs font-medium text-emerald-600 uppercase">
                  {product.category}
                </span>
                <h3 className="font-semibold text-gray-900 mt-1 line-clamp-2 text-sm">
                  {product.title}
                </h3>
                <p className="text-lg font-bold text-emerald-600 mt-2">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </Link>
            <div className="px-4 pb-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(product);
                  // Notifikasi lokal
                  const notif = document.createElement('div');
                  notif.innerText = 'Barang ditambahkan!';
                  notif.className = 'fixed bottom-4 right-4 bg-emerald-100 text-emerald-800 px-4 py-2 rounded shadow animate-fadeInOut z-50';
                  document.body.appendChild(notif);
                  setTimeout(() => notif.remove(), 2000);
                }}
                className="w-full py-1.5 text-xs bg-emerald-100 text-emerald-800 rounded hover:bg-emerald-200 transition font-medium"
              >
                + Tambah ke Keranjang
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}