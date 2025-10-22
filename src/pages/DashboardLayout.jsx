// src/pages/dashboard/DashboardLayout.jsx
import { getAuth, hasRole } from "../utils/auth";
import { useNavigate } from "react-router-dom";

export default function DashboardLayout() {
  const navigate = useNavigate();
  const auth = getAuth();

  if (!auth) {
    return null;
  }

  if (!hasRole(["Admin"])) {
    return (
      <>
        <div className="fixed inset-0 bg-gray-50 bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-sm w-full mx-4 shadow-lg border border-gray-200 text-center">
            <div className="text-red-600 text-4xl mb-3">🔒</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Akses Ditolak
            </h3>
            <p className="text-gray-700 mb-4">
              Hanya admin yang dapat mengakses halaman dashboard JustPayIt.
            </p>
            <button
              onClick={() => navigate("/")}
              className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition"
            >
              Kembali ke Beranda
            </button>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <p className="text-gray-500">Memuat...</p>
        </div>
      </>
    );
  }

  const weeklyRevenue = 12_450_000;
  const monthlyRevenue = 48_720_000;
  const weeklyOrders = 342;
  const monthlyOrders = 1_287;

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Dashboard JustPayIt
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 text-center">
          <p className="text-sm text-emerald-700 font-medium">
            Pendapatan Minggu Ini
          </p>
          <p className="text-2xl font-bold text-emerald-800 mt-1">
            Rp {weeklyRevenue.toLocaleString("id-ID")}
          </p>
          <p className="text-xs text-emerald-600 mt-1">
            Dari {weeklyOrders} pesanan
          </p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 text-center">
          <p className="text-sm text-blue-700 font-medium">
            Pendapatan Bulan Ini
          </p>
          <p className="text-2xl font-bold text-blue-800 mt-1">
            Rp {monthlyRevenue.toLocaleString("id-ID")}
          </p>
          <p className="text-xs text-blue-600 mt-1">
            Dari {monthlyOrders} pesanan
          </p>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-center">
          <p className="text-sm text-amber-700 font-medium">Rata-rata/Hari</p>
          <p className="text-2xl font-bold text-amber-800 mt-1">
            Rp {(weeklyRevenue / 7).toLocaleString("id-ID")}
          </p>
          <p className="text-xs text-amber-600 mt-1">7 hari terakhir</p>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-5 text-center">
          <p className="text-sm text-purple-700 font-medium">
            Pesanan Hari Ini
          </p>
          <p className="text-2xl font-bold text-purple-800 mt-1">48</p>
          <p className="text-xs text-purple-600 mt-1">+12% dari kemarin</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Ringkasan Aktivitas
        </h2>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-700">Senin</span>
              <span className="font-medium">Rp 1.850.000</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-emerald-600 h-2 rounded-full"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-700">Selasa</span>
              <span className="font-medium">Rp 2.100.000</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-emerald-600 h-2 rounded-full"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-700">Rabu</span>
              <span className="font-medium">Rp 1.920.000</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-emerald-600 h-2 rounded-full"
                style={{ width: "78%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
