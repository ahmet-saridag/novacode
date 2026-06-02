const projects = [
  {
    title: "FinTech AI Platform",
    category: "Yapay Zeka",
    desc: "Büyük ölçekli finansal veri analizi için geliştirilmiş ML platformu.",
    tags: ["Python", "TensorFlow", "AWS"],
    color: "from-indigo-500/20",
  },
  {
    title: "Global ERP Sistemi",
    category: "Kurumsal",
    desc: "Uluslararası operasyonları yöneten entegre ERP çözümü.",
    tags: [".NET", "PostgreSQL", "Azure"],
    color: "from-blue-500/20",
  },
  {
    title: "E-Ticaret Süper Uygulaması",
    category: "E-Ticaret",
    desc: "Çok satıcılı marketplace ve lojistik yönetim platformu.",
    tags: ["Next.js", "Node.js", "MongoDB"],
    color: "from-emerald-500/20",
  },
  {
    title: "Sağlık Otomasyon Sistemi",
    category: "Otomasyon",
    desc: "Hastane süreçlerini otomatikleştiren akıllı yönetim sistemi.",
    tags: ["React", "Python", "FHIR"],
    color: "from-rose-500/20",
  },
  {
    title: "SaaS CRM Platformu",
    category: "SaaS",
    desc: "Küçük ve orta ölçekli işletmeler için yapay zeka destekli CRM.",
    tags: ["Vue", "Node.js", "Redis"],
    color: "from-violet-500/20",
  },
  {
    title: "Mobil Banka Uygulaması",
    category: "Mobil",
    desc: "Biyometrik doğrulama ve gerçek zamanlı işlem takibi.",
    tags: ["React Native", "Java", "Oracle"],
    color: "from-amber-500/20",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolyo" className="py-24 section-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block text-xs font-semibold uppercase tracking-widest text-indigo-400 border border-indigo-500/30 rounded-full px-3 py-1 mb-4">
            Portfolyo
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Seçkili{" "}
            <span className="gradient-text">Projelerimiz</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Global ölçekte hayata geçirdiğimiz başarılı projelerden örnekler.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className={`rounded-2xl bg-gradient-to-b ${p.color} to-transparent border border-white/10 p-6 card-hover cursor-pointer`}
            >
              <span className="text-xs font-semibold text-indigo-400 border border-indigo-500/30 rounded-full px-2 py-0.5">
                {p.category}
              </span>
              <h3 className="text-lg font-bold text-white mt-4 mb-2">{p.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-white/10 text-gray-300 rounded px-2 py-0.5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
