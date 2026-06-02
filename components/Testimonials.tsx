"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  { name: "Mehmet Yılmaz",  role: "CTO, TechCorp",       quote: "NovaCode Digital&apos;in AI platformu sayesinde operasyonel verimliliğimizi %40 artırdık. Mükemmel bir ekip.", initials: "MY" },
  { name: "Sarah Johnson",  role: "CEO, FinanceHub",      quote: "Kurumsal dönüşüm sürecimizde karşılaştığım en profesyonel yazılım ekibi. Projeyi zamanında ve beklentilerin üzerinde teslim ettiler.", initials: "SJ" },
  { name: "Ali Hassan",     role: "Operasyon Direktörü",  quote: "Müşteri destek otomasyonumuz artık 7/24 çalışıyor. Maliyet tasarrufu inanılmaz.", initials: "AH" },
  { name: "Emma Schmidt",   role: "Kurucu, SaaSify",      quote: "SaaS ürünümüzün teknik altyapısını NovaCode ile kurduğumuz için çok şanslıyız. Harika bir iş ortağı.", initials: "ES" },
];

export default function Testimonials() {
  const headRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useScrollReveal<HTMLDivElement>({ threshold: 0.08 });

  return (
    <section className="py-24 section-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headRef} className="reveal text-center mb-16">
          <div className="inline-block text-xs font-semibold uppercase tracking-widest text-indigo-400 border border-indigo-500/30 rounded-full px-3 py-1 mb-4">
            Referanslar
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Müşterilerimiz{" "}
            <span className="gradient-text">Ne Diyor?</span>
          </h2>
        </div>

        <div ref={gridRef} className="stagger grid sm:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="glow-border rounded-2xl bg-white/5 p-8 card-hover">
              <p className="text-gray-300 italic mb-6 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-600/40 flex items-center justify-center text-sm font-bold text-indigo-200">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
