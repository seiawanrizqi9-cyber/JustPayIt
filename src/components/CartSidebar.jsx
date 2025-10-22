// src/components/CartSidebar.jsx
import { useCart } from '../context/CartContext';

export default function CartSidebar({ isOpen, onClose, onCheckout }) {
  const { cart, updateQuantity } = useCart();

  if (!isOpen) return null; // jangan render jika tertutup

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        onClick={onClose}
      />
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out translate-x-0">
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-900">
              Keranjang ({totalItems})
            </h2>
            <button onClick={onClose} className="p-1 text-gray-500 hover:text-gray-800">
              ✕
            </button>
          </div>

          <div className="flex-grow overflow-y-auto p-4">
            {cart.length === 0 ? (
              <p className="text-gray-500 text-center py-8">Keranjangmu kosong.</p>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-contain rounded border"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/64?text=No+Image';
                      }}
                    />
                    <div className="flex-grow">
                      <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-emerald-600 font-bold">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                    <div className="flex items-center border border-gray-300 rounded">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                      >
                        –
                      </button>
                      <span className="px-2 py-1 text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, +1)}
                        className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {cart.length > 0 && (
            <div className="border-t border-gray-200 p-4 bg-gray-50">
              <div className="flex justify-between mb-3">
                <span className="font-medium">Total:</span>
                <span className="font-bold text-lg text-emerald-600">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <button
                onClick={onCheckout}
                className="w-full py-2.5 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition"
              >
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}