import { Linkedin, Twitter, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import MagniPayLogo from "./MagniPayLogo";

const footerLinks = {
  Services: ["UPI Collection", "Payout API", "Aadhaar ATM", "Bharat QR", "Cash Management", "Money Remittance"],
  Company: ["About Us", "Press Kit"],
  Support: ["API Reference", "Contact Us"],
};

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/30 pt-20 pb-10">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 md:col-span-1">
            <MagniPayLogo size="sm" />
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
              Empowering digital payments with speed, security, and simplicity.
            </p>
            <div className="flex gap-3 mt-6">
              {[Twitter, Linkedin, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2.5 rounded-xl bg-muted/50 border border-border/50 hover:border-primary/40 hover:bg-primary/10 
                    hover:text-primary hover:shadow-[0_0_15px_hsl(217_91%_60%_/_0.2)] transition-all duration-300 active:scale-95"
                  aria-label="Social"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-5 text-primary">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all duration-200 inline-block">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Magnipay Technologies Private Limited. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <Link to="/refund" className="hover:text-foreground transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
