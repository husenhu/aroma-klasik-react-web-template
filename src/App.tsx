import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Coffee, 
  MapPin, 
  Clock, 
  Wifi, 
  Zap, 
  Instagram, 
  MessageCircle, 
  ChevronRight, 
  Menu as MenuIcon, 
  X, 
  Download,
  Star,
  Car,
  Wind,
  Moon
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-stone-900/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-serif font-bold text-white tracking-tighter">
          AROMA<span className="text-amber-500">KLASIK</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm uppercase tracking-widest text-white/80 hover:text-amber-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button 
          className="hidden md:block bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all"
          onClick={() => window.open('https://wa.me/628123456789', '_blank')}
        >
          Reservasi
        </button>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-stone-900 border-t border-white/10 p-6 md:hidden"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg text-white/90 hover:text-amber-500"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button 
                className="w-full bg-amber-600 text-white py-3 rounded-xl font-medium"
                onClick={() => {
                  window.open('https://wa.me/628123456789', '_blank');
                  setIsMobileMenuOpen(false);
                }}
              >
                Reservasi Sekarang
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop" 
          alt="Cafe Interior" 
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-amber-400 uppercase tracking-[0.3em] text-sm font-semibold mb-4 block"
        >
          Est. 2024 — Jakarta
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl text-white font-serif mb-8 leading-[1.1]"
        >
          Kopi Lokal dengan <br />
          <span className="italic text-amber-500">Suasana Klasik</span>
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="#menu" 
            className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-full font-semibold transition-all transform hover:scale-105"
          >
            Lihat Menu
          </a>
          <a 
            href="#contact" 
            className="w-full sm:w-auto bg-transparent border border-white/30 hover:bg-white/10 text-white px-10 py-4 rounded-full font-semibold backdrop-blur-sm transition-all"
          >
            Reservasi Meja
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop" 
                alt="Coffee Brewing" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-amber-600 p-8 rounded-2xl shadow-xl hidden md:block max-w-xs">
              <p className="text-white font-serif italic text-xl">
                "Kami percaya setiap cangkir kopi memiliki cerita yang layak untuk dinikmati."
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-amber-600 font-semibold uppercase tracking-widest text-sm mb-4 block">Cerita Kami</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-stone-900">Warisan Rasa dalam <br />Setiap Tegukan</h2>
            <p className="text-stone-600 text-lg mb-6 leading-relaxed">
              Berawal dari kecintaan pada biji kopi nusantara, Aroma Klasik hadir dengan konsep <span className="font-semibold text-stone-800 italic">Vintage Industrial</span> yang hangat. Kami mengkurasi biji kopi terbaik dari petani lokal untuk memastikan kualitas dan keaslian rasa.
            </p>
            <p className="text-stone-600 text-lg mb-8 leading-relaxed">
              Bukan sekadar cafe, kami adalah ruang untuk berbagi ide, merayakan momen kecil, atau sekadar melarikan diri sejenak dari hiruk-pikuk kota dengan resep turun-temurun yang kami jaga keasliannya.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-3xl font-serif text-amber-600">100%</h4>
                <p className="text-stone-500 text-sm uppercase tracking-wider">Biji Kopi Lokal</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif text-amber-600">15+</h4>
                <p className="text-stone-500 text-sm uppercase tracking-wider">Varian Menu</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const HighlightMenu = () => {
  const bestSellers = [
    {
      name: "Signature Gula Aren",
      price: "Rp 28k",
      desc: "Creamy espresso dengan sentuhan gula aren organik yang autentik.",
      image: "https://images.unsplash.com/photo-1553742198-6eea5ac42a24?q=80&w=870&auto=format&fit=crop",
      label: "Must Try"
    },
    {
      name: "Classic Beef Burger",
      price: "Rp 45k",
      desc: "Patty daging sapi juicy dengan keju meleleh dan roti brioche crunchy.",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1899&auto=format&fit=crop",
      label: "Chef's Recommendation"
    },
    {
      name: "Matcha Zen Latte",
      price: "Rp 32k",
      desc: "Bubuk matcha premium Jepang dengan tekstur susu yang silky.",
      image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=2071&auto=format&fit=crop",
      label: "Best Seller"
    }
  ];

  return (
    <section id="menu" className="py-24 bg-stone-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-semibold uppercase tracking-widest text-sm mb-4 block">The Showstopper</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Menu Andalan Kami</h2>
          <p className="text-stone-400 max-w-2xl mx-auto">Dipilih dengan hati, disajikan dengan cinta. Cicipi kelezatan yang menjadi favorit para pelanggan setia kami.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {bestSellers.map((item, index) => (
            <motion.div 
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-stone-800 rounded-3xl overflow-hidden border border-white/5 hover:border-amber-500/30 transition-all"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-amber-600/20 text-amber-500 text-[10px] uppercase font-bold tracking-widest rounded-full mb-2">
                      {item.label}
                    </span>
                    <h3 className="text-2xl font-serif">{item.name}</h3>
                  </div>
                  <span className="text-amber-500 font-bold text-xl">{item.price}</span>
                </div>
                <p className="text-stone-400 text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>
                <button className="flex items-center text-amber-500 font-semibold text-sm group/btn">
                  Pesan Sekarang <ChevronRight size={16} className="ml-1 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-10 bg-stone-800 rounded-[2rem] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-serif mb-2">Ingin melihat menu lengkap?</h3>
            <p className="text-stone-400">Tersedia puluhan pilihan makanan dan minuman lainnya.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button className="flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 px-8 py-4 rounded-full font-bold transition-all">
              <Download size={20} /> Download Menu PDF
            </button>
            <button className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-full font-bold transition-all">
              Menu Interaktif
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Facilities = () => {
  const facilities = [
    { icon: <Wifi size={24} />, name: "Wi-Fi Kencang", desc: "Cocok untuk WFC" },
    { icon: <Zap size={24} />, name: "Banyak Colokan", desc: "Tak perlu takut lowbat" },
    { icon: <Car size={24} />, name: "Parkir Luas", desc: "Aman untuk mobil & motor" },
    { icon: <Wind size={24} />, name: "Smoking Area", desc: "Outdoor yang nyaman" },
    { icon: <Moon size={24} />, name: "Mushola", desc: "Ibadah jadi tenang" },
    { icon: <Coffee size={24} />, name: "Indoor AC", desc: "Sejuk & tenang" },
  ];

  return (
    <section id="facilities" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-amber-600 font-semibold uppercase tracking-widest text-sm mb-4 block">Experience</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-stone-900">Lebih dari Sekadar Rasa, <br />Ini Tentang Kenyamanan</h2>
            <div className="grid grid-cols-2 gap-x-8 gap-y-10">
              {facilities.map((f, i) => (
                <motion.div 
                  key={f.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800">{f.name}</h4>
                    <p className="text-stone-500 text-sm">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1616091216791-a5360b5fc78a?q=80&w=395&auto=format&fit=crop" 
                alt="Ambience 1" 
                className="rounded-2xl w-full aspect-[3/4] object-cover shadow-lg"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=2070&auto=format&fit=crop" 
                alt="Ambience 2" 
                className="rounded-2xl w-full aspect-square object-cover shadow-lg"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-4 pt-12">
              <img 
                src="https://images.unsplash.com/photo-1713262707983-0a5d09bd8e40?q=80&w=435&auto=format&fit=crop" 
                alt="Ambience 3" 
                className="rounded-2xl w-full aspect-square object-cover shadow-lg"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop" 
                alt="Ambience 4" 
                className="rounded-2xl w-full aspect-[3/4] object-cover shadow-lg"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LocationAndHours = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-stone-900 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 h-[400px] lg:h-auto">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.273673552033!2d106.8246943153412!3d-6.227560962721869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e4a4347b3f%3A0x217177b9e64a130!2sMega%20Kuningan!5e0!3m2!1sen!2sid!4v1650000000000!5m2!1sen!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="lg:w-1/2 p-12 md:p-16 text-white">
            <span className="text-amber-500 font-semibold uppercase tracking-widest text-sm mb-4 block">Visit Us</span>
            <h2 className="text-4xl font-serif mb-8">Lokasi & Jam Operasional</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <MapPin className="text-amber-500 shrink-0" />
                <div>
                  <h4 className="font-bold text-lg mb-1">Alamat</h4>
                  <p className="text-stone-400">Jl. Kenangan No. 123, Mega Kuningan, Jakarta Selatan, 12950</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="text-amber-500 shrink-0" />
                <div className="w-full">
                  <h4 className="font-bold text-lg mb-4">Jam Buka</h4>
                  <div className="space-y-2 text-stone-400">
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span>Senin - Kamis</span>
                      <span className="text-white">10.00 - 22.00</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span>Jumat</span>
                      <span className="text-white">13.00 - 23.00</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span>Sabtu - Minggu</span>
                      <span className="text-white">08.00 - 23.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button 
              className="mt-12 w-full bg-white text-stone-900 py-4 rounded-full font-bold hover:bg-amber-500 hover:text-white transition-all"
              onClick={() => window.open('https://maps.google.com', '_blank')}
            >
              Petunjuk Arah
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  const testimonials = [
    { name: "Andi Wijaya", role: "Coffee Enthusiast", text: "Kopi gula arennya terbaik! Suasananya juga sangat tenang, cocok buat yang mau fokus kerja.", stars: 5 },
    { name: "Siska Putri", role: "Freelancer", text: "Wi-Fi kencang dan banyak colokan. Makanan beratnya juga enak-enak, porsinya pas.", stars: 5 },
    { name: "Budi Santoso", role: "Local Guide", text: "Pelayanan ramah dan tempatnya sangat estetik. Spot fotonya banyak banget!", stars: 4 },
  ];

  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold uppercase tracking-widest text-sm mb-4 block">Social Proof</span>
          <h2 className="text-4xl font-serif mb-4 text-stone-900">Apa Kata Mereka?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((t, i) => (
            <motion.div 
              key={t.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200"
            >
              <div className="flex text-amber-500 mb-4">
                {[...Array(t.stars)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-stone-600 italic mb-6">"{t.text}"</p>
              <div>
                <h4 className="font-bold text-stone-900">{t.name}</h4>
                <p className="text-stone-400 text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-serif mb-8">Follow Us on Instagram</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden group relative cursor-pointer">
                <img 
                  src={`https://picsum.photos/seed/cafe${i}/400/400`} 
                  alt={`Instagram ${i}`} 
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Instagram className="text-white" />
                </div>
              </div>
            ))}
          </div>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            className="inline-flex items-center gap-2 mt-10 text-amber-600 font-bold hover:underline"
          >
            @aromaklasik.cafe <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-amber-600 font-semibold uppercase tracking-widest text-sm mb-4 block">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-stone-900">Mulai Cerita Anda <br />Bersama Kami</h2>
            <p className="text-stone-600 text-lg mb-10">
              Ingin mengadakan acara spesial? Kami menyediakan paket sewa tempat untuk ulang tahun, meeting, engagement, atau gathering komunitas.
            </p>
            
            <div className="space-y-6">
              <button 
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-lg shadow-green-600/20"
                onClick={() => window.open('https://wa.me/628123456789', '_blank')}
              >
                <MessageCircle size={24} /> Chat via WhatsApp
              </button>
              <p className="text-stone-400 text-sm">Respon cepat: Senin - Minggu (09.00 - 21.00)</p>
            </div>
          </div>

          <div className="bg-stone-50 p-10 rounded-[2.5rem] border border-stone-200">
            <h3 className="text-2xl font-serif mb-6">Formulir Reservasi</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-stone-400 ml-1">Nama Lengkap</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-stone-400 ml-1">No. WhatsApp</label>
                  <input type="tel" placeholder="0812..." className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-stone-400 ml-1">Tanggal</label>
                  <input type="date" className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-stone-400 ml-1">Jumlah Orang</label>
                  <input type="number" placeholder="2" className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-stone-400 ml-1">Pesan Tambahan</label>
                <textarea rows={4} placeholder="Misal: Request area non-smoking atau paket ulang tahun..." className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"></textarea>
              </div>
              <button className="w-full bg-stone-900 text-white py-4 rounded-xl font-bold hover:bg-amber-600 transition-all">
                Kirim Permintaan Reservasi
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <a href="#" className="text-3xl font-serif font-bold text-white tracking-tighter mb-6 block">
              AROMA<span className="text-amber-500">KLASIK</span>
            </a>
            <p className="text-stone-400 leading-relaxed">
              Menghadirkan kehangatan kopi lokal dalam suasana klasik yang tak lekang oleh waktu. Tempat terbaik untuk cerita dan rasa.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-amber-500">Navigasi</h4>
            <ul className="space-y-4 text-stone-400">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Our Menu</a></li>
              <li><a href="#facilities" className="hover:text-white transition-colors">Facilities</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-amber-500">Kontak</h4>
            <ul className="space-y-4 text-stone-400">
              <li className="flex items-center gap-3"><MessageCircle size={18} /> +62 812 3456 789</li>
              <li className="flex items-center gap-3"><Instagram size={18} /> @aromaklasik.cafe</li>
              <li className="flex items-center gap-3"><MapPin size={18} /> Jakarta, Indonesia</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-amber-500">Newsletter</h4>
            <p className="text-stone-400 text-sm mb-4">Dapatkan info promo dan menu baru langsung di email Anda.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email Anda" className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-amber-500" />
              <button className="bg-amber-600 p-2 rounded-lg hover:bg-amber-700 transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/10 text-center text-stone-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Aroma Klasik Cafe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-amber-200 selection:text-amber-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <HighlightMenu />
        <Facilities />
        <LocationAndHours />
        <SocialProof />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
