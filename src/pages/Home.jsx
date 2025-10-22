// src/pages/Home.jsx
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section — Full-width, centered, with subtle gradient */}
      <section className="bg-gradient-to-br from-emerald-50 to-white rounded-3xl p-6 md:p-12 mb-16 text-center shadow-sm border border-emerald-100">
        <span className="inline-block px-4 py-1 bg-emerald-100 text-emerald-800 text-sm font-medium rounded-full mb-4">
          🚀 Baru saja diluncurkan!
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 max-w-3xl mx-auto leading-tight">
          Belanja Online Mudah & Aman di <span className="text-emerald-600">JustForIt</span>
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          Temukan berbagai kebutuhan harian, fashion, elektronik, hingga perlengkapan rumah dengan harga terbaik dan pengiriman cepat ke seluruh Indonesia.
        </p>
        <Link to="/products">
          <button className="px-8 py-3.5 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            Jelajahi Produk
          </button>
        </Link>
      </section>

      {/* Pencapaian — Stats with icons */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Dipercaya oleh Ribuan Pelanggan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kami terus tumbuh berkat dukungan Anda. Berikut pencapaian terbaru kami.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { value: '50.000+', label: 'Pengguna Aktif', desc: 'Dari seluruh Indonesia' },
            { value: '12', label: 'Negara', desc: 'Pengguna global' },
            { value: '1.200+', label: 'Pesanan/Hari', desc: 'Diproses dengan cepat' }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="text-emerald-600 text-4xl font-bold mb-2">{item.value}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{item.label}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tim Kami — Clean card grid */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Tim Inti Kami</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Di balik setiap pengalaman belanja yang lancar, ada tim berdedikasi yang bekerja keras untuk Anda.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: 'Raka Setiawan', role: 'CEO & Founder' },
            { name: 'Dinda Wulandari', role: 'CTO' },
            { name: 'Budi Santoso', role: 'Head of Product' },
            { name: 'Siti Aminah', role: 'Lead Designer' },
            { name: 'Andi Pratama', role: 'Marketing Manager' },
            { name: 'Lina Marlina', role: 'Customer Support' }
          ].map((person, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-56 bg-gray-100 flex items-center justify-center">
                <img
                  src={`/team/team${i + 1}.jpg`}
                  alt={person.name}
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x224?text=Foto+Tim';
                  }}
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-gray-900">{person.name}</h3>
                <p className="text-emerald-600 font-medium">{person.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fitur Unggulan — Icon + benefit */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Mengapa Memilih Kami?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Pengiriman Bervariasi', desc: 'Pelanggan bisa memilih untuk kiriman Reguler, Express, atupun Cargo dengan kelebihannya masing-masing.' },
            { title: 'Garansi Asli', desc: 'Semua produk 100% original dengan garansi resmi dari brand.' },
            { title: 'Layanan 24/7', desc: 'Tim customer service siap membantu kapan saja via chat atau telepon.' }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-emerald-600 text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{item.title}</h3>
              <p className="text-gray-600 text-center">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}