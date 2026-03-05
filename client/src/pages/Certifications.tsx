import { motion } from "framer-motion";

import { SectionHeader } from "@/components/SectionHeader";

import certificateImg from "@assets/image_1767450492286.webp";
import isoBadgeImg from "@assets/IMG_3307_1767450366637.webp";

export default function Certifications() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-zinc-900 py-24 text-center iso-pattern">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center p-2 bg-white rounded-2xl mb-8 backdrop-blur-sm"
          >
            <img
              src={isoBadgeImg}
              alt="ISO Badge"
              className="h-20 w-auto"
            />
          </motion.div>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
            Quality Assurance
          </h1>
          <p className="text-gray-400 text-lg">Committed to international standards of excellence.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="ISO Certification" centered />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-4 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 relative overflow-hidden flex flex-col items-center"
          >
            <div className="relative z-10 w-full">
              <img
                src={certificateImg}
                alt="ISO 9001:2015 Certificate"
                className="w-full h-auto rounded-lg shadow-lg border border-gray-100"
              />

              <div className="mt-12 text-center space-y-6">
                <div className="bg-zinc-50 inline-block px-8 py-4 rounded-lg border border-zinc-200">
                  <span className="text-sm text-muted-foreground uppercase tracking-widest block mb-1">
                    Biostimulant License Number
                  </span>
                  <span className="font-mono text-xl md:text-2xl font-bold text-primary tracking-wider">
                    LCBWD0720250130
                  </span>
                </div>

                <div className="mt-12 text-center space-y-6">
                  <div className="bg-zinc-50 inline-block px-8 py-4 rounded-lg border border-zinc-200">
                    <span className="text-sm text-muted-foreground uppercase tracking-widest block mb-1">
                      Fertilizer License Number
                    </span>
                    <span className="font-mono text-xl md:text-2xl font-bold text-primary tracking-wider">
                      LCFWD2025090348
                    </span>
                  </div>

                  <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-lg">
                    This certification validates our commitment to consistent quality,
                    customer satisfaction, and continuous improvement in our manufacturing
                    and supply processes.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
