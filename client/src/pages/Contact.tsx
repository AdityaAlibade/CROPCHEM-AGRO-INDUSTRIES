import { MapPin, Phone, Mail, Linkedin, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans selection:bg-primary/20">
      {/* Header Section */}
      <div className="bg-primary relative py-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
        <div className="relative z-10">
          <h1 className="font-display font-black text-5xl md:text-6xl text-white mb-6 tracking-tight drop-shadow-sm">
            Contact Us
          </h1>
          <p className="text-white/80 text-xl font-medium max-w-2xl mx-auto px-4">
            We'd love to hear from you. Reach out to us for any queries or support.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-16 relative z-20">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 ring-1 ring-black/5">
          <div className="grid lg:grid-cols-2">
            {/* Contact Info Side */}
            <div className="bg-secondary p-12 text-primary-foreground relative overflow-hidden group">
              <div className="absolute inset-0 bg-primary/95 z-0 transition-colors duration-500 group-hover:bg-primary" />
              <div className="absolute inset-0 z-0 opacity-10"
                style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

              {/* Decorative Circle */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl z-0"></div>
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl z-0"></div>

              <div className="relative z-10 space-y-12 h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-3xl text-white mb-4">Get in Touch</h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Have questions about our products? <br />Our team is here to help you grow.
                  </p>
                </div>

                <div className="space-y-8">
                  <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="flex items-start gap-5 p-4 rounded-2xl hover:bg-white/10 transition-all duration-300 group/item">
                    <div className="bg-white/10 p-4 rounded-xl text-secondary group-hover/item:bg-secondary group-hover/item:text-primary transition-colors shadow-lg">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg mb-1 group-hover/item:text-secondary transition-colors">Our Location</h4>
                      <p className="text-white/80 text-sm leading-relaxed">
                        Survey no. 135/20/2, Palkhi Marg, Uralidevachi, <br />
                        Taluka – Haveli, Dist – Pune 412308, <br />
                        Maharashtra, India.
                      </p>
                    </div>
                  </a>

                  <a href="tel:+919529932941" className="flex items-start gap-5 p-4 rounded-2xl hover:bg-white/10 transition-all duration-300 group/item">
                    <div className="bg-white/10 p-4 rounded-xl text-secondary group-hover/item:bg-secondary group-hover/item:text-primary transition-colors shadow-lg">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg mb-1 group-hover/item:text-secondary transition-colors">Phone</h4>
                      <p className="text-white/80 text-lg font-medium tracking-wide">+91 95299 32941</p>
                    </div>
                  </a>

                  <a href="mailto:cropchemagro@gmail.com" className="flex items-start gap-5 p-4 rounded-2xl hover:bg-white/10 transition-all duration-300 group/item">
                    <div className="bg-white/10 p-4 rounded-xl text-secondary group-hover/item:bg-secondary group-hover/item:text-primary transition-colors shadow-lg">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg mb-1 group-hover/item:text-secondary transition-colors">Email</h4>
                      <p className="text-white/80 text-lg font-medium">cropchemagro@gmail.com</p>
                    </div>
                  </a>
                </div>

                {/* Social Links */}
                <div className="pt-8 border-t border-white/10">
                  <h4 className="text-white/60 text-sm font-bold uppercase tracking-widest mb-6">Connect With Us</h4>
                  <div className="flex gap-4">
                    <a href="https://www.linkedin.com/company/cropchem-agro-industries/" target="_blank" rel="noopener noreferrer"
                      className="group/social bg-white/5 hover:bg-white p-3 rounded-xl transition-all duration-300 border border-white/10 hover:border-white">
                      <Linkedin className="h-6 w-6 text-white group-hover/social:text-primary transition-colors" />
                    </a>
                    <a href="https://www.instagram.com/cropchem.agro" target="_blank" rel="noopener noreferrer"
                      className="group/social bg-white/5 hover:bg-white p-3 rounded-xl transition-all duration-300 border border-white/10 hover:border-white">
                      <Instagram className="h-6 w-6 text-white group-hover/social:text-primary transition-colors" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Google Form */}
            <div className="bg-white min-h-[600px] lg:min-h-[1050px] w-full relative">
              <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-secondary via-primary to-secondary"></div>
              <iframe
                src="https://docs.google.com/forms/d/1gHqkk00dHvu14IZCw6-ZLgH66wr0p3JUdQx59RoWjdw/viewform?embedded=true"
                width="100%"
                height="100%"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="absolute inset-0 w-full h-full"
                title="Contact Us Form"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>

        {/* Map Embed */}
        <div className="mt-12 bg-white p-2 rounded-[2rem] shadow-xl border border-gray-100">
          <div className="rounded-[1.5rem] overflow-hidden h-96 relative group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.665796035048!2d73.94861131489176!3d18.45333398744836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e9876543210f%3A0x1234567890abcdef!2sUralidevachi%2C%20Maharashtra%20412308!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Office Location"
              className="grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
            ></iframe>
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg text-xs font-bold text-primary border border-gray-200 pointer-events-none flex items-center gap-2">
              <MapPin className="w-3 h-3 text-secondary" /> Locate Us on Map
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
