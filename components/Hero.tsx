import { ArrowRight, Calendar, Sparkles } from "lucide-react";

const stats = [
  { value: "500+", label: "Tamamlanan Proje" },
  { value: "Türkiye", label: "Hizmet Bölgesi" },
  { value: "%99", label: "Memnuniyet Oranı" },
  { value: "%98.7", label: "AI Model Doğruluğu" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 grid-bg hero-glow overflow-hidden">
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-indigo-500/30 bg-indigo-500/10 rounded-full px-4 py-1.5 text-sm text-indigo-300 mb-8 mt-8">
          <Sparkles size={14} />
          AI • Yazılım • İnovasyon • Kurumsal Çözümler
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white">
          Geleceğin kuruluşları için{" "}
          <span className="gradient-text">akıllı dijital çözümler</span>{" "}
          inşa ediyoruz
        </h1>

        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
          Yapay zeka destekli yazılım geliştirme, kurumsal çözümler, otomasyon sistemleri ve dijital dönüşüm hizmetleri sunuyoruz.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <a
            href="#iletisim"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-all animate-pulse-glow"
          >
            Projeyi Başlat <ArrowRight size={18} />
          </a>
          <a
            href="#iletisim"
            className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-3.5 rounded-xl transition-all"
          >
            <Calendar size={18} /> Danışma Planla
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="glow-border rounded-2xl bg-white/5 p-6 card-hover">
              <div className="text-3xl font-bold gradient-text mb-1">{s.value}</div>
              <div className="text-sm text-gray-400">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom metrics bar */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 mt-12">
        <div className="border border-white/10 bg-white/5 backdrop-blur rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-around gap-4">
          <div className="text-center">
            <span className="text-indigo-400 font-bold text-lg">12,487</span>
            <p className="text-xs text-gray-400 mt-0.5">Aktif Sistem</p>
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/10" />
          <div className="text-center">
            <span className="text-indigo-400 font-bold text-lg">+18.4%</span>
            <p className="text-xs text-gray-400 mt-0.5">Nöral Hesaplama Büyümesi</p>
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/10" />
          <div className="text-center">
            <span className="text-indigo-400 font-bold text-lg">7/24</span>
            <p className="text-xs text-gray-400 mt-0.5">Kesintisiz Destek</p>
          </div>
        </div>
      </div>
    </section>
  );
}
