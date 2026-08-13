"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  /** Stagger children of this container (use with RevealItem) */
  stagger?: boolean;
  staggerDelay?: number;
}

const containerVariants = (stagger: boolean, staggerDelay: number): Variants => ({
  hidden: {},
  visible: {
    transition: stagger
      ? { staggerChildren: staggerDelay, delayChildren: 0 }
      : {},
  },
});

const itemVariants = (y: number, delay: number): Variants => ({
  hidden: { opacity: 0, y },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  stagger = false,
  staggerDelay = 0.12,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger ? containerVariants(true, staggerDelay) : itemVariants(y, delay)}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  y = 24,
  className,
}: {
  children: ReactNode;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={itemVariants(y, 0)}>
      {children}
    </motion.div>
  );
}
