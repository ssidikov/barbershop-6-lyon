"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scissors } from "lucide-react";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for the wow effect
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center"
        >
          <motion.div
            animate={{ 
              rotate: [0, 180, 180, 0],
              scale: [1, 1.2, 1.2, 1]
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.3, 0.7, 1],
              repeat: Infinity,
            }}
            className="mb-8 relative"
          >
            {/* Rotating border ring */}
            <div className="absolute inset-[-15px] border border-gold-400/20 rounded-full"></div>
            <div className="absolute inset-[-15px] border-t border-gold-400 rounded-full animate-spin"></div>
            <Scissors className="w-12 h-12 text-gold-400" />
          </motion.div>
          
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
              className="text-white font-heading text-2xl uppercase tracking-[0.3em] font-bold"
            >
              Lyon VI
            </motion.h1>
          </div>
          
          <div className="overflow-hidden mt-4">
            <motion.p
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
              className="text-gold-400/60 text-xs font-light uppercase tracking-widest"
            >
              L'art du grooming premium
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
