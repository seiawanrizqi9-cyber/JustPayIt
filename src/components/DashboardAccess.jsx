// src/components/DashboardAccessDeniedModal.jsx
export default function DashboardAccess({ onClose }) {
  return (
    <>
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50" />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-lg max-w-md w-full text-center">
          <p className="text-gray-800 mb-6">Selain admin dilarang masuk.</p>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition"
          >
            Mengerti
          </button>
        </div>
      </div>
    </>
  );
}