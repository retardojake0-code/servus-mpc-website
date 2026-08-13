"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Coin {
  id: number;
  angle: number;
  burstRadius: number;
  fallY: number;
  driftX: number;
  delay: number;
  outDuration: number;
  fallDuration: number;
  rotate: number;
  size: number;
}

interface Origin {
  x: number;
  y: number;
}

interface CoinDropProps {
  origin: Origin | null;
  onDone: () => void;
}

export function CoinDrop({ origin, onDone }: CoinDropProps) {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [flashKey, setFlashKey] = useState(0);

  useEffect(() => {
    if (!origin) return;

    const count = 20;
    const generated: Coin[] = Array.from({ length: count }).map((_, i) => {
      const angle = (i / count) * Math.PI * 2 + (Math.random() - 0.5) * 0.4;
      return {
        id: i,
        angle,
        burstRadius: 70 + Math.random() * 90,
        fallY: 160 + Math.random() * 160,
        driftX: (Math.random() - 0.5) * 60,
        delay: Math.random() * 0.08,
        outDuration: 0.35 + Math.random() * 0.15,
        fallDuration: 0.55 + Math.random() * 0.35,
        rotate: (Math.random() > 0.5 ? 1 : -1) * (360 + Math.random() * 360),
        size: 14 + Math.random() * 12,
      };
    });

    setCoins(generated);
    setFlashKey((k) => k + 1);

    const timer = setTimeout(() => {
      setCoins([]);
      onDone();
    }, 1400);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [origin]);

  if (!origin || coins.length === 0) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
      {/* burst flash */}
      <motion.div
        key={`flash-${flashKey}`}
        initial={{ opacity: 0.9, scale: 0 }}
        animate={{ opacity: 0, scale: 2.4 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute rounded-full"
        style={{
          left: origin.x - 40,
          top: origin.y - 40,
          width: 80,
          height: 80,
          background:
            "radial-gradient(circle, rgba(255,224,130,0.9) 0%, rgba(255,193,7,0.5) 45%, rgba(255,193,7,0) 75%)",
        }}
      />

      <AnimatePresence>
        {coins.map((coin) => {
          const midX = origin.x + Math.cos(coin.angle) * coin.burstRadius;
          const midY = origin.y + Math.sin(coin.angle) * coin.burstRadius;
          return (
            <motion.div
              key={coin.id}
              initial={{
                x: origin.x - coin.size / 2,
                y: origin.y - coin.size / 2,
                opacity: 1,
                rotate: 0,
                scale: 0.3,
              }}
              animate={{
                x: [
                  origin.x - coin.size / 2,
                  midX - coin.size / 2,
                  midX - coin.size / 2 + coin.driftX,
                ],
                y: [
                  origin.y - coin.size / 2,
                  midY - coin.size / 2,
                  midY - coin.size / 2 + coin.fallY,
                ],
                opacity: [1, 1, 0],
                scale: [0.3, 1, 0.9],
                rotate: coin.rotate,
              }}
              transition={{
                duration: coin.outDuration + coin.fallDuration,
                delay: coin.delay,
                times: [0, coin.outDuration / (coin.outDuration + coin.fallDuration), 1],
                ease: ["easeOut", "easeIn"],
              }}
              className="absolute flex items-center justify-center rounded-full border-2 border-[hsl(45,80%,35%)] bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-500 shadow-[0_2px_6px_rgba(0,0,0,0.25)]"
              style={{ width: coin.size, height: coin.size }}
            >
              <span
                className="font-display font-bold text-[hsl(45,70%,28%)]"
                style={{ fontSize: coin.size * 0.5 }}
              >
                $
              </span>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
