import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

const floatingCards = [
  { label: "UPI", icon: "₹", delay: 0 },
  { label: "IMPS", icon: "⚡", delay: 0.8 },
  { label: "Wallet", icon: "💳", delay: 1.6 },
];

const bgIcons = ["₹", "🔍", "💳", "⚡", "🏦", "₹", "🔍", "💳"];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center hero-bg overflow-hidden">
      {/* Background fintech icons */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none overflow-hidden">
        {bgIcons.map((icon, i) => (
          <motion.span
            key={i}
            className="absolute text-4xl select-none"
            style={{
              top: `${10 + (i * 12) % 80}%`,
              left: `${5 + (i * 14) % 90}%`,
            }}
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
          >
            {icon}
          </motion.span>
        ))}
      </div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating orbs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[16%] w-[500px] h-[500px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.08), transparent)" }}
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-[16%] w-[400px] h-[400px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(var(--secondary) / 0.08), transparent)" }}
      />

      <div className="container relative z-10 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 capsule bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-neon-pulse" />
                Trusted by 13,000+ Merchants
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-balance mb-6 sm:mb-8"
              style={{ lineHeight: '1.05' }}
            >
              Attract Payments{" "}
              <span className="text-gradient">Like a Magnet</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-lg mb-8 sm:mb-10 text-pretty leading-relaxed"
            >
              All-in-one platform for UPI, payouts, prepaid cards & business banking APIs.
              One integration to power your entire financial stack.
            </motion.p>

            {/* Premium Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10 py-4 sm:py-6 px-4 sm:px-6 rounded-2xl bg-gradient-to-br from-white/50 to-white/30 dark:from-black/60 dark:to-neutral-900/50 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            >
              <div>
                <div className="text-lg sm:text-2xl font-bold text-gradient">₹2.4Cr+</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground">Daily Volume</div>
              </div>
              <div>
                <div className="text-lg sm:text-2xl font-bold text-gradient">13K+</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground">Active Merchants</div>
              </div>
              <div>
                <div className="text-lg sm:text-2xl font-bold text-gradient">99.99%</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground">Uptime SLA</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-4"
            >
              <a href="#contact" className="btn-cta text-sm sm:text-base inline-flex items-center gap-2 !px-7 sm:!px-10 !py-3 sm:!py-4 group">
                Contact Us
                <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a href="#services" className="btn-gradient inline-flex items-center gap-2 text-sm sm:text-base">
                Explore Services
              </a>
            </motion.div>
          </div>

          {/* Magnet visual */}
          <div className="relative hidden lg:flex items-center justify-center min-h-[480px]">
            {/* Magnetic field lines */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={`field-${i}`}
                className="absolute rounded-full border border-primary/10"
                style={{
                  width: `${200 + i * 80}px`,
                  height: `${200 + i * 80}px`,
                }}
                animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
              />
            ))}

            {/* Central card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0)" }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="neon-card p-8 w-80 animate-pulse-glow relative z-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Zap size={20} className="text-primary" />
                </div>
                <div className="text-sm text-muted-foreground">Transaction Volume</div>
              </div>
              <div className="font-display text-4xl font-bold text-gradient mb-5">₹2.4 Cr</div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "78%" }}
                  transition={{ duration: 1.5, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full rounded-full"
                  style={{ background: "linear-gradient(90deg, #2563EB, #7C3AED)" }}
                />
              </div>
              <div className="mt-5 flex items-center gap-2 text-sm font-medium" style={{ color: "#10B981" }}>
                <span className="inline-block w-2 h-2 rounded-full animate-neon-pulse" style={{ background: "#10B981" }} />
                Live processing
              </div>
            </motion.div>

            {/* Floating cards being "attracted" inward */}
            {floatingCards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: [i % 2 === 0 ? -20 : 20, 0, i % 2 === 0 ? -20 : 20],
                  y: [0, -10, 0],
                }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.8 + i * 0.2 },
                  scale: { duration: 0.6, delay: 0.8 + i * 0.2 },
                  x: { duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: card.delay },
                  y: { duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: card.delay },
                }}
                className="absolute neon-card px-5 py-3 flex items-center gap-3"
                style={{
                  top: `${20 + i * 28}%`,
                  [i % 2 === 0 ? "left" : "right"]: i === 2 ? "8%" : "-2%",
                }}
              >
                <span className="text-xl">{card.icon}</span>
                <span className="text-sm font-semibold">{card.label}</span>
              </motion.div>
            ))}

            {/* Orbiting dot */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute w-[300px] h-[300px]"
              style={{ transformOrigin: "center center" }}
            >
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent shadow-[0_0_12px_hsl(var(--accent)_/_0.6)]" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
