import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Factory, Sprout, Award, Timer, Lightbulb, Box, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Badge } from "@/components/ui/badge";

import exileImg from "@assets/IMG_3120_1767812453679.webp";


import hero1 from "@assets/stock_images/modern_green_agricul_c0259960.webp";
import hero2 from "@assets/stock_images/modern_green_agricul_1d725b24.webp";
import hero3 from "@assets/stock_images/modern_green_agricul_5d55a854.webp";
import hero4 from "@assets/stock_images/modern_green_agricul_7101e4f1.webp";
import hero5 from "@assets/stock_images/modern_green_agricul_db50627e.webp";
import currentUpdateImg from "@assets/current_update.webp";

const heroImages = [hero1, hero2, hero3, hero4, hero5];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-zinc-900 overflow-hidden">
        {/* Background Slider */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={heroImages[currentImageIndex]}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.6, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-1 mb-6 border border-secondary text-secondary rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase bg-secondary/10 backdrop-blur-sm">
              INDIA’S TRUSTED SCIENCE-DRIVEN AGRICULTURAL SOLUTIONS
            </span>
            <h1 className="font-display font-black text-5xl sm:text-6xl md:text-8xl text-white leading-tight md:leading-none mb-4 uppercase tracking-tighter">
              VISIBLE IMPROVEMENT IN <br className="hidden sm:block" />
              <span className="text-secondary">72 HOURS</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl font-medium">
              Faster absorption and visible plant response
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-20">
              <Link href="/products">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-secondary text-primary font-black rounded-lg hover:bg-secondary/90 transition-all flex items-center justify-center gap-2 group uppercase tracking-widest"
                >
                  View Products
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 border-2 border-white/40 text-white font-black rounded-lg hover:bg-white/10 transition-all backdrop-blur-sm uppercase tracking-widest"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>

            {/* Feature Cards Grid (Inspired by the provided image) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10 overflow-hidden rounded-xl backdrop-blur-md">
              <div className="bg-white/10 hover:bg-white/20 transition-colors p-6 flex items-center gap-4 border-r border-white/10">
                <div className="bg-secondary/20 p-3 rounded-full border border-secondary/30">
                  <Timer className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <div className="text-white font-black text-2xl leading-none">FAST</div>
                  <div className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">ACTION FORMULA</div>
                </div>
              </div>
              <div className="bg-white p-6 flex items-center gap-4 border-r border-white/10">
                <div className="bg-primary/20 p-3 rounded-full border border-primary/30">
                  <Timer className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-primary font-black text-2xl leading-none">72</div>
                  <div className="text-[10px] text-primary/60 uppercase font-bold tracking-widest">VISIBLE IMPROVEMENT IN HOURS</div>
                </div>
              </div>
              <div className="bg-white/10 hover:bg-white/20 transition-colors p-6 flex items-center gap-4 border-r border-white/10">
                <div className="bg-secondary/20 p-3 rounded-full border border-secondary/30">
                  <Lightbulb className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <div className="text-white font-black text-sm uppercase tracking-tighter leading-tight">INNOVATIVE</div>
                  <div className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">PRODUCT RANGE</div>
                </div>
              </div>
              <div className="bg-white/10 hover:bg-white/20 transition-colors p-6 flex items-center gap-4">
                <div className="bg-secondary/20 p-3 rounded-full border border-secondary/30">
                  <Box className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <div className="text-white font-black text-sm uppercase tracking-tighter leading-tight">GRANULES</div>
                  <div className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">PRODUCTS</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Current Update Section */}
      <section className="py-24 bg-zinc-50 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <SectionHeader
              title="Current Update"
              subtitle="Latest from CropChem"
              centered
            />

            <div className="mt-12 relative group max-w-7xl mx-auto">
              {/* Navigation Arrows */}
              <button
                onClick={() => {
                  const slider = document.getElementById("update-slider");
                  if (slider) slider.scrollBy({ left: -400, behavior: "smooth" });
                }}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-6 z-10 bg-white p-3 rounded-full shadow-xl border border-gray-100 text-primary hover:bg-secondary hover:text-white transition-all transform scale-90 md:scale-100 opacity-90 hover:opacity-100"
                aria-label="Previous"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <button
                onClick={() => {
                  const slider = document.getElementById("update-slider");
                  if (slider) slider.scrollBy({ left: 400, behavior: "smooth" });
                }}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-6 z-10 bg-white p-3 rounded-full shadow-xl border border-gray-100 text-primary hover:bg-secondary hover:text-white transition-all transform scale-90 md:scale-100 opacity-90 hover:opacity-100"
                aria-label="Next"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              {/* Slider Container */}
              <div
                id="update-slider"
                className="flex overflow-x-auto gap-6 snap-x snap-mandatory pb-8 pt-4 px-4 -mx-4"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                <style dangerouslySetInnerHTML={{ __html: `#update-slider::-webkit-scrollbar { display: none; }` }} />

                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="min-w-[100%] md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] snap-center rounded-3xl shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300 flex-shrink-0 group/card cursor-pointer overflow-hidden relative bg-white flex items-center justify-center p-4 aspect-[4/3]"
                  >
                    <img
                      src={currentUpdateImg}
                      alt={`Current Update ${item}`}
                      className="w-full h-full object-contain group-hover/card:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Product Preview */}
      <section className="py-24 bg-white iso-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeader
              title="Featured Product"
              subtitle="Innovation in Agriculture"
              centered
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center max-w-6xl w-full mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 p-8 flex items-center justify-center group"
            >
              <div className="absolute top-6 right-6 z-10">
                <Badge className="bg-secondary text-primary font-bold px-4 py-2 text-sm shadow-lg animate-pulse">
                  <Star className="w-4 h-4 mr-1 fill-current" />
                  New & Best Seller
                </Badge>
              </div>
              <img
                src={exileImg}
                alt="Exile Product"
                className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500"
              />
            </motion.div>

            <div className="space-y-8">
              <div>
                <h3 className="text-4xl font-display font-black text-primary mb-4 uppercase tracking-tight">EXILE</h3>
                <div className="h-1.5 w-20 bg-secondary mb-8 rounded-full" />
                <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                  Unlock the full potential of your crops with Exile. Our scientifically formulated
                  solution enhances nutrient uptake, strengthens root systems, and improves
                  resistance to environmental stress.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Advanced Biostimulant Formula",
                  "Enhanced Nutrient Absorption",
                  "Eco-Friendly Composition",
                  "Field-Tested Results"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0" />
                    <span className="font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link href="/products">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all flex items-center gap-2 shadow-lg shadow-primary/20"
                  >
                    Learn more about Exile
                    <ArrowRight className="h-5 w-5" />
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Factory className="h-10 w-10 text-secondary" />,
                title: "Manufacturing Excellence",
                desc: "State-of-the-art facilities ensuring consistent quality in every batch."
              },
              {
                icon: <Award className="h-10 w-10 text-secondary" />,
                title: "ISO Certified",
                desc: "ISO 9001:2015 certified processes (Lic No. LCBWD0720250130)."
              },
              {
                icon: <Sprout className="h-10 w-10 text-secondary" />,
                title: "Sustainable Growth",
                desc: "Focused on products that enhance yield while respecting the environment."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="mb-6 bg-primary/5 w-20 h-20 rounded-2xl flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="font-display font-bold text-xl mb-3 text-primary">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Farmer Reviews Section - Vertical Marquee */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Farmer Success Stories"
            subtitle="Real results from real farmers"
            centered
          />

          <div className="mt-16 relative h-[400px] md:h-[600px] overflow-hidden mask-vertical-fade">
            <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-white via-transparent to-white h-full w-full" />

            <motion.div
              animate={{ y: [0, -1000] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop"
              }}
              className="space-y-6 pb-6"
            >
              {[
                {
                  name: "Sanjay Patil",
                  product: "Rootbunch 98",
                  review: "98 दिल्यानंतर मुळं पांढरी, जाड आणि मजबूत दिसायला लागली. रोप पटकन धरलं."
                },
                {
                  name: "Vitthal Pawar",
                  product: "Nutrisoil-GR",
                  review: "ऊस लागवडीनंतर जमिनीत दिलं. फुटवे चांगले आले आणि मुळं खोलवर गेली."
                },
                {
                  name: "Ramdas Jadhav",
                  product: "Destiny+",
                  review: "मी स्ट्रॉबेरी पिकावर Destiny+ वापरलं. झाडांची वाढ चांगली झाली, रोप मजबूत झालं आणि पानांचा रंग गडद हिरवा दिसायला लागला."
                },
                {
                  name: "Vilas Kadam",
                  product: "Swing Plus",
                  review: "Swing Plus दिल्यानंतर झाडाला फुटवे जास्त आले. झाड भरदार झालं आणि वाढ मजबूत झाली."
                },
                {
                  name: "Deepak Shinde",
                  product: "K+ Magic",
                  review: "मी K+ Magic डाळिंब फवारणी केली. फळाचा साइज आणि वजन दोन्ही वाढले. फळे एकसारखी आली."
                },
                // Duplicate for seamless loop
                {
                  name: "Sanjay Patil",
                  product: "Rootbunch 98",
                  review: "98 दिल्यानंतर मुळं पांढरी, जाड आणि मजबूत दिसायला लागली. रोप पटकन धरलं."
                },
                {
                  name: "Vitthal Pawar",
                  product: "Nutrisoil-GR",
                  review: "ऊस लागवडीनंतर जमिनीत दिलं. फुटवे चांगले आले आणि मुळं खोलवर गेली."
                },
                {
                  name: "Ramdas Jadhav",
                  product: "Destiny+",
                  review: "मी स्ट्रॉबेरी पिकावर Destiny+ वापरलं. झाडांची वाढ चांगली झाली, रोप मजबूत झालं आणि पानांचा रंग गडद हिरवा दिसायला लागला."
                },
                {
                  name: "Vilas Kadam",
                  product: "Swing Plus",
                  review: "Swing Plus दिल्यानंतर झाडाला फुटवे जास्त आले. झाड भरदार झालं आणि वाढ मजबूत झाली."
                },
                {
                  name: "Deepak Shinde",
                  product: "K+ Magic",
                  review: "मी K+ Magic डाळिंब फवारणी केली. फळाचा साइज आणि वजन दोन्ही वाढले. फळे एकसारखी आली."
                }
              ].map((review, i) => (
                <div
                  key={i}
                  className={`p-8 rounded-3xl border max-w-2xl mx-auto shadow-sm hover:shadow-md transition-all duration-300 ${i % 2 === 0
                    ? "bg-gradient-to-br from-green-50 to-white border-green-100 hover:border-green-200 ring-1 ring-green-100/50"
                    : "bg-gradient-to-br from-amber-50 to-white border-amber-100 hover:border-amber-200 ring-1 ring-amber-100/50"
                    }`}
                >
                  <div className="flex gap-4 items-start">
                    <div className={`p-3 rounded-full shrink-0 ${i % 2 === 0 ? "bg-green-100 text-green-600" : "bg-amber-100 text-amber-600"
                      }`}>
                      <Star className="h-6 w-6 fill-current" />
                    </div>
                    <div>
                      <p className="text-lg text-zinc-700 font-medium italic mb-4 leading-relaxed">"{review.review}"</p>
                      <div>
                        <h4 className={`font-bold text-xl ${i % 2 === 0 ? "text-green-800" : "text-amber-800"
                          }`}>{review.name}</h4>
                        <Badge variant="outline" className={`mt-2 border-0 font-semibold px-3 py-1 ${i % 2 === 0
                          ? "bg-green-100 text-green-700"
                          : "bg-amber-100 text-amber-700"
                          }`}>
                          Used: {review.product}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
