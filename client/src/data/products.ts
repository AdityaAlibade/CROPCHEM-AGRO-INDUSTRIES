import React from "react";
import {
    TrendingUp, Zap, Leaf, Target, Shield, Thermometer, Sprout, Bug, Apple, Layers as Soil, Package, Shield as ShieldIcon, Droplets
} from "lucide-react";

// Import images
import accurateImg from "@assets/Accuarte_100_1768407758964.webp";
import aminoSparkImg from "@assets/Amino_Spark_1768407758965.webp";
import destinyImg from "@assets/Destiny_+_1768407758966.webp";
import exileImg from "@assets/Exile_1768407758968.webp";
import joystickImg from "@assets/Joystick_1768407758969.webp";
import kMagicImg from "@assets/K+Magic_1768407758970.webp";
import nutrisoilImg from "@assets/Nutrisoil-GR_1768407758971.webp";
import powerPlantImg from "@assets/Power_Plant_1768407758972.webp";
import startupImg from "@assets/Startup_1768407758974.webp";
import thrillerImg from "@assets/Thriller_+_1768407758975.webp";
import boronImg from "@assets/Boron_20_1769174753343.webp";
import rootXFlowImg from "@assets/Root_X_Flow_1769174753345.webp";

import rootBunch98Img from "@assets/Root_Bunch_98_1769366933500.webp";
import swingPlusImg from "@assets/Swing_Plus_1769366933500.webp";

export const products = [
    {
        name: "Swing Plus",
        description: "Swing Plus is a premium crop enhancer that boosts branching, flowering, and yield.",
        image: swingPlusImg,
        badge: "🌸 Flowering Specialist",
        benefit: "Improves branching, flowering, and fruit setting for higher yield and healthier crops.",
        longDescription: "Swing Plus is a premium crop enhancement solution from Cropchem Agro developed to improve branching growth, flowering performance, and fruit setting. It plays a vital role during the flowering stage by increasing the number of female buds, ensuring proper bud formation and better fruit set, which results in higher yield and productivity. Swing Plus also helps protect crops from blight diseases in vegetables and fruit orchards. Additionally, it reduces stress caused by temperature fluctuations, moisture stress, and adverse weather, keeping crops healthy, strong, and productive.",
        keyBenefits: [
            { icon: React.createElement(TrendingUp, { className: "w-4 h-4" }), text: "Promotes excellent branching growth" },
            { icon: React.createElement(Target, { className: "w-4 h-4" }), text: "Increases female buds during flowering" },
            { icon: React.createElement(Zap, { className: "w-4 h-4" }), text: "Ensures proper bud setting & fruit set" },
            { icon: React.createElement(Leaf, { className: "w-4 h-4" }), text: "Improves plant strength & crop health" },
            { icon: React.createElement(Shield, { className: "w-4 h-4" }), text: "Reduces stress & helps prevent blight" }
        ],
        targetCrops: ["Mango", "Soybean", "Tomato", "Brinjal", "Grapes", "Pomegranate", "Banana", "Coriander", "Fenugreek", "Ginger", "Potato", "Cotton", "Pigeon Pea (Tur)", "Gram", "Cereals", "Pulses", "Flowers", "Vegetables"],
        category: "Flowering Booster",
        features: ["Branching Enhancer", "Flower Booster", "Stress Defense"],
        results: ["More Female Buds", "Higher Fruit Set", "Healthier Crops"]
    },
    {
        name: "Destiny +",
        description: "Faster growth, greener plants, and better flowering with advanced seaweed-based nutrition.",
        image: destinyImg,
        badge: "📈 Yield Maximizer",
        benefit: "Destiny+ Plant Growth Tonic",
        longDescription: "Destiny+ is a powerful plant growth tonic formulated with seaweed extract, amino acids. It supports crops at all growth stages and promotes stronger, greener, and healthier plants. Destiny+ enhances branching, leaf colour, flowering, and fruit development. Regular application improves plant immunity, reduces stress, and ensures long-lasting crop vitality. In crops like sugarcane, it encourages broad leaves, strong shoots, and vigorous growth, resulting in better yield and crop quality.",
        keyBenefits: [
            { icon: React.createElement(TrendingUp, { className: "w-4 h-4" }), text: "Promotes fast and healthy plant growth" },
            { icon: React.createElement(Zap, { className: "w-4 h-4" }), text: "Enhances plant metabolic activity" },
            { icon: React.createElement(Leaf, { className: "w-4 h-4" }), text: "Develops deep green foliage & stronger leaves" },
            { icon: React.createElement(Target, { className: "w-4 h-4" }), text: "Improves flowering and fruit setting" },
            { icon: React.createElement(Shield, { className: "w-4 h-4" }), text: "Boosts plant immunity & stress tolerance" }
        ],
        targetCrops: ["Onion", "Tomato", "Cucumber", "Ginger", "Sugarcane", "Soybean", "Pigeon Pea (Tur)", "Strawberry", "Chili", "Pomegranate", "Banana", "Vegetables", "Fruit Crops", "Flowers", "Pulses", "Vine Crops"],
        category: "Yield Booster",
        features: ["Nutrient Efficiency", "Vigor Enhancer", "Metabolism Booster"],
        results: ["25% higher biomass", "Better stress recovery", "Uniform crop growth"]
    },
    {
        name: "Amino Spark",
        description: "Amino Spark is a liquid amino acid-based growth promoter for healthier and stronger crops.",
        image: aminoSparkImg,
        badge: "Best & Growth Promoter",
        benefit: "Boosts plant growth, flowering, and stress tolerance with essential amino acids.",
        longDescription: "Amino Spark is a premium liquid formulation containing a balanced blend of essential amino acids that support overall plant growth and development. It enhances physiological activities, improves nutrient absorption, and stimulates vegetative growth, flowering, and fruit setting. Regular application improves crop vigour, yield quality, and plant immunity while helping crops tolerate environmental stresses such as heat, drought, and adverse conditions. Amino Spark ensures healthier plants and better productivity.",
        keyBenefits: [
            { icon: React.createElement(TrendingUp, { className: "w-4 h-4" }), text: "Promotes fast and healthy plant growth" },
            { icon: React.createElement(Zap, { className: "w-4 h-4" }), text: "Enhances physiological & metabolic activity" },
            { icon: React.createElement(Leaf, { className: "w-4 h-4" }), text: "Improves flowering & fruit setting" },
            { icon: React.createElement(Shield, { className: "w-4 h-4" }), text: "Increases stress tolerance & plant immunity" },
            { icon: React.createElement(Target, { className: "w-4 h-4" }), text: "Improves yield & produce quality" }
        ],
        targetCrops: ["Cotton", "Tomato", "Ginger", "Cabbage", "Potato", "Onion", "Soybean", "Turmeric", "Grapes", "Chilli", "Pomegranate", "Banana", "Vegetables", "Fruit Crops", "Flower Crops", "Sugarcane", "Field Crops"],
        category: "Amino Acid Supplement",
        features: ["Energy Efficient", "Quality Enhancer"],
        results: ["20% better fruit set", "Enhanced color & flavor", "Improved shelf life"]
    },
    {
        name: "Exile",
        description: "Premium botanical & seaweed extract for complete crop health and natural plant stimulation.",
        image: exileImg,
        badge: "🔥 New & Best Seller",
        benefit: "Advanced botanical formula for superior crop performance",
        longDescription: "Exile is a revolutionary botanical & seaweed extract designed to unlock the full potential of high-value crops with natural stimulants and complete nutrition support.",
        keyBenefits: [
            { icon: React.createElement(TrendingUp, { className: "w-4 h-4" }), text: "Protecting Plants" },
        ],
        targetCrops: ["High-value vegetables", "Fruits", "Cash crops", "Greenhouse plants"],
        category: "Growth Enhancer",
        features: ["Rapid Action", "Multi-Stress Resistant"],
        results: ["72-hour visible growth", "30% higher yield", "Protects Plant"]
    },
    {
        name: "Power Plant +",
        description: "An advanced organic growth tonic that promotes strong roots, healthy foliage, and higher crop productivity.",
        image: powerPlantImg,
        badge: "⚡ Fast Growth",
        benefit: "High concentration organic nutrients",
        longDescription: "Power Plant + is an advanced growth tonic designed to enhance root development, nutrient absorption, and overall plant growth. It supports crops from early vegetative stage to flowering and fruiting, ensuring healthy and vigorous plants. When applied through soil or drip, it accelerates white root formation, while foliar application improves shoot growth, flowering, and fruit setting. Power Plant + helps achieve balanced crop development, better quality produce, and higher yields across all crop types.",
        keyBenefits: [
            { icon: React.createElement(Thermometer, { className: "w-4 h-4" }), text: "Promotes strong and healthy root development" },
            { icon: React.createElement(Soil, { className: "w-4 h-4" }), text: "Improves nutrient uptake from soil" },
            { icon: React.createElement(Shield, { className: "w-4 h-4" }), text: "Enhances vegetative growth and foliage health" },
            { icon: React.createElement(Sprout, { className: "w-4 h-4" }), text: "Increases number of flowers and fruits" },
            { icon: React.createElement(Target, { className: "w-4 h-4" }), text: "Boosts overall crop yield and quality" }
        ],
        targetCrops: ["Onion", "Potato", "Soybean", "Ginger", "Pomegranate", "Sugarcane", "Mango", "Strawberry", "Tomato", "All Fruit Crops", "Vegetables", "Pulses", "Flowers"],
        category: "Stress Management",
        features: ["Seaweed Extract", "Stress Resistant", "Soil Health"],
        results: ["Better drought tolerance", "Improved quality", "Higher market value"]
    },
    {
        name: "Root X Flo",
        description: "ROOT-X FLO is a liquid humic and fulvic acid soil conditioner for better roots and soil health.",
        image: rootXFlowImg,
        badge: "⚡ Root Activator",
        benefit: "Improves soil health and root growth with liquid humic and fulvic acids.",
        longDescription: "ROOT-X FLO is a liquid formulation containing humic acid and fulvic acid (25.05%) designed to improve soil structure and increase the water-holding capacity of soil. It ensures good soil aeration and creates a favourable environment for root growth and beneficial biological activity. ROOT-X FLO promotes better nutrient availability, supports healthy root development, and improves overall plant growth. Regular use helps maintain fertile soil and stronger crops.",
        keyBenefits: [
            { icon: React.createElement(TrendingUp, { className: "w-4 h-4" }), text: "Improves soil structure & fertility" },
            { icon: React.createElement(Zap, { className: "w-4 h-4" }), text: "Increases water-holding capacity of soil" },
            { icon: React.createElement(Leaf, { className: "w-4 h-4" }), text: "Promotes healthy root growth" },
            { icon: React.createElement(Target, { className: "w-4 h-4" }), text: "Enhances nutrient availability" },
            { icon: React.createElement(Shield, { className: "w-4 h-4" }), text: "Supports beneficial biological activity" }
        ],
        targetCrops: ["Onion", "Potato", "Cotton", "Tomato", "Banana", "Sugarcane", "Grapes", "Pomegranate", "Vegetables", "Fruit Crops", "Flowers", "Field Crops"],
        category: "Root Stimulant",
        features: ["Root Development", "Drought Tolerance", "Efficiency Booster"],
        results: ["Stronger plants", "Better drought survival", "Higher nutrient use"]
    },
    {
        name: "Thriller +",
        description: "Powerful solution for strong and healthy crops.",
        image: thrillerImg,
        badge: "⚡ Quick Fix",
        benefit: "Quick absorption formula - Results in 48 hours",
        longDescription: "Thriler is a powerful crop performance solution designed to support plant strength and maintain healthy crop development throughout the growing cycle. Its advanced formulation works efficiently on crops, helping plants stay active, balanced, and productive even under challenging field conditions.",
        keyBenefits: [
            { icon: React.createElement(Zap, { className: "w-4 h-4" }), text: "Supports strong and vigorous crop growth" },
            { icon: React.createElement(Leaf, { className: "w-4 h-4" }), text: "Helps maintain crop health during critical growth stages" },
            { icon: React.createElement(Droplets, { className: "w-4 h-4" }), text: "Promotes uniform plant development" },
            { icon: React.createElement(Sprout, { className: "w-4 h-4" }), text: "Reliable performance across different crops" }
        ],
        targetCrops: ["All vegetables", "Lawns", "Ornamentals", "Nursery plants"],
        category: "Growth Tonic",
        features: ["Fast Acting", "Deficiency Corrector", "Vigor Booster"],
        results: ["Rapid green-up", "Quick recovery", "Enhanced photosynthesis"]
    },
    {
        name: "Accurate 100",
        description: "Reliable formula for consistent crop performance.",
        image: accurateImg,
        badge: "🌱 High Protection",
        benefit: " Promotes strong and active plant growth.",
        longDescription: "Accurate 100 is a highly effective crop protection solution designed to support healthy plant growth and maintain crop vitality during critical growth stages. Its advanced formulation works efficiently on the crop surface, helping plants remain strong, clean, and productive throughout the season.",
        keyBenefits: [
            { icon: React.createElement(Bug, { className: "w-4 h-4" }), text: "Supports healthier and stronger crop growth" },
            { icon: React.createElement(Leaf, { className: "w-4 h-4" }), text: "Fast and reliable field performance" },
            { icon: React.createElement(Shield, { className: "w-4 h-4" }), text: "Helps maintain clean and damage-free crops" },
            { icon: React.createElement(Target, { className: "w-4 h-4" }), text: "Suitable for use in multiple crops" }
        ],
        targetCrops: ["Organic farms", "Vegetables", "Fruits", "Herbs"],
        category: "Bio-Pesticide",
        features: ["100% Natural", "Pollinator Safe", "Residue Free"],
        results: ["Effective pest control", "Safe for beneficials", "Export quality produce"]
    },
    {
        name: "K + Magic",
        description: "High-potassium formula for superior fruit weight, quality, color, and market value enhancement.",
        image: kMagicImg,
        badge: "🏆 Quality Enhancer",
        benefit: "Improves fruit weight & quality",
        longDescription: "K+ Magic is a premium gluconate-based potassium formulation designed to enhance fruit colour, size, and overall quality. Its highly absorbable potassium ensures quick uptake during the fruiting stage, helping improve shine, uniformity, and market appeal for better yield and profitability.",
        keyBenefits: [
            { icon: React.createElement(Apple, { className: "w-4 h-4" }), text: "Increases fruit weight" },
            { icon: React.createElement(TrendingUp, { className: "w-4 h-4" }), text: "Enhances color & flavor intensity" },
            { icon: React.createElement(Shield, { className: "w-4 h-4" }), text: "Enhances sweetness & taste" },
            { icon: React.createElement(Target, { className: "w-4 h-4" }), text: "Boosts yield & quality" },
            { icon: React.createElement(Zap, { className: "w-4 h-4" }), text: "Fast potassium absorption" }
        ],
        targetCrops: ["Onion", "Potato", "Pomegranate", "Sugarcane", "Mango", "Strawberry", "Tomato", "All Fruit Crops", "Flowering Vegetables", "Pulses"],
        category: "Potassium Supplement",
        features: ["Enhanced Colour", "Larger Size", "High Quality"],
        results: ["Premium quality", "Better prices", "Longer shelf life"]
    },
    {
        name: "Joystick",
        description: "Advanced Sticker, Spreader & Penetrator for Better Crop Protection.",
        image: joystickImg,
        badge: "⚡ Spray Booster",
        benefit: "Improves spray sticking, spreading, and penetration for stronger and longer-lasting crop protection.",
        longDescription: "The Joystick is an advanced sticker, spreader, and penetrator designed to enhance the performance of insecticides, fungicides, and plant tonics. It helps spray solutions spread evenly on leaf surfaces, stick firmly, and penetrate faster into plant tissues. When mixed with fungicides, it supports systematic movement inside the plant, providing deeper and long-lasting protection. The Joystick works efficiently in all seasons and climatic conditions. It can also be used through drip irrigation to improve soil condition and support healthier root growth.",
        keyBenefits: [
            { icon: React.createElement(TrendingUp, { className: "w-4 h-4" }), text: "Increases spray effectiveness by 30%–40%" },
            { icon: React.createElement(Zap, { className: "w-4 h-4" }), text: "Improves sticking, spreading & penetration" },
            { icon: React.createElement(Target, { className: "w-4 h-4" }), text: "Ensures uniform spray coverage on leaves" },
            { icon: React.createElement(Shield, { className: "w-4 h-4" }), text: "Provides systematic & long-lasting protection" },
            { icon: React.createElement(Leaf, { className: "w-4 h-4" }), text: "Enhances performance of pesticides & tonics" }
        ],
        targetCrops: ["Onion", "Tomato", "Cucumber", "Ginger", "Sugarcane", "Soybean", "Pigeon Pea (Tur)", "Strawberry", "Chili", "Pomegranate", "Banana", "Vegetables", "Fruit Crops", "Flowers", "Pulses", "Vine Crops"],
        category: "Spray Adjuvant",
        features: ["Cost Effective", "Enhanced Coverage", "Rain Resistant"],
        results: ["Better pest control", "Reduced chemical load", "Higher ROI"]
    },
    {
        name: "Root Bunch 98",
        description: "Rootbunch 98 is a humic and potassium-based root booster for strong white roots.",
        image: rootBunch98Img,
        badge: "⭐ High Humic Formula",
        benefit: "Promotes fast white root growth for stronger plants and better nutrient uptake.",
        longDescription: "Rootbunch 98 is a high-performance root growth promoter specially formulated to encourage fast and strong white root development. Healthy roots are the foundation of healthy plants, and Rootbunch 98 supports better nutrient absorption, stronger plant establishment, and improved crop growth. It contains a high concentration of humic acid (65%–70%) and potassium (8%–10%), which improves soil health, root zone activity, and plant metabolism. Rootbunch 98 is highly water-soluble and suitable for drip irrigation, drenching, and foliar spray, helping achieve better yield potential.",
        keyBenefits: [
            { icon: React.createElement(TrendingUp, { className: "w-4 h-4" }), text: "Promotes fast & strong white root development" },
            { icon: React.createElement(Zap, { className: "w-4 h-4" }), text: "Improves nutrient uptake from soil" },
            { icon: React.createElement(Leaf, { className: "w-4 h-4" }), text: "Enhances overall plant growth & vigour" },
            { icon: React.createElement(Target, { className: "w-4 h-4" }), text: "Improves soil structure & root zone activity" },
            { icon: React.createElement(Shield, { className: "w-4 h-4" }), text: "Supports plant strength & metabolism" }
        ],
        targetCrops: ["Ginger", "Sugarcane", "Onion", "Potato", "Pomegranate", "Grapes", "Watermelon", "Mango", "Soybean", "Vegetables", "Flowers", "Fruit Crops"],
        category: "Growth Enhancer",
        features: ["High Humic Acid (65-70%)", "Rich in Potassium", "Water Soluble"],
        results: ["Stronger Roots", "Better Nutrient Uptake", "Improved Soil Health"]
    },
    {
        name: "Nutrisoil-GR",
        description: "Granular soil conditioner that improves root growth and crop health.",
        image: nutrisoilImg,
        badge: "⭐ Granular Formula",
        benefit: "Builds strong white roots and healthier crops with advanced granular nutrition.",
        longDescription: "Nutrisoil GR is an advanced granular soil conditioner and plant growth enhancer formulated with seaweed extract, amino acids,and organic carbon. It is specially designed for basal soil application and is compatible with both chemical and organic fertilizers. Nutrisoil GR promotes fast and strong white root development, improves nutrient absorption, and enhances plant vigour. It also improves leaf colour and dark green appearance while supporting better soil structure and root zone activity. Regular use helps prevent footway and root-related problems, resulting in stable and uniform crop growth.",
        keyBenefits: [
            { icon: React.createElement(TrendingUp, { className: "w-4 h-4" }), text: "Promotes fast & strong white root growth" },
            { icon: React.createElement(Zap, { className: "w-4 h-4" }), text: "Improves nutrient uptake from soil" },
            { icon: React.createElement(Leaf, { className: "w-4 h-4" }), text: "Enhances plant vigour & crop health" },
            { icon: React.createElement(Target, { className: "w-4 h-4" }), text: "Improves leaf colour & dark green appearance" },
            { icon: React.createElement(Shield, { className: "w-4 h-4" }), text: "Supports soil structure & root zone activity" }
        ],
        targetCrops: ["Sugarcane", "Ginger", "Potato", "Mango", "Pomegranate", "Strawberry", "Tomato", "Brinjal", "Grapes", "Banana", "Cotton", "Fruit Crops", "Vegetables", "Flowers"],
        category: "Soil Conditioner",
        features: ["Long Lasting", "Soil Builder", "Water Efficient"],
        results: ["Healthier root & soil", "Sustainable farming"]
    },
    {
        name: "Nutrishaktee Boron 20%",
        description: "Nutrishaktee Boron 20% is a water-soluble boron fertilizer for healthy growth.",
        image: boronImg,
        badge: "⭐ Boron 20%",
        benefit: "Corrects boron deficiency and improves flowering, fruit set, and quality.",
        longDescription: "Nutrishaktee Boron 20% is a completely water-soluble and highly efficient boron micronutrient fertilizer formulated to correct boron deficiencies in soils and crops. Boron is an essential micronutrient required throughout the plant growth period for proper cell formation, flowering, and fruit development. This product supports prevents flower drop, reduces fruit cracking, and improves sugar translocation and calcium uptake. Regular application ensures healthy, green plants, better crop quality, and higher yields.",
        keyBenefits: [
            { icon: React.createElement(TrendingUp, { className: "w-4 h-4" }), text: "Corrects boron deficiency quickly" },
            { icon: React.createElement(Zap, { className: "w-4 h-4" }), text: "Improves flowering & fruit set" },
            { icon: React.createElement(Leaf, { className: "w-4 h-4" }), text: "Prevents flower drop & fruit cracking" },
            { icon: React.createElement(Target, { className: "w-4 h-4" }), text: "Enhances sugar movement & calcium uptake" },
            { icon: React.createElement(Shield, { className: "w-4 h-4" }), text: "Improves crop quality & yield" }
        ],
        targetCrops: ["Onion", "Tomato", "Cotton", "Sugarcane", "Cucumber", "Banana", "Pomegranate", "Grapes", "Soybean", "Maize", "Sunflower", "Chilli", "Cabbage", "Cauliflower", "Carrot", "Vegetables", "Fruit Crops"],
        category: "Micronutrient",
        features: ["High Purity", "Fast Acting", "Essential Nutrient"],
        results: ["Eliminates deficiency", "Better fruit quality", "Higher yields"]
    },
    {
        name: "Startup",
        description: "START-UP is an Ascophyllum nodosum seaweed extract for strong roots and early growth.",
        image: startupImg,
        badge: "🌱 Early Growth Booster",
        benefit: "Boosts early rooting, growth, and crop vigour with pure seaweed extract.",
        longDescription: "START-UP is a high-quality seaweed extract, specially formulated to enhance early crop establishment and overall plant growth. It promotes strong root development, improves nutrient uptake, and supports healthy vegetative growth. START-UP helps crops overcome stress conditions, improves flowering and fruit setting, and results in better crop vigour and higher yields. It is suitable for use on all types of crops.",
        keyBenefits: [
            { icon: React.createElement(TrendingUp, { className: "w-4 h-4" }), text: "Promotes early crop establishment & growth" },
            { icon: React.createElement(Zap, { className: "w-4 h-4" }), text: "Encourages strong root development" },
            { icon: React.createElement(Leaf, { className: "w-4 h-4" }), text: "Improves nutrient uptake & vegetative growth" },
            { icon: React.createElement(Target, { className: "w-4 h-4" }), text: "Enhances flowering & fruit setting" },
            { icon: React.createElement(Shield, { className: "w-4 h-4" }), text: "Helps crops overcome stress conditions" }
        ],
        targetCrops: ["Potato", "Onion", "Cotton", "Tomato", "Ginger", "Grapes", "Strawberry", "Capsicum", "Guava", "Soybean", "Vegetables", "Flower Crops", "Fruit Crops", "Field Crops"],
        category: "Seed Treatment",
        features: ["Early Vigor", "Shock Prevention", "Foundation Builder"],
        results: ["Faster establishment", "Higher survival rate", "Uniform growth"]
    }
];

export const categories = [
    { id: "all", label: "All Products", icon: React.createElement(Package, { className: "w-4 h-4" }), count: products.length },
    { id: "growth", label: "Growth Enhancers", icon: React.createElement(TrendingUp, { className: "w-4 h-4" }), count: products.filter(p => p.category.includes("Growth") || p.category.includes("Yield") || p.category.includes("Tonic")).length },
    { id: "soil", label: "Soil Health", icon: React.createElement(Soil, { className: "w-4 h-4" }), count: products.filter(p => p.category.includes("Soil") || p.category.includes("Root")).length },
    { id: "protection", label: "Crop Protection", icon: React.createElement(ShieldIcon, { className: "w-4 h-4" }), count: products.filter(p => p.category.includes("Bio") || p.category.includes("Adjuvant")).length },
    { id: "nutrition", label: "Nutrition", icon: React.createElement(Apple, { className: "w-4 h-4" }), count: products.filter(p => p.category.includes("Supplement") || p.category.includes("Micronutrient") || p.category.includes("Amino")).length },
];