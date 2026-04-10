import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import Loader from "@/components/Loader";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lyon Barbershop 6ème | L'art du grooming premium",
  description: "Découvrez notre barbershop haut de gamme situé dans le 6ème arrondissement de Lyon. Une expérience de grooming traditionnel et moderne pour l'homme soucieux de son apparence.",
  keywords: "barbershop lyon 6, coiffeur homme lyon, taille de barbe lyon, grooming premium, salon de coiffure homme",
  openGraph: {
    title: "Lyon Barbershop 6ème",
    description: "Une expérience de grooming traditionnel et moderne à Lyon 6ème.",
    type: "website",
    locale: "fr_FR",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${oswald.variable} scroll-smooth dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-black text-slate-100 flex flex-col font-sans antialiased selection:bg-amber-600 selection:text-white">
        <Loader />
        {children}
      </body>
    </html>
  );
}
