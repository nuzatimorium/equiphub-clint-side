import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllEquipments = () => {
    const [equipments, setEquipments] = useState([]);
    const [sortOrder, setSortOrder] = useState("asc"); // Default: Ascending
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://b10-a10-equiphub-server-side.vercel.app/equipments")
            .then(res => res.json())
            .then(data => setEquipments(data))
            .catch(err => console.error("Error fetching data:", err));
    }, []);

    const handleSort = () => {
        const sorted = [...equipments].sort((a, b) => 
            sortOrder === "asc" ? a.price - b.price : b.price - a.price
        );
        setEquipments(sorted);
        setSortOrder(sortOrder === "asc" ? "desc" : "asc"); // Toggle order
    };

    return (
        <div className="container mx-auto p-4 sm:p-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">All Sports Equipment</h2>

            {/* Sort Button */}
            <div className="text-center mb-4">
                <button
                    onClick={handleSort}
                    className="bg-blue-500 text-white px-4 sm:px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
                >
                    Sort by Price: {sortOrder === "asc" ? "High to Low" : "Low to High"}
                </button>
            </div>

            {/* Responsive Equipment Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="bg-gray-200 text-xs sm:text-sm">
                            <th className="py-3 px-4 sm:px-6 text-left">Image</th>
                            <th className="py-3 px-4 sm:px-6 text-left">Name</th>
                            <th className="py-3 px-4 sm:px-6 text-left hidden sm:table-cell">Category</th>
                            <th className="py-3 px-4 sm:px-6 text-left">Price ($)</th>
                            <th className="py-3 px-4 sm:px-6 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {equipments.map((item) => (
                            <tr key={item._id} className="border-b text-xs sm:text-sm">
                                <td className="py-3 px-4 sm:px-6">
                                    <img src={item.image} alt={item.itemName} className="w-14 h-14 sm:w-20 sm:h-20 object-cover rounded-md" />
                                </td>
                                <td className="py-3 px-4 sm:px-6">{item.itemName}</td>
                                <td className="py-3 px-4 sm:px-6 hidden sm:table-cell">{item.categoryName}</td>
                                <td className="py-3 px-4 sm:px-6">${item.price}</td>
                                <td className="py-3 px-4 sm:px-6">
                                    <button
                                        onClick={() => navigate(`/equipments/${item._id}`)}
                                        className="bg-blue-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded hover:bg-blue-600 transition text-xs sm:text-sm"
                                    >
                                        View Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllEquipments;
