import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
    ArrowRight, CheckCircle2, X, Leaf,
    Users, Award, BarChart3, Package, Globe, Heart
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";

export default function Products() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");

    const filteredProducts = products.filter(product => {
        const matchesCategory = activeCategory === "all" ||
            (activeCategory === "growth" && (product.category.includes("Growth") || product.category.includes("Yield") || product.category.includes("Tonic"))) ||
            (activeCategory === "soil" && (product.category.includes("Soil") || product.category.includes("Root"))) ||
            (activeCategory === "protection" && (product.category.includes("Bio") || product.category.includes("Adjuvant"))) ||
            (activeCategory === "nutrition" && (product.category.includes("Supplement") || product.category.includes("Micronutrient") || product.category.includes("Amino")));

        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.category.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    const stats = [
        { icon: <Package className="w-6 h-6" />, value: products.length, label: "Specialized Products", color: "text-blue-600" },
        { icon: <Leaf className="w-6 h-6" />, value: "100%", label: "Research Backed", color: "text-green-600" },
        { icon: <Globe className="w-6 h-6" />, value: "50+", label: "Crop Types", color: "text-amber-600" },
        { icon: <Award className="w-6 h-6" />, value: "24/7", label: "Expert Support", color: "text-purple-600" },
        { icon: <Users className="w-6 h-6" />, value: "1000+", label: "Happy Farmers", color: "text-red-600" },
        { icon: <BarChart3 className="w-6 h-6" />, value: "30%", label: "Average Yield Increase", color: "text-secondary" },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white pb-24">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-primary via-primary to-emerald-900 pt-32 pb-20 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3),transparent_70%)]" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl mb-6 uppercase tracking-tight">
                            Premium <span className="text-secondary">Agricultural</span> Solutions
                        </h1>
                        <p className="text-lg sm:text-xl text-zinc-200 font-medium mb-8 leading-relaxed">
                            Scientifically formulated, export-quality agricultural inputs designed for modern farming.
                            Maximize yield, quality, and profitability with our precision products.
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-xl mx-auto mb-8">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search products by name, category, or benefit..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-zinc-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                                />
                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="text-white hover:bg-white/20"
                                        onClick={() => setSearchTerm("")}
                                    >
                                        {searchTerm ? <X className="w-4 h-4" /> : "🔍"}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="container mx-auto px-4 -mt-10 relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-3xl shadow-xl p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6"
                >
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color.replace('text-', 'bg-')}/10 mb-3`}>
                                <span className={stat.color}>{stat.icon}</span>
                            </div>
                            <div className="text-2xl font-black text-primary mb-1">{stat.value}</div>
                            <div className="text-sm text-zinc-600 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 mt-12">


                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredProducts.map((product, index) => (
                        <motion.div
                            key={product.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.4 }}
                            className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-zinc-100 overflow-hidden hover:-translate-y-2"
                        >
                            {/* Badge */}
                            {product.badge && (
                                <div className="absolute top-4 right-4 z-10">
                                    <Badge className="bg-gradient-to-r from-secondary to-amber-500 text-primary font-bold px-3 py-1.5 shadow-lg">
                                        {product.badge}
                                    </Badge>
                                </div>
                            )}

                            {/* Product Image */}
                            <div className="relative h-56 overflow-hidden bg-gradient-to-br from-zinc-50 to-white group-hover:from-zinc-100 group-hover:to-white transition-all duration-500">
                                <motion.img
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                    src={product.image}
                                    alt={product.name}
                                    className="h-full w-full object-contain p-6"
                                />
                            </div>

                            {/* Product Info */}
                            <div className="p-6 space-y-4">
                                <div className="space-y-2">
                                    {/* Category moved here to prevent overlap */}
                                    <Badge variant="outline" className="mb-2 border-zinc-200 text-xs font-medium text-muted-foreground w-fit">
                                        {product.category}
                                    </Badge>

                                    <h3 className="font-display font-black text-xl text-primary uppercase tracking-tight group-hover:text-secondary transition-colors">
                                        {product.name}
                                    </h3>
                                    <div className="h-1 w-12 bg-secondary rounded-full" />
                                </div>

                                <p className="text-zinc-600 text-sm font-medium leading-relaxed line-clamp-2">
                                    {product.description}
                                </p>

                                {/* Benefit */}
                                <div className="flex items-center gap-2 text-primary font-bold text-sm bg-secondary/10 px-3 py-2 rounded-lg">
                                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                                    <span className="truncate">{product.benefit}</span>
                                </div>

                                {/* Key Features */}
                                <div className="flex flex-wrap gap-2">
                                    {product.features?.slice(0, 3).map((feature, idx) => (
                                        <span
                                            key={idx}
                                            className="inline-flex items-center gap-1 px-3 py-1 bg-zinc-100 text-zinc-700 rounded-full text-xs font-medium"
                                        >
                                            <CheckCircle2 className="w-3 h-3" />
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="px-6 pb-6 pt-4 border-t border-zinc-100 flex flex-col gap-3">
                                <Link href={`/product/${encodeURIComponent(product.name)}`} className="w-full">
                                    <Button
                                        variant="outline"
                                        className="w-full border-primary text-primary hover:bg-primary hover:text-white font-bold h-12 rounded-xl transition-all group/btn"
                                    >
                                        View Full Details
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                                <Link href="/contact" className="w-full">
                                    <Button className="w-full bg-gradient-to-r from-primary to-emerald-700 hover:from-primary/90 hover:to-emerald-800 text-white font-bold h-12 rounded-xl shadow-lg shadow-primary/20 group-hover:scale-[1.02] transition-transform">
                                        Get Quote
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredProducts.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-zinc-100 flex items-center justify-center">
                            <Package className="w-12 h-12 text-zinc-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-primary mb-2">No products found</h3>
                        <p className="text-zinc-600 max-w-md mx-auto">
                            Try adjusting your search or filter to find what you're looking for.
                        </p>
                        <Button
                            variant="outline"
                            className="mt-6"
                            onClick={() => {
                                setSearchTerm("");
                                setActiveCategory("all");
                            }}
                        >
                            Reset Filters
                        </Button>
                    </motion.div>
                )}



                {/* CTA Section */}
                <div className="mt-24 bg-gradient-to-br from-primary via-primary to-emerald-900 rounded-3xl p-12 text-white text-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3),transparent_70%)]" />
                    </div>
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <Heart className="w-16 h-16 mx-auto mb-6 text-secondary" />
                        <h2 className="font-display font-black text-3xl sm:text-4xl mb-4 uppercase">Need Expert Guidance?</h2>
                        <p className="text-lg sm:text-xl text-zinc-200 mb-8">
                            Our agricultural specialists are here to help you choose the perfect products for your specific crop needs and farming conditions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="w-full sm:w-auto">
                                <Button size="lg" className="w-full sm:w-auto bg-secondary text-primary hover:bg-secondary/90 font-bold px-8 py-6 rounded-xl shadow-xl text-lg">
                                    Contact Our Experts
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </Link>
                            <a href="tel:+919529932941" className="w-full sm:w-auto">
                                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10 font-bold px-8 py-6 rounded-xl text-lg relative z-20 pointer-events-auto">
                                    📞 Call: +91 95299 32941
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
