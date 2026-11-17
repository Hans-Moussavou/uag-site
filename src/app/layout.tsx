import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition"; // Import du composant

export const metadata: Metadata = {
  title: "UAG - Université Africaine du Gabon",
  description: "Site officiel de l'Université Africaine du Gabon. Campus de Bikele. Travail - Savoir - Excellence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col">
        <Header />
        {/* On enveloppe le contenu principal avec PageTransition */}
        <PageTransition>
          {children}
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}