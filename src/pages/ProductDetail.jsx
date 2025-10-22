// src/pages/ProductDetail.jsx
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { productId } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!productId) {
      setError('ID produk tidak valid');
      setLoading(false);
      return;
    }

    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
        if (!res.ok) throw new Error('Produk tidak ditemukan');
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(err.message || 'Gagal memuat detail produk');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent"></div>
        <p className="mt-4 text-gray-600">Memuat detail produk...</p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-red-600 mb-6">{error || 'Produk tidak ditemukan.'}</p>
        <div className="flex justify-center gap-3">
          <Link
            to="/products"
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300 transition"
          >
            ← Kembali ke Produk
          </Link>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition"
          >
            Muat Ulang
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 max-w-5xl">
      <Link
        to="/products"
        className="text-emerald-600 mb-6 inline-block font-medium hover:underline"
      >
        ← Kembali ke Produk
      </Link>

      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="md:flex">
          <div className="md:w-1/2 p-8 flex items-center justify-center bg-gray-50">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-96 object-contain"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/300?text=Gambar+Tidak+Tersedia';
              }}
            />
          </div>

          <div className="md:w-1/2 p-8">
            <span className="text-sm font-medium text-emerald-600 uppercase">
              {product.category}
            </span>
            <h1 className="text-2xl font-bold text-gray-900 mt-2 mb-4">{product.title}</h1>
            <p className="text-3xl font-bold text-emerald-600 mb-4">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              {product.description}
            </p>
            <button
              onClick={() => addToCart(product)}
              className="w-full py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition shadow-md"
            >
              Tambah ke Keranjang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}