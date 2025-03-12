import { useEffect, useState } from "react";
import Slider from "../Components/Slider";
import ProductCard from "../Components/ProductCard";
import { Fade } from "react-awesome-reveal";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        fetch("https://b10-a10-equiphub-server-side.vercel.app/products")  
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error("Error fetching products:", err));
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <div className="transition-all duration-300">
            {/* Theme Toggle Button */}
            <div className="p-4 text-right">
                <button 
                    onClick={toggleTheme} 
                    className="btn btn-outline btn-primary"
                >
                    {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
                </button>
            </div>
            <Fade>

            {/* Banner Slider */}
            <Slider />

            {/* Product Section */}
            <div className="container mx-auto p-5">
                <h1 className="text-3xl font-bold text-center mb-6">Our Products</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {products.map(product => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>
            </div>

            {/* Featured Categories */}
            <div className="py-10 mt-10">
                <h2 className="text-3xl font-bold text-center mb-6">Featured Categories</h2>
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 p-5">
                    <div className="p-5 bg-base-200 rounded-xl shadow-md text-center">
                        <h3 className="text-xl font-semibold">⚾ Baseball Equipment</h3>
                        <p>Find the best bats, gloves, and accessories for baseball.</p>
                    </div>
                    <div className="p-5 bg-base-200 rounded-xl shadow-md text-center">
                        <h3 className="text-xl font-semibold">🏀 Basketball Gear</h3>
                        <p>High-quality basketballs, hoops, and training gear.</p>
                    </div>
                    <div className="p-5 bg-base-200 rounded-xl shadow-md text-center">
                        <h3 className="text-xl font-semibold">🏏 Cricket Essentials</h3>
                        <p>Top-rated bats, pads, and balls for cricket lovers.</p>
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="container mx-auto text-center py-16 mt-12 bg-base-300 rounded-lg shadow-lg">
                <h2 className="text-4xl font-bold mb-6">Why Choose Equip Hub?</h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                    We provide top-quality sports equipment with customization options, fast delivery, and reliable customer support.
                </p>

                <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                    {/* Fast Delivery */}
                    <div className="flex flex-col items-center bg-base-100 p-6 rounded-lg shadow-md w-64 hover:scale-105 transition-transform duration-300">
                        <span className="text-blue-500 text-4xl">🚀</span>
                        <h3 className="text-lg font-semibold mt-3">Fast Delivery</h3>
                        <p className="text-gray-500 mt-1">Get your orders quickly with our optimized delivery system.</p>
                    </div>

                    {/* Customization */}
                    <div className="flex flex-col items-center bg-base-100 p-6 rounded-lg shadow-md w-64 hover:scale-105 transition-transform duration-300">
                        <span className="text-green-500 text-4xl">🛠️</span>
                        <h3 className="text-lg font-semibold mt-3">Customization</h3>
                        <p className="text-gray-500 mt-1">Modify equipment to match your playing style.</p>
                    </div>

                    {/* Quality Assurance */}
                    <div className="flex flex-col items-center bg-base-100 p-6 rounded-lg shadow-md w-64 hover:scale-105 transition-transform duration-300">
                        <span className="text-yellow-500 text-4xl">🏆</span>
                        <h3 className="text-lg font-semibold mt-3">Quality Assurance</h3>
                        <p className="text-gray-500 mt-1">All products are tested for top-tier performance.</p>
                    </div>
                </div>
            </div>
            </Fade>
        </div>
    );
};

export default Home;
