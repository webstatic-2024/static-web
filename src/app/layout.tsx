import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sangjeomecom: Effortless Online Payment Solutions in India | Sangjeomecom",
  description:
    "Sangjeomecom provides dependable online payment services for Indian users, including mobile recharges and bill payments. Enjoy smooth transactions with our intuitive platform and secure payment options. Join us for a hassle-free payment experience.",
  openGraph: {
    title:
      "Sangjeomecom: Effortless Online Payment Solutions in India | Sangjeomecom",
    description:
      "Sangjeomecom provides dependable online payment services for Indian users, including mobile recharges and bill payments. Enjoy smooth transactions with our intuitive platform and secure payment options.",
    images: [
      {
        url: "https://staticweb.online/images/seo.png",
        alt: "Sangjeomecom - Effortless Online Payment Solutions",
      },
    ],
    type: "website",
    locale: "en_US",
    url: "https://staticweb.online",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased bg-white text-base font-normal font-roboto`}
        suppressHydrationWarning
      >
          <Header />
          {children}
          <Footer />
      </body>
    </html>
  );
}
