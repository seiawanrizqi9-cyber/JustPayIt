// src/pages/About.jsx
export default function About() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-6xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Tentang JustPayIt</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Misi kami sederhana: membuat belanja online menjadi pengalaman yang aman, cepat, dan menyenangkan untuk semua orang.
        </p>
      </div>

      {/* Section 1: Pendiri — Gambar kiri */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <div className="md:w-64 flex-shrink-0">
          <img
            src="/store/founders.jpg"
            alt="Raka Setiawan & Dinda Wulandari - Pendiri JustPayIt"
            className="w-full h-80 object-cover rounded-2xl shadow-sm border border-gray-100"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/256x320?text=Pendiri+JustPayIt';
            }}
          />
        </div>
        <div className="md:w-2/3">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Didirikan dengan Visi yang Jelas</h2>
          <p className="text-gray-700 leading-relaxed">
            JustPayIt didirikan pada tahun 2021 oleh <strong>Raka Setiawan</strong> dan <strong>Dinda Wulandari</strong> 
            dengan visi menciptakan platform belanja online yang mengutamakan kepercayaan, kenyamanan, dan kecepatan transaksi.
            Berawal dari sebuah ide sederhana di kafe Bandung, kini kami melayani puluhan ribu pelanggan di seluruh dunia.
          </p>
        </div>
      </div>

      {/* Section 2: Gudang — Gambar kanan */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-16">
        <div className="md:w-64 flex-shrink-0">
          <img
            src="/store/warehouse.jpg"
            alt="Pusat Logistik JustPayIt"
            className="w-full h-80 object-cover rounded-2xl shadow-sm border border-gray-100"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/256x320?text=Gudang+Logistik';
            }}
          />
        </div>
        <div className="md:w-2/3">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Logistik Canggih, Pengiriman Cepat</h2>
          <p className="text-gray-700 leading-relaxed">
            Kami mengoperasikan pusat logistik modern yang mampu memproses lebih dari <strong>1.200 pesanan per hari</strong>. 
            Sistem kami memastikan setiap paket dikemas dengan aman dan dikirim tepat waktu, 
            dengan pelacakan real-time yang bisa Anda pantau kapan saja.
          </p>
        </div>
      </div>

      {/* Section 3: Tim — Gambar kiri */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-64 flex-shrink-0">
          <img
            src="/store/team.jpg"
            alt="Tim JustPayIt"
            className="w-full h-80 object-cover rounded-2xl shadow-sm border border-gray-100"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/256x320?text=Tim+Profesional';
            }}
          />
        </div>
        <div className="md:w-2/3">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tim yang Berdedikasi</h2>
          <p className="text-gray-700 leading-relaxed">
            Di balik JustPayIt, ada lebih dari <strong>30 profesional</strong> di bidang teknologi, layanan pelanggan, 
            dan logistik. Kami bekerja setiap hari untuk memastikan pengalaman belanja Anda selalu lancar, 
            aman, dan memuaskan — dengan tingkat kepuasan pelanggan <strong>4.9/5.0</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}