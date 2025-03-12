import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EquipmentDetails = () => {
    const { id } = useParams();
    const [equipment, setEquipment] = useState(null);

    useEffect(() => {
        fetch(`https://b10-a10-equiphub-server-side.vercel.app/equipments/${id}`)
            .then(res => res.json())
            .then(data => setEquipment(data))
            .catch(err => console.error("Error fetching details:", err));
    }, [id]);

    if (!equipment) return <p className="text-center text-gray-500">Loading...</p>;

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg my-10">
            <img src={equipment.image} alt={equipment.itemName} className="w-full h-80 object-cover rounded-md" />
            <h2 className="text-3xl font-bold mt-4">{equipment.itemName}</h2>
            <p className="text-gray-600">{equipment.description}</p>
            <p className="mt-2"><strong>Category:</strong> {equipment.categoryName}</p>
            <p className="mt-2"><strong>Price:</strong> ${equipment.price}</p>
            <p className="mt-2"><strong>Rating:</strong> {equipment.rating} ⭐</p>
            <p className="mt-2"><strong>Customization:</strong> {equipment.customization}</p>
            <p className="mt-2"><strong>Processing Time:</strong> {equipment.processingTime}</p>
            <p className="mt-2"><strong>Stock Status:</strong> {equipment.stockStatus} left</p>
        </div>
    );
};

export default EquipmentDetails;
