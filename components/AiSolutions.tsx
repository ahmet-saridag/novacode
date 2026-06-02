import { Bot, Zap, Brain, BarChart3 } from "lucide-react";

const solutions = [
  {
    icon: Bot,
    title: "AI Chatbotlar",
    desc: "7/24 doğal dil işleme desteği ile müşteri memnuniyetini artırın. Çok dilli ve öğrenen sistemler.",
    badge: "NLP",
  },
  {
    icon: Zap,
    title: "Akıllı Otomasyon",
    desc: "Uçtan uca süreç optimizasyonu ile operasyonel maliyetleri düşürün ve verimliliği artırın.",
    badge: "RPA",
  },
  {
    icon: Brain,
    title: "Makine Öğrenmesi",
    desc: "Öngörücü ve sınıflandırma modelleri ile iş kararlarınızı veriye dayalı alın.",
    badge: "ML",
  },
  {
    icon: BarChart3,
    title: "Veri Zekası",
    desc: "Büyük ölçekli veri dönüşümü ve gerçek zamanlı raporlama ile rekabet avantajı kazanın.",
    badge: "BI",
  },
];

export default function AiSolutions() {
  return (
    <section id="ai-cozumleri" className="py-24 section-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block text-xs font-semibold uppercase tracking-widest text-indigo-400 border border-indigo-500/30 rounded-full px-3 py-1 mb-4">
            AI Çözümleri
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Yapay Zekanın{" "}
            <span className="gradient-text">Gücünü Keşfedin</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            İşletmenizi geleceğe taşıyan yapay zeka çözümleriyle rekabette öne geçin.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {solutions.map((s) => (
            <div key={s.title} className="glow-border rounded-3xl bg-white/5 p-8 card-hover group relative overflow-hidden">
              <div className="absolute top-4 right-4 text-xs font-bold text-indigo-300 border border-indigo-500/30 rounded-full px-2 py-0.5">
                {s.badge}
              </div>
              <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 flex items-center justify-center mb-6 group-hover:bg-indigo-600/40 transition-colors">
                <s.icon size={28} className="text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
              <p className="text-gray-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
