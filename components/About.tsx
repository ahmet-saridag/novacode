"use client";
import { CheckCircle2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const highlights = [
  "Kurumsal yazılım geliştirme",
  "Yapay zeka entegrasyonu ve otomasyon",
  "Dijital dönüşüm danışmanlığı",
  "Ölçeklenebilir ve güvenli mimari",
];

export default function About() {
  const leftRef  = useScrollReveal<HTMLDivElement>();
  const rightRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="hakkimizda" className="py-24 section-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div ref={leftRef} className="reveal-left">
            <div className="inline-block text-xs font-semibold uppercase tracking-widest text-indigo-400 border border-indigo-500/30 rounded-full px-3 py-1 mb-4">
              Hakkımızda
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Geleceğin dijital altyapısını{" "}
              <span className="gradient-text">birlikte inşa ediyoruz</span>
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              NovaCode Digital, Türkiye&apos;deki işletmelere kurumsal yazılım geliştirme, yapay zeka entegrasyonu ve dijital dönüşüm hizmetleri sunan yeni nesil bir yazılım firmasıdır.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              İnovasyon, ölçeklenebilirlik ve akıllı otomasyona odaklanarak işletmelerin geleceğe hazır olmasını sağlıyoruz.
            </p>
            <ul className="space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 size={18} className="text-indigo-400 shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div ref={rightRef} className="reveal-right relative">
            <div className="glow-border rounded-3xl bg-white/5 p-8 grid grid-cols-2 gap-4">
              {[
                { num: "500+", label: "Proje" },
                { num: "TR", label: "Türkiye" },
                { num: "7yıl+", label: "Deneyim" },
                { num: "150+", label: "Uzman" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl bg-indigo-600/10 border border-indigo-500/20 p-6 text-center card-hover">
                  <div className="text-2xl font-bold gradient-text">{item.num}</div>
                  <div className="text-xs text-gray-400 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-600/20 rounded-full blur-2xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
