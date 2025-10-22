// src/components/LoginRequiredModal.jsx
export default function LoginModal({ onLogin, onCancel }) {
  return (
    <>
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50" />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-lg max-w-md w-full text-center">
          <p className="text-gray-800 mb-6">
            Anda belum resmi menjadi user, silahkan login terlebih dahulu.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={onLogin}
              className="px-4 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition"
            >
              Login Dahulu
            </button>
            <button
              onClick={onCancel}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300 transition"
            >
              Batalkan
            </button>
          </div>
        </div>
      </div>
    </>
  );
}