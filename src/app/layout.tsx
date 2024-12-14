import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Vearn Tech: Seamless Online Payment Solutions in India | Vearn Tech",
  description:
    "Vearn Tech offers reliable online payment solutions for Indian customers, including mobile recharges and bill payments. Experience hassle-free transactions with our user-friendly platform and secure payment methods. Join us today for a seamless payment experience.",
  openGraph: {
    title:
      "Vearn Tech: Seamless Online Payment Solutions in India | Vearn Tech",
    description:
      "Vearn Tech offers reliable online payment solutions for Indian customers, including mobile recharges and bill payments. Experience hassle-free transactions with our user-friendly platform and secure payment methods.",
    images: [
      {
        url: "https://staticweb.online/images/seo.png",
        alt: "Vearn Tech - Seamless Online Payment Solutions",
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
    <html lang="en">
      <body
        className={`antialiased bg-white text-base font-normal font-roboto`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
