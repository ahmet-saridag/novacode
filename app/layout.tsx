import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NovaCode Digital - AI • Yazılım • İnovasyon",
  description: "Yapay zeka destekli yazılım geliştirme, kurumsal çözümler, otomasyon sistemleri ve dijital dönüşüm hizmetleri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.className} h-full`}>
      <body style={{ background: '#0a0a0f', color: '#fff', minHeight: '100vh' }} className="antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
