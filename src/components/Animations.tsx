"use client";
import { motion } from "framer-motion";

export const FadeIn = ({ children, delay = 0, className }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export const FadeInStagger = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={{
      hidden: {},
      visible: {
        transition: { staggerChildren: 0.15 },
      },
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const FadeInItem = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 50, scale: 0.95 },
      visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 12 } },
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const MotionButton = ({ children, className, href }: { children: React.ReactNode, className?: string, href?: string }) => {
  const Component = href ? motion.a : motion.button;
  return (
    <Component
      href={href}
      whileHover={{ scale: 1.05, y: -3 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={className}
    >
      {children}
    </Component>
  );
};

export const MotionCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: "0px 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};