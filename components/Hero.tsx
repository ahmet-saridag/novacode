"use client";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import ParticleNetwork from "./ParticleNetwork";

const stats = [
  { value: "500+", label: "Tamamlanan Proje" },
  { value: "Türkiye", label: "Hizmet Bölgesi" },
  { value: "%99", label: "Memnuniyet Oranı" },
  { value: "%98.7", label: "AI Model Doğruluğu" },
];

const WORDS = ["dijital çözümler", "yapay zeka sistemleri", "otomasyon altyapısı", "kurumsal yazılımlar"];

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = WORDS[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setWordIdx((i) => (i + 1) % WORDS.length);
      }, 200);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIdx]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 grid-bg hero-glow overflow-hidden">

      {/* Particle network background */}
      <ParticleNetwork />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/5 w-80 h-80 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none orb-1" />
      <div className="absolute bottom-1/4 right-1/5 w-64 h-64 bg-violet-600/15 rounded-full blur-3xl pointer-events-none orb-2" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 border border-indigo-500/30 bg-indigo-500/10 rounded-full px-4 py-1.5 text-sm text-indigo-300 mb-8 mt-8"
          style={{ animation: "fadeSlideDown 0.8s ease both" }}
        >
          <Sparkles size={14} />
          AI • Yazılım • İnovasyon • Kurumsal Çözümler
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white"
          style={{ animation: "fadeSlideDown 0.8s ease 0.15s both" }}
        >
          Geleceğin kuruluşları için{" "}
          <br className="hidden sm:block" />
          <span className="gradient-text" suppressHydrationWarning>
            {displayed}
          </span>
          <span className="cursor" />
          <br className="hidden sm:block" />
          inşa ediyoruz
        </h1>

        <p
          className="text-lg text-gray-400 max-w-2xl mx-auto mb-10"
          style={{ animation: "fadeSlideDown 0.8s ease 0.3s both" }}
        >
          Yapay zeka destekli yazılım geliştirme, kurumsal çözümler, otomasyon sistemleri ve dijital dönüşüm hizmetleri sunuyoruz.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
          style={{ animation: "fadeSlideDown 0.8s ease 0.45s both" }}
        >
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
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          style={{ animation: "fadeSlideDown 0.8s ease 0.6s both" }}
        >
          {stats.map((s) => (
            <div key={s.label} className="glow-border rounded-2xl bg-white/5 p-6 card-hover">
              <div className="text-3xl font-bold gradient-text mb-1">{s.value}</div>
              <div className="text-sm text-gray-400">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom metrics bar */}
      <div
        className="relative z-10 w-full max-w-5xl mx-auto px-4 mt-12"
        style={{ animation: "fadeSlideDown 0.8s ease 0.75s both" }}
      >
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
