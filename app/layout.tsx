import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zertteu Lab — Зерттеу және ЖИ курстары",
  description: "Ғылыми мақала, SPSS, Scopus, Bibliometrix және жасанды интеллект бойынша 8 практикалық онлайн курс.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Зерттеуді жаңа деңгейге шығар",
    description: "8 практикалық онлайн курс · Шектеусіз қолжетімділік",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Zertteu Lab онлайн курстары" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="kk"><body>{children}</body></html>;
}
