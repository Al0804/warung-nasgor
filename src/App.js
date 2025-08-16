import React, { useState } from "react";
import {
  Menu,
  X,
  ShoppingCart,
  Phone,
  Mail,
  MapPin,
  CreditCard,
} from "lucide-react";

// Data menu nasi goreng
const menuItems = [
  {
    id: 1,
    name: "Nasi Goreng Spesial",
    price: 25000,
    description: "Nasi goreng dengan telur, ayam, dan sayuran segar",
    image: "/images/nasgor-spesial.jpg",
  },
  {
    id: 2,
    name: "Nasi Goreng Seafood",
    price: 35000,
    description: "Nasi goreng dengan udang, cumi, dan ikan segar",
    image: "/images/nasgor-seafood.jpg",
  },
  {
    id: 3,
    name: "Nasi Goreng Ayam",
    price: 22000,
    description: "Nasi goreng dengan potongan ayam yang lezat",
    image: "/images/nasgor-ayam.jpg",
  },
  {
    id: 4,
    name: "Nasi Goreng Vegetarian",
    price: 20000,
    description: "Nasi goreng dengan sayuran organik tanpa daging",
    image: "/images/nasgor-vegetarian.jpg",
  },
];

function WarungNasgor() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  const handleOrder = (item) => {
    setSelectedItem(item);
    setCurrentPage("checkout");
    setQuantity(1);
    setPaymentMethod("");
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };

  // Phone Mockup Component
  const PhoneMockup = ({ children, className = "" }) => (
    <div className={`relative ${className}`}>
      {/* Phone Frame */}
      <div className="relative bg-gray-900 rounded-3xl p-2 shadow-2xl">
        {/* Screen */}
        <div className="bg-white rounded-2xl overflow-hidden relative">
          {/* Status Bar */}
          <div className="bg-gray-100 px-4 py-2 flex justify-between items-center text-xs text-gray-600">
            <span>9:41</span>
            <div className="flex items-center space-x-1">
              <div className="w-4 h-2 border border-gray-400 rounded-sm">
                <div className="w-3 h-1 bg-green-500 rounded-sm"></div>
              </div>
              <div className="flex space-x-1">
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
              </div>
            </div>
          </div>
          {/* Content */}
          <div className="h-80 md:h-96 overflow-hidden">{children}</div>
        </div>
        {/* Home Indicator */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full"></div>
      </div>
    </div>
  );

  const Header = () => (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-orange-600">Warung Nasgor</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <button
            onClick={() => navigateTo("home")}
            className={`hover:text-orange-600 transition-colors ${
              currentPage === "home"
                ? "text-orange-600 font-semibold"
                : "text-gray-700"
            }`}
          >
            Home
          </button>
          <button
            onClick={() => navigateTo("about")}
            className={`hover:text-orange-600 transition-colors ${
              currentPage === "about"
                ? "text-orange-600 font-semibold"
                : "text-gray-700"
            }`}
          >
            About
          </button>
          <button
            onClick={() => navigateTo("pemesanan")}
            className={`hover:text-orange-600 transition-colors ${
              currentPage === "pemesanan"
                ? "text-orange-600 font-semibold"
                : "text-gray-700"
            }`}
          >
            Pemesanan
          </button>
          <button
            onClick={() => navigateTo("contact")}
            className={`hover:text-orange-600 transition-colors ${
              currentPage === "contact"
                ? "text-orange-600 font-semibold"
                : "text-gray-700"
            }`}
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
            <div className="py-2">
              <button
                onClick={() => navigateTo("home")}
                className="block w-full text-left px-4 py-2 hover:bg-orange-50"
              >
                Home
              </button>
              <button
                onClick={() => navigateTo("about")}
                className="block w-full text-left px-4 py-2 hover:bg-orange-50"
              >
                About
              </button>
              <button
                onClick={() => navigateTo("pemesanan")}
                className="block w-full text-left px-4 py-2 hover:bg-orange-50"
              >
                Pemesanan
              </button>
              <button
                onClick={() => navigateTo("contact")}
                className="block w-full text-left px-4 py-2 hover:bg-orange-50"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );

  const HomePage = () => (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight">
                WARUNG
              </h1>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-yellow-300">
                NASGOR
              </h2>
              <p className="text-xl md:text-2xl mb-8 font-light">
                Nasi Goreng Terenak di Kota
              </p>
              <button
                onClick={() => navigateTo("pemesanan")}
                className="bg-yellow-400 text-gray-800 px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                Pesan Sekarang
              </button>
            </div>

            <div className="flex justify-center">
              <PhoneMockup className="w-64 md:w-72 transform rotate-3">
                <div className="bg-gradient-to-b from-orange-400 to-red-400 h-full p-4 text-white">
                  <div className="text-center">
                    <h3 className="text-lg font-bold mb-2">Warung Nasgor</h3>
                    <p className="text-sm mb-4">
                      Order Nasi Goreng Favorite Anda
                    </p>
                    <div className="bg-white bg-opacity-20 rounded-lg p-3 mb-4">
                      {/* ganti kotak kosong jadi gambar */}
                      <img
                        src="/images/Nasi-Goreng-Indonesian-Fried-Rice-SQ.jpg" // kalau gambar ada di public/images/
                        alt="Nasi Goreng Spesial"
                        className="h-24 w-full object-cover rounded mb-2"
                      />
                      <p className="text-xs">Nasi Goreng</p>
                      <p className="text-sm font-bold">Rp 20.000</p>
                    </div>
                    <button className="bg-yellow-400 text-gray-800 px-4 py-2 rounded text-sm font-semibold">
                      Pesan Sekarang
                    </button>
                  </div>
                </div>
              </PhoneMockup>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8 text-gray-800">
            Mengapa Pilih Warung Nasgor?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4 text-orange-600">
                Bahan Berkualitas
              </h4>
              <p className="text-gray-600">
                Menggunakan beras premium dan bahan-bahan segar pilihan
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4 text-orange-600">
                Rasa Autentik
              </h4>
              <p className="text-gray-600">
                Cita rasa nasi goreng yang autentik dan menggugah selera
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4 text-orange-600">
                Harga Terjangkau
              </h4>
              <p className="text-gray-600">Nikmat di lidah, ramah di kantong</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const AboutPage = () => (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-400 to-red-400 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Tentang Warung Nasgor
              </h1>
              <p className="text-lg opacity-90">
                Cerita di balik kelezatan nasi goreng terbaik di kota
              </p>
            </div>

            <div className="flex justify-center">
              <PhoneMockup className="w-64 md:w-72">
                <div className="bg-gray-50 h-full p-4">
                  <div className="text-center">
                    <div className="bg-orange-100 rounded-lg p-4 mb-4">
                      <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <span className="text-white font-bold text-xl">WN</span>
                      </div>
                      <h3 className="text-gray-800 font-bold">Warung Nasgor</h3>
                      <p className="text-gray-600 text-sm">Est. 2025</p>
                    </div>
                    <div className="text-left space-y-2 text-xs text-gray-700">
                      <p>📍 Jakarta, Indonesia</p>
                      <p>👨‍🍳 Chef Berpengalaman</p>
                      <p>🏆 Rating 4.5/5</p>
                      <p>🍚 100+ Porsi Terjual</p>
                    </div>
                  </div>
                </div>
              </PhoneMockup>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-700 leading-relaxed mb-6">
              Warung Nasgor didirikan dengan visi untuk menyajikan nasi goreng
              terbaik dengan cita rasa yang autentik dan bahan-bahan berkualitas
              tinggi. Sejak berdiri, kami telah melayani ribuan pelanggan dengan
              kepuasan yang tinggi.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Setiap porsi nasi goreng kami dibuat dengan penuh perhatian dan
              menggunakan resep rahasia yang telah diwariskan turun temurun.
              Kami percaya bahwa makanan yang baik adalah yang dibuat dengan
              hati.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Tim chef berpengalaman kami selalu memastikan setiap hidangan
              memenuhi standar kualitas tertinggi, mulai dari pemilihan beras,
              bumbu, hingga proses memasak yang higienis.
            </p>
          </div>
        </div>
      </section>
    </div>
  );

  const PemesananPage = () => (
    <div className="pt-16">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Menu Nasi Goreng
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="h-64 bg-gray-200 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div
                    className="w-full h-full bg-gradient-to-br from-orange-200 to-red-200 flex items-center justify-center text-gray-600 font-semibold"
                    style={{ display: "none" }}
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-orange-400 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <span className="text-white text-2xl">🍚</span>
                      </div>
                      <p>{item.name}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-orange-600">
                      {formatPrice(item.price)}
                    </span>
                    <button
                      onClick={() => handleOrder(item)}
                      className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors flex items-center space-x-2"
                    >
                      <ShoppingCart size={20} />
                      <span>Beli</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const CheckoutPage = () => {
    const total = selectedItem ? selectedItem.price * quantity : 0;

    const handleSubmit = (e) => {
      e.preventDefault();
      alert(
        `Pesanan berhasil! Total: ${formatPrice(total)} via ${paymentMethod}`
      );
      setCurrentPage("home");
    };

    return (
      <div className="pt-16">
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-2xl">
            <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
              Pembelian
            </h1>

            {selectedItem && (
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold mb-2">
                    {selectedItem.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {selectedItem.description}
                  </p>
                  <p className="text-xl font-semibold text-orange-600">
                    {formatPrice(selectedItem.price)}
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Jumlah Pesanan
                    </label>
                    <div className="flex items-center space-x-4">
                      <button
                        type="button"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="bg-gray-200 px-3 py-1 rounded"
                      >
                        -
                      </button>
                      <span className="text-xl font-semibold">{quantity}</span>
                      <button
                        type="button"
                        onClick={() => setQuantity(quantity + 1)}
                        className="bg-gray-200 px-3 py-1 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Metode Pembayaran
                    </label>
                    <div className="space-y-2">
                      {[
                        "BCA",
                        "BRI",
                        "BNI",
                        "Mandiri",
                        "Dana",
                        "OVO",
                        "GoPay",
                      ].map((method) => (
                        <label
                          key={method}
                          className="flex items-center space-x-2"
                        >
                          <input
                            type="radio"
                            name="payment"
                            value={method}
                            checked={paymentMethod === method}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            required
                            className="text-orange-600"
                          />
                          <span className="flex items-center space-x-2">
                            <CreditCard size={16} />
                            <span>{method}</span>
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-4 mb-6">
                    <div className="flex justify-between items-center text-xl font-bold">
                      <span>Total:</span>
                      <span className="text-orange-600">
                        {formatPrice(total)}
                      </span>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <button
                      type="button"
                      onClick={() => setCurrentPage("pemesanan")}
                      className="flex-1 bg-gray-500 text-white py-3 rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      Kembali
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors"
                    >
                      Bayar Sekarang
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </section>
      </div>
    );
  };

  const ContactPage = () => (
    <div className="pt-16">
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Hubungi Kami
          </h1>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                Informasi Kontak
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="text-orange-500" size={20} />
                  <span>+62 888-8888-8888</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-orange-500" size={20} />
                  <span>info@warungnasgor.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-orange-500" size={20} />
                  <span>Jl. Nasi Goreng No. 123, Jakarta</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Jam Operasional</h4>
                <div className="space-y-2 text-gray-600">
                  <p>Senin - Jumat: 10.00 - 22.00</p>
                  <p>Sabtu - Minggu: 09.00 - 23.00</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                Kirim Pesan
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Nama
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Pesan
                  </label>
                  <textarea
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const Footer = () => (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-400">
              Warung Nasgor
            </h3>
            <p className="text-gray-300">
              Nasi goreng terenak di kota dengan cita rasa autentik dan bahan
              berkualitas.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Menu</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Nasi Goreng Spesial</li>
              <li>Nasi Goreng Seafood</li>
              <li>Nasi Goreng Ayam</li>
              <li>Nasi Goreng Vegetarian</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <div className="space-y-2 text-gray-300">
              <p>+62 888-8888-8888</p>
              <p>info@warungnasgor.com</p>
              <p>Jl. Nasi Goreng No. 123, Jakarta</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Warung Nasgor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "about":
        return <AboutPage />;
      case "pemesanan":
        return <PemesananPage />;
      case "contact":
        return <ContactPage />;
      case "checkout":
        return <CheckoutPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {renderCurrentPage()}
      <Footer />
    </div>
  );
}

export default WarungNasgor;
