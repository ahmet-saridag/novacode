"use client";
import { Mail, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type Status = "idle" | "loading" | "success" | "error";

const contactItems = [
  {
    icon: Mail,
    label: "E-posta",
    value: "info@novacodedigital.com",
    href: "mailto:info@novacodedigital.com",
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
  const headRef  = useScrollReveal<HTMLDivElement>();
  const leftRef  = useScrollReveal<HTMLDivElement>();
  const rightRef = useScrollReveal<HTMLDivElement>();

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
        <div ref={headRef} className="reveal text-center mb-16">
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
          <div ref={leftRef} className="reveal-left space-y-8">
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
          </div>

          {/* Form */}
          <div ref={rightRef} className="reveal-right glow-border rounded-2xl bg-white/5 p-8">
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
