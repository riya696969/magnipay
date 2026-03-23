import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MessageCircle, Sparkles } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 sm:py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 50%, hsl(217 91% 60% / 0.06), transparent)",
        }}
      />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 capsule bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles size={12} />
            Get In Touch
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
            Ready to <span className="text-gradient">Get Started?</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-base sm:text-xl">
            Reach out to our team and we'll get you set up within 24 hours.
          </p>
          <a href="#contact-form" className="btn-cta text-base sm:text-lg px-8 sm:px-14 py-3 sm:py-4 inline-block">
            Contact Us Now
          </a>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-start" id="contact-form">
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -24, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="neon-card p-6 sm:p-10 space-y-5 sm:space-y-6"
          >
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-emerald-500/10 text-emerald-500 capsule p-4 text-sm font-semibold text-center border border-emerald-500/20"
              >
                ✓ Thank you! We'll reach out shortly.
              </motion.div>
            )}
            <div>
              <label className="block text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wider">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full capsule border border-border bg-muted/30 px-5 py-3 text-sm text-foreground
                           focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all duration-200 placeholder:text-muted-foreground/50"
                placeholder="Your full name"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full capsule border border-border bg-muted/30 px-5 py-3 text-sm text-foreground
                             focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all duration-200 placeholder:text-muted-foreground/50"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wider">Phone</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full capsule border border-border bg-muted/30 px-5 py-3 text-sm text-foreground
                             focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all duration-200 placeholder:text-muted-foreground/50"
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wider">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-2xl border border-border bg-muted/30 px-5 py-3 text-sm resize-none text-foreground
                           focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all duration-200 placeholder:text-muted-foreground/50"
                placeholder="Tell us about your business needs…"
              />
            </div>
            <button type="submit" className="btn-primary-glow w-full flex items-center justify-center gap-2 text-base">
              <Send size={18} /> Send Message
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 24, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="neon-card p-8">
              <h3 className="font-display font-bold text-xl mb-6">Get in Touch</h3>
              <div className="space-y-5">
                <a href="tel:+916727359737" className="flex items-center gap-4 group">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent group-hover:shadow-[0_0_20px_hsl(217_91%_60%_/_0.3)] transition-all duration-300">
                    <Phone size={18} className="text-white" />
                  </div>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors font-medium">+91 6727-359737</span>
                </a>
                <a href="mailto:info@utkaldigital.in" className="flex items-center gap-4 group">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-secondary to-primary group-hover:shadow-[0_0_20px_hsl(263_70%_58%_/_0.3)] transition-all duration-300">
                    <Mail size={18} className="text-white" />
                  </div>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors font-medium">info@utkaldigital.in</span>
                </a>
                <a href="https://wa.me/916727359737" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-accent to-secondary group-hover:shadow-[0_0_20px_hsl(187_92%_53%_/_0.3)] transition-all duration-300">
                    <MessageCircle size={18} className="text-white" />
                  </div>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors font-medium">WhatsApp Us</span>
                </a>
              </div>
            </div>

            <div className="neon-card p-8">
              <h3 className="font-display font-bold text-lg mb-3">Office</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Magnipay Technologies Private Limited<br />
                No. 1456, 4343, Kasoti, Pandiri,<br />
                Kendrapara, Odisha – 754211
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
