import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Mail } from "lucide-react";

export const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px]">
      <div
        className="h-full transition-[width] duration-100"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, #2563EB, #7C3AED)",
          boxShadow: "0 0 10px rgba(37, 99, 235, 0.5)",
        }}
      />
    </div>
  );
};

export const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onMenu = (e: Event) => setMenuOpen((e as CustomEvent).detail);
    window.addEventListener("sidemenu", onMenu);
    return () => window.removeEventListener("sidemenu", onMenu);
  }, []);

  return (
    <AnimatePresence>
      {visible && !menuOpen && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 lg:bottom-8 max-lg:bottom-36 p-3 rounded-full bg-gradient-to-br from-primary via-primary to-secondary 
                     text-primary-foreground shadow-[0_0_20px_rgba(37,99,235,0.4)] 
                     hover:shadow-[0_0_30px_rgba(37,99,235,0.8)] hover:scale-110
                     transition-all duration-300 active:scale-95"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export const MobileCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 150 }}
          className="fixed bottom-0 left-0 right-0 z-40 lg:hidden"
        >
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-800/90 to-transparent" />
          
          {/* Content */}
          <div className="relative px-4 py-8 flex gap-4 items-center justify-between">
            <div className="flex flex-col gap-1">
              <div className="text-xs font-semibold text-amber-400 tracking-wider">READY TO GET STARTED?</div>
              <div className="text-sm text-slate-200">Get exclusive access to MagniPay features</div>
            </div>
            
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0 px-9 py-5 rounded-2xl font-bold text-white text-lg
                         bg-gradient-to-r from-[#2563EB] to-[#7C3AED] hover:from-[#3b82f6] hover:to-[#8b5cf6]
                         shadow-[0_0_25px_rgba(37,99,235,0.4)] hover:shadow-[0_0_35px_rgba(124,58,237,0.6)]
                         transition-all duration-300 flex items-center gap-2.5"
            >
              <Mail size={22} />
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
