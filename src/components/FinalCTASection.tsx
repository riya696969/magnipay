import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, hsl(var(--glow-color)), transparent)" }}
      />

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-6">
            Ready to Attract Payments{" "}
            <span className="text-gradient">Like a Magnet?</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-xl max-w-2xl mx-auto mb-8 sm:mb-10 px-2">
            Join 13,000+ merchants who trust MagniPay to power their payments.
            Get started in minutes, scale without limits.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#contact" className="btn-cta text-base sm:text-lg !px-8 sm:!px-12 !py-3 sm:!py-4 inline-flex items-center gap-2 group animate-pulse-glow">
              Contact Us Now
              <ArrowRight size={20} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a href="#services" className="btn-gradient text-base">
              Explore Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
