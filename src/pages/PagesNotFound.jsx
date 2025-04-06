import { Link } from 'react-router-dom';

function PagesNotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-4">
      <h1 className="text-6xl font-bold text-primary mb-4 text-black">404</h1>
      <h2 className="text-2xl font-semibold mb-2 text-black">Oops! Halaman tidak ditemukan</h2>
      <p className="mb-6 text-gray-600">
        Maaf, halaman yang kamu cari tidak tersedia.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-primary text-white rounded-full hover:bg-opacity-90 transition duration-300"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}

export default PagesNotFound;
