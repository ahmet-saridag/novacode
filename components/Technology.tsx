"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const techStack = [
  { category: "Frontend",    techs: ["React", "Next.js", "Vue", "Angular"],             color: "from-blue-500/20 to-blue-600/5",   border: "border-blue-500/20",   badge: "text-blue-400" },
  { category: "Backend",     techs: ["Node.js", "Python", "Java", ".NET"],              color: "from-green-500/20 to-green-600/5", border: "border-green-500/20",  badge: "text-green-400" },
  { category: "Veritabanı",  techs: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],        color: "from-orange-500/20 to-orange-600/5",border: "border-orange-500/20", badge: "text-orange-400" },
  { category: "Cloud",       techs: ["AWS", "Azure", "Google Cloud", "Cloudflare"],     color: "from-purple-500/20 to-purple-600/5",border: "border-purple-500/20", badge: "text-purple-400" },
  { category: "Yapay Zeka",  techs: ["OpenAI", "TensorFlow", "PyTorch", "LangChain"],  color: "from-pink-500/20 to-pink-600/5",   border: "border-pink-500/20",   badge: "text-pink-400" },
];

export default function Technology() {
  const headRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useScrollReveal<HTMLDivElement>({ threshold: 0.06 });

  return (
    <section id="teknoloji" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headRef} className="reveal text-center mb-16">
          <div className="inline-block text-xs font-semibold uppercase tracking-widest text-indigo-400 border border-indigo-500/30 rounded-full px-3 py-1 mb-4">
            Teknoloji
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Güçlü Bir{" "}
            <span className="gradient-text">Teknoloji Yığını</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            En güncel ve güvenilir teknolojileri kullanarak sağlam, ölçeklenebilir çözümler üretiyoruz.
          </p>
        </div>

        <div ref={gridRef} className="stagger grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {techStack.map((stack) => (
            <div key={stack.category} className={`rounded-2xl bg-gradient-to-b ${stack.color} border ${stack.border} p-6 card-hover`}>
              <h3 className={`text-sm font-bold uppercase tracking-wider ${stack.badge} mb-4`}>
                {stack.category}
              </h3>
              <ul className="space-y-2">
                {stack.techs.map((t) => (
                  <li key={t} className="text-gray-300 text-sm flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full bg-current ${stack.badge}`} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
