import { useContext, useState } from "react";
import { authContext } from "../Components/AuthProvider";
import Swal from "sweetalert2";

const AddEquipment = () => {
    const { user } = useContext(authContext);
    const [formData, setFormData] = useState({
        image: "",
        itemName: "",
        categoryName: "",
        description: "",
        price: "",
        rating: "",
        customization: "",
        processingTime: "",
        stockStatus: "",
        userEmail: user?.email || "", // Auto-fill email
        userName: user?.displayName || "", // Auto-fill name
    });

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const response = await fetch("http://localhost:5000/equipments", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (data.insertedId) {
            Swal.fire("Success!", "Equipment added successfully!", "success");
            setFormData({
                image: "",
                itemName: "",
                categoryName: "",
                description: "",
                price: "",
                rating: "",
                customization: "",
                processingTime: "",
                stockStatus: "",
                userEmail: user?.email || "",
                userName: user?.displayName || "",
            });
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg my-10">
            <h2 className="text-3xl font-bold text-center mb-6">Add New Equipment</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input className="p-3 border rounded" type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} required />
                <input className="p-3 border rounded" type="text" name="itemName" placeholder="Item Name" value={formData.itemName} onChange={handleChange} required />
                <input className="p-3 border rounded" type="text" name="categoryName" placeholder="Category Name" value={formData.categoryName} onChange={handleChange} required />
                <input className="p-3 border rounded" type="number" name="price" placeholder="Price ($)" value={formData.price} onChange={handleChange} required />
                <input className="p-3 border rounded" type="number" name="rating" placeholder="Rating (out of 5)" value={formData.rating} onChange={handleChange} required />
                <input className="p-3 border rounded" type="text" name="customization" placeholder="Customization (e.g., extra grip)" value={formData.customization} onChange={handleChange} />
                <input className="p-3 border rounded" type="text" name="processingTime" placeholder="Processing Time (e.g., 3 days)" value={formData.processingTime} onChange={handleChange} required />
                <input className="p-3 border rounded" type="number" name="stockStatus" placeholder="Stock Quantity" value={formData.stockStatus} onChange={handleChange} required />
                
                <textarea className="p-3 border rounded col-span-2" name="description" placeholder="Description" value={formData.description} onChange={handleChange} required></textarea>
                
                <input className="p-3 border rounded bg-gray-200 cursor-not-allowed" type="email" name="userEmail" value={formData.userEmail} readOnly />
                <input className="p-3 border rounded bg-gray-200 cursor-not-allowed" type="text" name="userName" value={formData.userName} readOnly />
                
                <button type="submit" className="col-span-2 p-3 bg-blue-600 text-white rounded hover:bg-blue-700">Add Equipment</button>
            </form>
        </div>
    );
};

export default AddEquipment;
