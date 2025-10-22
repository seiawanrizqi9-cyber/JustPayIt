import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-50 to-white rounded-2xl p-8 md:p-12 mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Belanja Online Mudah & Aman di TokoSerbaguna!
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
          Temukan berbagai kebutuhan harian, fashion, elektronik, hingga perlengkapan rumah 
          dengan harga terbaik dan pengiriman cepat ke seluruh Indonesia.
        </p>
        <Link to="/products">
          <button className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition shadow-md">
            Jelajahi Produk
          </button>
        </Link>
      </section>

      {/* Fitur Unggulan */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Mengapa Memilih Kami?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Pengiriman Cepat', desc: 'Barang sampai dalam 1-3 hari kerja untuk wilayah Jabodetabek.' },
            { title: 'Garansi Asli', desc: 'Semua produk 100% original dengan garansi resmi dari brand.' },
            { title: 'Layanan 24/7', desc: 'Tim customer service siap membantu kapan saja via chat atau telepon.' }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-emerald-600 font-bold text-lg">✓</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}