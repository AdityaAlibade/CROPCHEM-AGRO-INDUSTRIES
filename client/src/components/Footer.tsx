import { Link } from "wouter";
import { MapPin, Phone, Mail, Instagram, Linkedin } from "lucide-react";

import logoImg from "@assets/logo_1767812321622.webp";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="bg-white p-2 rounded-lg">
                <img
                  src={logoImg}
                  alt="CropChem Logo"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg leading-tight uppercase text-white">
                  CropChem
                </h3>
                <span className="text-[10px] text-white/60 uppercase tracking-widest block">
                  Agro Industries
                </span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Dedicated to manufacturing high-quality agricultural solutions.
              Certified for excellence in fertilisers and biostimulants.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-secondary">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Our Products
                </Link>
              </li>
              <li>
                <Link href="/certifications" className="hover:text-white transition-colors">
                  ISO Certification
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-lg mb-6 text-secondary">Contact Us</h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <span>
                  Survey no. 135/20/2, Palkhi Marg, Uralidevachi, <br />
                  Taluka – Haveli, Dist – Pune 412308, Maharashtra, India.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary shrink-0" />
                <a href="tel:+919529932941" className="hover:text-white transition-colors">
                  +91 95299 32941
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <a href="mailto:cropchemagro@gmail.com" className="hover:text-white transition-colors">
                  cropchemagro@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/50">
            © {currentYear} CROPCHEM AGRO INDUSTRIES. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/cropchem-agro-industries/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors text-white"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/cropchem.agro"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors text-white"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
