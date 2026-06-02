const steps = [
  { num: "01", title: "Keşif", desc: "İş hedeflerinizi ve gereksinimlerinizi derinlemesine analiz ediyoruz." },
  { num: "02", title: "Planlama", desc: "Teknik mimari ve proje yol haritasını birlikte oluşturuyoruz." },
  { num: "03", title: "Tasarım", desc: "Kullanıcı deneyimini ön planda tutan tasarımlar hazırlıyoruz." },
  { num: "04", title: "Geliştirme", desc: "Agile metodoloji ile hızlı ve kaliteli kod yazıyoruz." },
  { num: "05", title: "Test", desc: "Kapsamlı QA süreçleriyle hataları sıfıra indiriyoruz." },
  { num: "06", title: "Yayın", desc: "Güvenli ve kesintisiz deployment ile sistemi canlıya alıyoruz." },
  { num: "07", title: "Optimizasyon", desc: "Sürekli izleme ve iyileştirme ile performansı maksimuma taşıyoruz." },
];

export default function Process() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block text-xs font-semibold uppercase tracking-widest text-indigo-400 border border-indigo-500/30 rounded-full px-3 py-1 mb-4">
            Süreç
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            7 Adımda{" "}
            <span className="gradient-text">Proje Teslimi</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Kanıtlanmış metodolojimizle her projeyi zamanında ve bütçe dahilinde teslim ediyoruz.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-8 left-8 right-8 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent hidden lg:block" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-7 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="relative text-center group">
                <div className="w-16 h-16 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-600/40 transition-colors">
                  <span className="text-lg font-bold gradient-text">{step.num}</span>
                </div>
                <h3 className="font-semibold text-white text-sm mb-2">{step.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
