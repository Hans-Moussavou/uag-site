"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // Récupère l'URL actuelle

  return (
    <motion.div
      key={pathname} // La clé change à chaque page, ce qui force l'animation
      initial={{ opacity: 0, y: 20 }} // Départ : invisible et 20px plus bas
      animate={{ opacity: 1, y: 0 }} // Arrivée : visible et à sa place
      transition={{ duration: 0.6, ease: "easeOut" }} // Durée fluide
      className="flex-grow flex flex-col"
    >
      {children}
    </motion.div>
  );
}