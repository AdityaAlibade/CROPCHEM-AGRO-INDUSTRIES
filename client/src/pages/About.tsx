import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { User } from "lucide-react";

export default function About() {
  const leadership = [
    {
      name: "Mr. Vijay Solaskar",
      role: "Managing Director",
      bio: "Driving the strategic vision with decades of agricultural expertise."
    },
    {
      name: "Mr. Dinesh Bhagade",
      role: "Managing Director",
      bio: "Leading operations and product innovation for sustainable farming."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-primary py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pattern-grid-lg" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-6"
          >
            About Us
          </motion.h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Pioneering agricultural solutions through innovation, quality, and integrity.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-primary mb-6">
              Who We Are
            </h2>
            <p>
              <strong className="text-primary">CROPCHEM AGRO INDUSTRIES</strong> is a premier manufacturer and wholesale dealer based in Pune, Maharashtra. We specialize in high-quality agricultural inputs including:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-secondary">
              <li>Advanced Fertilisers</li>
              <li>Effective Biostimulants</li>
              <li>Essential Micro Nutrients</li>
            </ul>
            <p>
              Our mission is to empower farmers with reliable, scientifically formulated products that enhance crop yield and soil health. We operate with strict adherence to quality standards, ensuring every product that leaves our facility meets global benchmarks.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* unsplash: laboratory scientist microscope agriculture research */}
            <img
              src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1000"
              alt="Lab Research"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader title="Leadership Team" subtitle="Guided by Experience" centered />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-32">
          {leadership.map((leader, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-zinc-50 p-8 rounded-xl border border-zinc-100 hover:border-secondary/50 transition-colors group"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                <User className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display font-bold text-2xl text-primary mb-1">{leader.name}</h3>
              <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">{leader.role}</p>
              <p className="text-muted-foreground">{leader.bio}</p>
            </motion.div>
          ))}
        </div>

        {/* Our Journey Section */}
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="Our Journey" subtitle="Milestones of Growth" centered />

          <div className="relative mt-16 pl-8 border-l-2 border-secondary/30 space-y-12">
            {[
              {
                year: "2023",
                title: "Foundation",
                description: "Cropchem Agro Industries was founded with a clear vision to deliver reliable, high-quality agrochemical solutions while building long-term trust with dealers and partners."
              },
              {
                year: "2023–2024",
                title: "Market Entry & Network Building",
                description: "We entered the competitive agrochemical market by establishing a strong dealer and distributor network, focusing on relationship-driven growth and consistent product availability."
              },
              {
                year: "2024",
                title: "Brand Strengthening",
                description: "Cropchem enhanced its brand identity through improved packaging, professional communication, and premium presentation—positioning the company alongside established industry players."
              },
              {
                year: "Early 2025",
                title: "Operational Excellence",
                description: "Internal systems were strengthened with better documentation, inventory planning, and transaction clarity, ensuring smoother operations and higher transparency."
              },
              {
                year: "November 2025",
                title: "Nutrishaktee Series Launch",
                description: "The Nutrishaktee nutrient range was introduced, marking Cropchem’s expansion into plant nutrition and offering dealers a broader, growth-focused product portfolio."
              },
              {
                year: "November 2025",
                title: "Malaysia Dealer Tour",
                description: "An international Malaysia Dealer Tour was organized to recognize and reward dealer loyalty, reinforcing trust and long-term partnerships beyond business."
              },
              {
                year: "December 2025",
                title: "ISO Certification",
                description: "Cropchem achieved ISO Certification, reflecting its commitment to quality standards, structured processes, and continuous improvement."
              },
              {
                year: "January 2026",
                title: "EXILE Product Launch",
                description: "The launch of EXILE, a premium new-generation product, marked a strong new beginning—showcasing innovation, confidence, and Cropchem’s forward-looking vision."
              }
            ].map((milestone, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-secondary border-4 border-white shadow-sm" />

                <div className="bg-white p-6 rounded-xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-secondary font-bold text-sm tracking-wider uppercase mb-1 block">
                    {milestone.year}
                  </span>
                  <h4 className="font-display font-bold text-xl text-primary mb-3">
                    {milestone.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
