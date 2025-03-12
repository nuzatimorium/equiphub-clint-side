/* eslint-disable no-unused-vars */
import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { authContext } from "../Components/AuthProvider";
import Swal from "sweetalert2";

const UpdateEquipment = () => {
  const { user } = useContext(authContext);
  const { id } = useParams(); // Get the equipment ID from URL parameters
  const navigate = useNavigate();

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

  // Fetch equipment data by ID
  useEffect(() => {
    if (id) {
      fetch(`https://b10-a10-equiphub-server-side.vercel.app/equipment/${id}`)
        .then((res) => res.json())
        .then((data) => setFormData({ ...data, userEmail: user?.email, userName: user?.displayName }))
        .catch((err) => console.error("Error fetching equipment:", err));
    }
  }, [id, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to be updated
    const updatedData = { ...formData };

    try {
      const response = await fetch(`https://b10-a10-equiphub-server-side.vercel.app/equipment/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });
      
      const data = await response.json();

      if (data.modifiedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "Equipment Updated!",
          text: "Your equipment has been successfully updated.",
        });
        navigate("/my-equipment"); // Redirect to My Equipment List after success
      } else {
        Swal.fire({
          icon: "error",
          title: "Update Failed",
          text: "There was an error updating the equipment.",
        });
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: "There was an error updating the equipment.",
      });
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg my-10">
      <h2 className="text-3xl font-bold text-center mb-6">Update Equipment</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* User Email (read-only) */}
        <input
          className="p-3 border rounded bg-gray-200 cursor-not-allowed"
          type="email"
          name="userEmail"
          value={formData.userEmail}
          readOnly
        />

        {/* User Name (read-only) */}
        <input
          className="p-3 border rounded bg-gray-200 cursor-not-allowed"
          type="text"
          name="userName"
          value={formData.userName}
          readOnly
        />

        {/* Image URL */}
        <input
          className="p-3 border rounded"
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          required
        />

        {/* Item Name */}
        <input
          className="p-3 border rounded"
          type="text"
          name="itemName"
          placeholder="Item Name"
          value={formData.itemName}
          onChange={handleChange}
          required
        />

        {/* Category */}
        <input
          className="p-3 border rounded"
          type="text"
          name="categoryName"
          placeholder="Category Name"
          value={formData.categoryName}
          onChange={handleChange}
          required
        />

        {/* Price */}
        <input
          className="p-3 border rounded"
          type="number"
          name="price"
          placeholder="Price ($)"
          value={formData.price}
          onChange={handleChange}
          required
        />

        {/* Rating */}
        <input
          className="p-3 border rounded"
          type="number"
          name="rating"
          placeholder="Rating (out of 5)"
          value={formData.rating}
          onChange={handleChange}
          required
        />

        {/* Customization */}
        <input
          className="p-3 border rounded"
          type="text"
          name="customization"
          placeholder="Customization (e.g., extra grip)"
          value={formData.customization}
          onChange={handleChange}
        />

        {/* Processing Time */}
        <input
          className="p-3 border rounded"
          type="text"
          name="processingTime"
          placeholder="Processing Time (e.g., 3 days)"
          value={formData.processingTime}
          onChange={handleChange}
          required
        />

        {/* Stock Status */}
        <input
          className="p-3 border rounded"
          type="number"
          name="stockStatus"
          placeholder="Stock Quantity"
          value={formData.stockStatus}
          onChange={handleChange}
          required
        />

        {/* Description */}
        <textarea
          className="p-3 border rounded col-span-2"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>

        {/* Submit Button */}
        <button type="submit" className="col-span-2 p-3 bg-blue-600 text-white rounded hover:bg-blue-700">
          Update Equipment
        </button>
      </form>
    </div>
  );
};

export default UpdateEquipment;
