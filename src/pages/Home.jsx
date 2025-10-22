// src/pages/Home.jsx
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-white rounded-3xl p-6 md:p-10 mb-16 text-center shadow-sm border border-emerald-100">
        <span className="inline-block px-4 py-1 bg-emerald-100 text-emerald-800 text-sm font-medium rounded-full mb-4">
          🌍 Belanja Global, Bayar Lokal
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 max-w-3xl mx-auto leading-tight">
          <span className="text-emerald-600">JustPayIt</span>: Belanja Cerdas, Bayar Mudah
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          Platform belanja online terpercaya yang menghubungkan Anda dengan produk terbaik dari seluruh dunia — dengan pembayaran aman, pengiriman cepat, dan layanan pelanggan 24/7.
        </p>
        <Link to="/products">
          <button className="px-8 py-3.5 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-md hover:shadow-lg">
            Jelajahi Produk
          </button>
        </Link>
      </section>

      {/* Pencapaian */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Dipercaya oleh Komunitas Global</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { value: '50.000+', label: 'Pengguna Aktif', desc: 'Dari 12 negara' },
            { value: '12', label: 'Negara', desc: 'Di seluruh dunia' },
            { value: '1.200+', label: 'Pesanan/Hari', desc: 'Diproses dalam 24 jam' }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl border border-emerald-100 p-6 text-center shadow-sm hover:shadow-md transition">
              <div className="text-emerald-600 text-3xl font-bold mb-2">{item.value}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.label}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tim Kami */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Tim Inti JustPayIt</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'Raka Setiawan', role: 'CEO & Founder' },
            { name: 'Dinda Wulandari', role: 'CTO' },
            { name: 'Budi Santoso', role: 'Head of Product' },
            { name: 'Siti Aminah', role: 'Lead Designer' },
            { name: 'Andi Pratama', role: 'Marketing Manager' },
            { name: 'Lina Marlina', role: 'Customer Support' }
          ].map((person, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition">
              <div className="h-48 bg-gray-50 flex items-center justify-center">
                <img
                  src={`/team/team${i + 1}.jpg`}
                  alt={person.name}
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x224?text=Foto+Tim';
                  }}
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-bold text-gray-900">{person.name}</h3>
                <p className="text-emerald-600 font-medium">{person.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fitur Unggulan */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Mengapa Memilih JustPayIt?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Pengiriman Bervariasi', desc: 'Pilih Reguler, Express, atau Cargo sesuai kebutuhan.' },
            { title: 'Garansi Asli', desc: 'Semua produk 100% original dengan garansi resmi.' },
            { title: 'Layanan 24/7', desc: 'Customer service siap membantu kapan saja.' }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl border border-emerald-100 p-6 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <span className="text-emerald-600 text-xl">✓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{item.title}</h3>
              <p className="text-gray-600 text-center text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}