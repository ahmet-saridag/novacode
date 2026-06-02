import {
  Bot, Code2, Smartphone, Cloud, ShieldCheck, BarChart3,
  Globe, Database, Cpu, Layers, ShoppingCart, Zap,
  Search, Server, MessageSquare, TrendingUp, Settings, Lightbulb,
} from "lucide-react";

const services = [
  { icon: Bot, title: "AI Çözümleri & Otomasyon", desc: "İş süreçlerinizi yapay zeka ile dönüştürün." },
  { icon: Code2, title: "Özel Yazılım Geliştirme", desc: "Kuruma özel, ölçeklenebilir yazılımlar." },
  { icon: Smartphone, title: "Web & Mobil Uygulamalar", desc: "iOS, Android ve responsive web çözümleri." },
  { icon: Layers, title: "SaaS Platformları", desc: "Hızlı büyüyen SaaS ürünleri geliştiriyoruz." },
  { icon: Lightbulb, title: "UI/UX Tasarım", desc: "Kullanıcı odaklı, modern arayüz tasarımı." },
  { icon: Cloud, title: "Bulut Altyapısı", desc: "AWS, Azure ve Google Cloud çözümleri." },
  { icon: ShieldCheck, title: "Siber Güvenlik", desc: "Güvenlik denetimleri ve koruma sistemleri." },
  { icon: Database, title: "ERP & CRM Sistemleri", desc: "İş süreçlerini tek platformda yönetin." },
  { icon: ShoppingCart, title: "E-Ticaret Platformları", desc: "Yüksek dönüşümlü e-ticaret çözümleri." },
  { icon: Globe, title: "API Geliştirme", desc: "RESTful ve GraphQL API entegrasyonları." },
  { icon: Zap, title: "İş Süreçleri Otomasyonu", desc: "Tekrarlayan görevleri otomatikleştirin." },
  { icon: Cpu, title: "Makine Öğrenmesi", desc: "Öngörücü ve sınıflandırma modelleri." },
  { icon: BarChart3, title: "Veri Analitiği", desc: "Büyük veri dönüşümü ve görselleştirme." },
  { icon: TrendingUp, title: "Dijital Dönüşüm", desc: "Uçtan uca dijitalleşme danışmanlığı." },
  { icon: Search, title: "SEO & Dijital Pazarlama", desc: "Organik büyüme ve arama optimizasyonu." },
  { icon: Server, title: "Hosting & DevOps", desc: "Yüksek erişilebilirlik altyapı yönetimi." },
  { icon: MessageSquare, title: "Teknik Danışmanlık", desc: "Mimariden stratejiye uzman desteği." },
  { icon: Settings, title: "Bakım & Destek", desc: "7/24 izleme ve teknik destek hizmetleri." },
];

export default function Services() {
  return (
    <section id="hizmetler" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block text-xs font-semibold uppercase tracking-widest text-indigo-400 border border-indigo-500/30 rounded-full px-3 py-1 mb-4">
            Hizmetler
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            18 Uzmanlık Alanında{" "}
            <span className="gradient-text">Kapsamlı Çözümler</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Yazılımdan yapay zekaya, buluttan siber güvenliğe kadar tüm dijital ihtiyaçlarınız için buradayız.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="glow-border rounded-2xl bg-white/5 p-6 card-hover group"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-600/20 flex items-center justify-center mb-4 group-hover:bg-indigo-600/40 transition-colors">
                <s.icon size={20} className="text-indigo-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">{s.title}</h3>
              <p className="text-sm text-gray-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
