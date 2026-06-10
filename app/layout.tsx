import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/globals/Navbar";
import Footer from "@/components/globals/Footer";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: {
    default: "Sơn Barber | Hệ thống tóc nam uy tín - đào tạo barber chuyên nghiệp tại Nghệ An",
    template: "%s | Sơn Barber",
  },
  applicationName: "Sơn Barber",
  description:
    "Nơi mỗi kiểu tóc là một tác phẩm nghệ thuật. Dịch vụ cắt tóc nam, hóa chất tạo kiểu và đào tạo Barber chuyên nghiệp tại Nghệ An.",

  keywords: [
    "Sơn Barber",
    "sơn barber shop",
    "barber Nghệ An",
    "cắt tóc nam Nghệ An",
    "tiệm tóc nam",
    "đào tạo barber",
    "uốn tóc nam",
    "nhuộm tóc nam",
  ],

  authors: [{ name: "Sơn Barber" }],

  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Sơn Barber | Hệ thống tóc nam uy tín - đào tạo barber chuyên nghiệp tại Nghệ An",
    description:
      "Nơi mỗi kiểu tóc là một tác phẩm nghệ thuật. Dịch vụ cắt tóc nam, hóa chất tạo kiểu và đào tạo Barber chuyên nghiệp tại Nghệ An.",
    url: "https://sonbarber.vercel.app",
    siteName: "Sơn Barber",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Sơn Barber",
              url: "https://sonbarber.vercel.app",
            }),
          }}
        />
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
