export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="text-2xl font-bold gradient-text mb-4">NovaCode</div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Yapay zeka ve yazılımın kesişiminde, geleceğin dijital çözümlerini bugünden inşa ediyoruz.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">Hizmetler</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {["AI Çözümleri", "Web & Mobil", "Bulut Altyapısı", "SaaS Geliştirme", "Siber Güvenlik"].map((s) => (
                <li key={s}><a href="#hizmetler" className="hover:text-white transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">Şirket</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {["Hakkımızda", "Portfolyo", "Teknoloji", "Süreç", "İletişim"].map((s) => (
                <li key={s}><a href={`#${s.toLowerCase()}`} className="hover:text-white transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">İletişim</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="mailto:info@novacodedigital.com" className="hover:text-white transition-colors">info@novacodedigital.com</a></li>
              <li>Levent, İstanbul, Türkiye</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© 2026 NovaCode Digital. Tüm hakları saklıdır.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-white transition-colors">Kullanım Şartları</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
