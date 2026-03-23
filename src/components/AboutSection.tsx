import { motion } from "framer-motion";
import { Zap, Smartphone, TrendingUp, Headphones, ShieldCheck, Wallet, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Zap,
    title: "Instant and Easy Onboarding",
    desc: "Instant and hassle-free onboarding with a seamless digital process, ensuring businesses can start using our services within minutes. Streamlined verification and integration save time, reduce paperwork, and get you operational without delays.",
    gradient: "from-primary to-secondary",
  },
  {
    icon: Smartphone,
    title: "Simple & Easy to Use App",
    desc: "A simple and easy-to-use app designed for everyone, from beginners to experts. With an intuitive interface and smooth navigation, you can access all services quickly and efficiently, anytime and anywhere.",
    gradient: "from-secondary to-primary",
  },
  {
    icon: TrendingUp,
    title: "Opportunity to Earn High Margins",
    desc: "Partners get an opportunity to earn high margins through our wide range of financial and digital services. With competitive commission structures and growing market demand, you can maximize profits while expanding your business network.",
    gradient: "from-primary to-secondary",
  },
  {
    icon: Headphones,
    title: "Dedicated Customer Support",
    desc: "Dedicated customer support to ensure your queries and issues are resolved quickly and efficiently. Our expert team is available to guide you at every step, delivering reliable assistance for a smooth business experience.",
    gradient: "from-secondary to-primary",
  },
  {
    icon: ShieldCheck,
    title: "Highly Safe & Secure App",
    desc: "A highly safe and secure app with advanced encryption and robust security protocols. We prioritize protecting your data and transactions, ensuring complete privacy and peace of mind for every user.",
    gradient: "from-primary to-secondary",
  },
  {
    icon: Wallet,
    title: "24×7 Wallet Top-up Facility",
    desc: "A 24×7 wallet top-up facility, allowing you to add funds anytime without delays. Our round-the-clock service ensures uninterrupted transactions and smooth business operations whenever you need them.",
    gradient: "from-secondary to-primary",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 sm:py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
        style={{ background: "radial-gradient(circle, hsl(263 70% 58% / 0.1), transparent)" }}
      />
      {/* Premium gradient mesh */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #2563EB, transparent)" }} />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px] opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #7C3AED, transparent)" }} />
      
      <div className="container relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: -24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 capsule bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles size={12} />
            About Us
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-8">
            About <span className="text-gradient">MagniPay</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4 text-pretty text-lg">
            Magnipay Technologies Private Limited is a leading fintech company providing 
            end-to-end payment solutions for businesses across India. We deliver instant 
            onboarding, a user-friendly app, high earning potential for partners, and 
            round-the-clock support — all backed by bank-grade security.
          </p>
          <p className="text-muted-foreground leading-relaxed text-pretty text-lg">
            From seamless digital payments to 24×7 wallet services, MagniPay empowers 
            merchants and partners to grow their business with speed, security, and simplicity.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 mt-6 text-primary font-semibold hover:gap-3 transition-all duration-300 group"
          >
            Learn More About Us
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="neon-card p-4 sm:p-5 md:p-7 group"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${f.gradient} mb-4
                group-hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all duration-300`}>
                <f.icon size={22} className="text-white" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
