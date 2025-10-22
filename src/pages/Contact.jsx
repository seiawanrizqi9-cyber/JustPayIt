export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Pesan Anda telah terkirim! Tim kami akan segera menghubungi Anda.');
    e.target.reset();
  };

  return (
    <div className="container mx-auto px-4 max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Hubungi Kami</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Form */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Kirim Pesan</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Nama Lengkap</label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Pesan</label>
              <textarea
                rows="4"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2.5 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition"
            >
              Kirim Pesan
            </button>
          </form>
        </div>

        {/* Info Kontak */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Informasi Kontak</h2>
          <div className="space-y-4">
            <div>
              <p className="font-medium text-gray-900">📞 Telepon</p>
              <p className="text-gray-600">(022) 8765-4321</p>
            </div>
            <div>
              <p className="font-medium text-gray-900">✉️ Email</p>
              <p className="text-gray-600">cs@tokosegar.id</p>
            </div>
            <div>
              <p className="font-medium text-gray-900">📍 Alamat</p>
              <p className="text-gray-600">
                Jl. Teknologi No. 123<br />
                Bandung, Jawa Barat 40132<br />
                Indonesia
              </p>
            </div>
            <div>
              <p className="font-medium text-gray-900">🕒 Jam Operasional</p>
              <p className="text-gray-600">Senin–Minggu, 08.00–21.00 WIB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}