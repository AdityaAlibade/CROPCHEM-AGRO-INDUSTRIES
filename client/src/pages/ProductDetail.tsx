import { useState, useEffect } from "react";
import { useRoute, Link } from "wouter";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

// Available packings
const PACKINGS = [
    { id: "100ml", label: "100ml" },
    { id: "250ml", label: "250ml" },
    { id: "500ml", label: "500ml" },
    { id: "1L", label: "1 Liter" },
];

export default function ProductDetail() {
    const [, params] = useRoute("/product/:name");

    const [selectedPacking, setSelectedPacking] = useState(PACKINGS[2]);

    // Parse product name from URL or use a fallback
    const decodedName = params?.name ? decodeURIComponent(params.name) : "";
    const product = products.find((p) => p.name.toLowerCase() === decodedName.toLowerCase());

    useEffect(() => {
        if (product) {
            document.title = `${product.name} | Corporate Web Builder`;
            let metaDesc = document.querySelector('meta[name="description"]');
            if (!metaDesc) {
                metaDesc = document.createElement('meta');
                metaDesc.setAttribute('name', 'description');
                document.head.appendChild(metaDesc);
            }
            metaDesc.setAttribute('content', product.description);
        } else {
            document.title = `Product Not Found | Corporate Web Builder`;
        }
    }, [product]);

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-50 pt-20">
                <h1 className="text-3xl font-bold text-primary mb-4">Product Not Found</h1>
                <Link href="/products">
                    <Button variant="outline"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Products</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-zinc-50 pt-24 pb-20">
            <div className="container mx-auto px-4">
                {/* Breadcrumb / Back Navigation */}
                <div className="mb-8">
                    <Link href="/products">
                        <Button variant="ghost" className="text-zinc-500 hover:text-primary pl-0">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
                        </Button>
                    </Link>
                </div>

                {/* Main Product Container */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-zinc-100">
                    <div className="flex flex-col lg:flex-row">

                        {/* Left Section: Image */}
                        <div className="w-full lg:w-1/2 bg-gradient-to-br from-zinc-50 to-zinc-100 p-8 lg:p-16 flex items-center justify-center min-h-[400px]">
                            <div className="relative w-full max-w-md aspect-square">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-contain mix-blend-multiply drop-shadow-2xl"
                                />
                                {product.badge && (
                                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-secondary to-amber-500 text-primary font-bold px-3 py-1.5 shadow-lg text-sm">
                                        {product.badge}
                                    </Badge>
                                )}
                            </div>
                        </div>

                        {/* Right Section: Details */}
                        <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                            <Badge variant="outline" className="w-fit mb-4 text-zinc-500">{product.category}</Badge>

                            <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-primary uppercase tracking-tight mb-4">
                                {product.name}
                            </h1>

                            <p className="text-xl text-zinc-600 mb-8 leading-relaxed">
                                {product.description}
                            </p>

                            {/* Size Selector */}
                            <div className="mb-6">
                                <h3 className="font-bold text-zinc-900 mb-3">Available Packing</h3>
                                <div className="flex flex-wrap gap-3">
                                    {PACKINGS.map((packing) => (
                                        <button
                                            key={packing.id}
                                            onClick={() => setSelectedPacking(packing)}
                                            className={`px-4 py-2 rounded-xl font-medium border-2 transition-all duration-200 ${selectedPacking.id === packing.id
                                                ? "border-primary bg-primary text-white"
                                                : "border-zinc-200 text-zinc-600 hover:border-primary/50"
                                                }`}
                                        >
                                            {packing.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Information Tabs Section */}
                            <div className="mt-12 bg-white rounded-3xl shadow-lg border border-zinc-100 p-6 lg:p-10">
                                <Tabs defaultValue="description" className="w-full">
                                    <TabsList className="w-full flex flex-col sm:grid sm:grid-cols-3 p-1 bg-zinc-100/50 rounded-2xl mb-8 h-auto gap-2">
                                        <TabsTrigger value="description" className="rounded-xl text-base py-3 w-full data-[state=active]:bg-white data-[state=active]:shadow-sm">Description</TabsTrigger>
                                        <TabsTrigger value="benefits" className="rounded-xl text-base py-3 w-full data-[state=active]:bg-white data-[state=active]:shadow-sm">USP / Benefits</TabsTrigger>
                                        <TabsTrigger value="usage" className="rounded-xl text-base py-3 w-full data-[state=active]:bg-white data-[state=active]:shadow-sm">Usage</TabsTrigger>
                                    </TabsList>

                                    <div className="min-h-[200px] px-2">
                                        <TabsContent value="description" className="space-y-4 animate-in fade-in-50 duration-500">
                                            <h3 className="text-2xl font-bold text-primary mb-4">Product Overview</h3>
                                            <p className="text-zinc-700 text-lg leading-relaxed">{product.longDescription}</p>
                                        </TabsContent>

                                        <TabsContent value="benefits" className="animate-in fade-in-50 duration-500">
                                            <h3 className="text-2xl font-bold text-primary mb-6">Key Benefits</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {product.keyBenefits?.map((benefit, idx) => (
                                                    <div key={idx} className="flex items-start gap-4 p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
                                                        <div className="mt-1 text-secondary p-2 bg-white rounded-lg shadow-sm">{benefit.icon}</div>
                                                        <p className="text-zinc-700 font-medium text-lg pt-1">{benefit.text}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </TabsContent>

                                        <TabsContent value="usage" className="animate-in fade-in-50 duration-500">
                                            <h3 className="text-2xl font-bold text-primary mb-6">Directions for Use</h3>
                                            <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
                                                <p className="text-zinc-700 text-lg leading-relaxed mb-6">
                                                    For optimal results, follow standard application guidelines based on your crop type.
                                                    Always refer to the package label for specific dosage details.
                                                </p>

                                                <h4 className="font-bold text-zinc-900 mb-4 text-lg">Product Features:</h4>
                                                <ul className="space-y-3">
                                                    {product.features?.map((feature, idx) => (
                                                        <li key={idx} className="flex items-center gap-3 text-zinc-700">
                                                            <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                                                            <span className="text-lg">{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </TabsContent>
                                    </div>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
