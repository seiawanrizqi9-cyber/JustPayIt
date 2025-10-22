// src/pages/Checkout.jsx
import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const check = () => {
      const shouldOpen = localStorage.getItem('openCheckout') === 'true';
      setIsVisible(shouldOpen);
    };
    check();
    window.addEventListener('storage', check);
    return () => window.removeEventListener('storage', check);
  }, []);

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [shipping, setShipping] = useState('reguler');

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingRates = { reguler: 8000, express: 9000, cargo: 5000 };
  const shippingCost = shippingRates[shipping] || 0;
  const total = subtotal + shippingCost;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !address || !phone) {
      alert('Harap lengkapi data pengiriman.');
      return;
    }
    clearCart();
    localStorage.removeItem('openCheckout');
    setIsVisible(false);
    if (confirm('Pesanan berhasil! Ingin pesan lagi?')) {
      navigate('/products');
    } else {
      navigate('/');
    }
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50" />
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-10 px-4 overflow-y-auto">
        <div className="bg-white rounded-xl shadow-xl w-full max-w-3xl p-6 relative">
          <button
            onClick={() => {
              localStorage.removeItem('openCheckout');
              window.dispatchEvent(new Event('storage'));
            }}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl"
            aria-label="Tutup"
          >
            ✕
          </button>

          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Konfirmasi Pesanan</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-1">Nama Penerima</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Nomor Telepon</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700 mb-1">Alamat Lengkap</label>
                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  rows="3"
                  required
                />
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-900 mb-3">Pilih Opsi Pengiriman</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { id: 'reguler', name: 'Reguler', desc: '3–5 hari', price: 8000 },
                  { id: 'express', name: 'Express', desc: '1–2 hari', price: 9000 },
                  { id: 'cargo', name: 'Cargo', desc: '5–7 hari', price: 5000 },
                ].map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setShipping(option.id)}
                    className={`p-4 border rounded-xl text-left ${
                      shipping === option.id
                        ? 'border-emerald-600 bg-emerald-50'
                        : 'border-gray-200 hover:border-emerald-300'
                    }`}
                  >
                    <div className="font-medium">{option.name}</div>
                    <div className="text-sm text-gray-600 mt-1">{option.desc}</div>
                    <div className="mt-2 font-bold text-emerald-600">
                      Rp{option.price.toLocaleString('id-ID')}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t pt-4">
              <h3 className="font-medium text-gray-900 mb-3">Ringkasan Pesanan</h3>
              <div className="space-y-2 max-h-40 overflow-y-auto pr-2">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>
                      {item.title.length > 30 ? item.title.slice(0, 30) + '...' : item.title} × {item.quantity}
                    </span>
                    <span>Rp{(item.price * item.quantity).toLocaleString('id-ID')}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Total Barang:</span>
                  <span>Rp{subtotal.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Ongkos Kirim:</span>
                  <span>Rp{shippingCost.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-2 border-t">
                  <span>Total Bayar:</span>
                  <span className="text-emerald-600">Rp{total.toLocaleString('id-ID')}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 flex gap-3">
              <button
                type="button"
                onClick={() => {
                  localStorage.removeItem('openCheckout');
                  window.dispatchEvent(new Event('storage'));
                }}
                className="flex-1 py-3 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300 transition"
              >
                Batalkan
              </button>
              <button
                type="submit"
                className="flex-1 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition"
              >
                Pesan Sekarang
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}