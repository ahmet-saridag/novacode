"use client";
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const WA_NUMBER = "905372320235";

const contactItems = [
  {
    icon: Mail,
    label: "E-posta",
    value: "info@novacodedigital.com",
    href: "mailto:info@novacodedigital.com",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+90 537 232 02 35",
    href: `https://wa.me/${WA_NUMBER}`,
  },
  {
    icon: MapPin,
    label: "Konum",
    value: "Levent, İstanbul, Türkiye",
    href: null,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://formsubmit.co/ajax/0599c3a478bfa0a29e7cfd459dc63cdd", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Yeni İletişim Formu: ${form.name}`,
          _captcha: "false",
          _template: "table",
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="iletisim" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block text-xs font-semibold uppercase tracking-widest text-indigo-400 border border-indigo-500/30 rounded-full px-3 py-1 mb-4">
            İletişim
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Projenizi{" "}
            <span className="gradient-text">Hayata Geçirelim</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Ücretsiz danışmanlık için bize ulaşın. 24 saat içinde yanıt veriyoruz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-6">İletişim Bilgileri</h3>
              <div className="space-y-5">
                {contactItems.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-600/20 flex items-center justify-center shrink-0">
                      <item.icon size={18} className="text-indigo-400" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">{item.label}</div>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="text-gray-200 mt-0.5 hover:text-indigo-300 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-gray-200 mt-0.5">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glow-border rounded-2xl bg-white/5 p-6">
              <h4 className="font-semibold text-white mb-2">Neden NovaCode?</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>✓ 500+ başarıyla tamamlanmış proje</li>
                <li>✓ Türkiye genelinde aktif müşteriler</li>
                <li>✓ %99 müşteri memnuniyeti</li>
                <li>✓ 7/24 teknik destek</li>
              </ul>
            </div>

            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-green-600/20 hover:bg-green-600/30 border border-green-500/30 text-green-300 font-medium px-5 py-3 rounded-xl transition-colors w-full justify-center"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp ile Yaz
            </a>
          </div>

          {/* Form */}
          <div className="glow-border rounded-2xl bg-white/5 p-8">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                  <CheckCircle2 size={32} className="text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Mesajınız İletildi!</h3>
                <p className="text-gray-400 text-sm">En kısa sürede info@novacodedigital.com adresinden size dönüş yapacağız.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-indigo-400 hover:text-indigo-300 text-sm underline transition-colors"
                >
                  Yeni mesaj gönder
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm text-gray-400 mb-1.5">Ad Soyad</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Adınız ve soyadınız"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1.5">E-posta</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="ornek@sirket.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1.5">Mesaj</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Projeniz hakkında bize bilgi verin..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-sm">Bir hata oluştu. Lütfen tekrar deneyin veya doğrudan mail atın.</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <><Loader2 size={18} className="animate-spin" /> Gönderiliyor...</>
                  ) : (
                    <><Send size={18} /> Mesaj Gönder</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
