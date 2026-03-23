import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "CEO, QuickMart",
    text: "MagniPay transformed how we handle payments. Settlement times dropped from 3 days to instant. Our cash flow has never been healthier.",
  },
  {
    name: "Rajesh Gupta",
    role: "CTO, PayLink Solutions",
    text: "The API documentation is excellent and integration took us less than a day. Their auto-reconciliation feature alone saves us 15 hours a week.",
  },
  {
    name: "Anita Desai",
    role: "Founder, UrbanBox",
    text: "From UPI collections to payouts, everything works seamlessly. The uptime has been incredible — we haven't experienced a single outage in 14 months.",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % testimonials.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-20 sm:py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(217 91% 60% / 0.06), transparent)" }}
      />
      {/* Premium gradient orbs */}
      <div className="absolute top-10 right-0 w-[350px] h-[350px] rounded-full blur-[100px] opacity-10 pointer-events-none"
        style={{ background: "linear-gradient(135deg, #7C3AED, #2563EB)" }} />
      <div className="absolute bottom-10 left-0 w-[300px] h-[300px] rounded-full blur-[100px] opacity-10 pointer-events-none"
        style={{ background: "linear-gradient(135deg, #2563EB, #7C3AED)" }} />
      
      <div className="container max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 capsule bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
            Testimonials
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            What Our <span className="text-gradient">Merchants</span> Say
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative neon-card p-5 sm:p-8 md:p-12 lg:p-16 min-h-[200px] sm:min-h-[240px] md:min-h-[260px]"
        >
          <Quote size={28} className="text-primary/15 absolute top-5 left-5 sm:top-8 sm:left-8" />
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
              exit={{ opacity: 0, y: -16, filter: "blur(4px)" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-muted-foreground mb-5 sm:mb-6 md:mb-8 italic text-pretty">
                "{testimonials[current].text}"
              </p>
              <div className="font-display font-bold text-lg">{testimonials[current].name}</div>
              <div className="text-sm text-primary font-medium">{testimonials[current].role}</div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 sm:gap-5 mt-6 sm:mt-10">
            <button onClick={prev} className="p-3 rounded-full border border-border/50 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 active:scale-95" aria-label="Previous">
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-400 ${
                    i === current ? "w-8 bg-primary shadow-[0_0_10px_hsl(217_91%_60%_/_0.4)]" : "w-2 bg-muted-foreground/30"
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={next} className="p-3 rounded-full border border-border/50 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 active:scale-95" aria-label="Next">
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
