import { useContext, useEffect, useState } from "react";
import { authContext } from "../Components/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyEquipmentList = () => {
    const { user } = useContext(authContext);
    const [equipment, setEquipment] = useState([]);
    

    useEffect(() => {
        if (user?.email) {
            fetch(`https://b10-a10-equiphub-server-side.vercel.app/my-equipment?email=${user.email}`)
                .then(res => res.json())
                .then(data => setEquipment(data))
                .catch(err => console.error("Error fetching equipment:", err));
        }
    }, [user]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://b10-a10-equiphub-server-side.vercel.app/equipment/${id}`, { method: "DELETE" })
                    .then(res => res.json())
                    .then(() => {
                        setEquipment(equipment.filter(item => item._id !== id));
                        Swal.fire("Deleted!", "Your equipment has been deleted.", "success");
                    });
            }
        });
    };

    return (
        <div className="container mx-auto py-10">
            <h2 className="text-3xl font-bold text-center mb-6">My Equipment List</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {equipment.map((item) => (
                    <div key={item._id} className="bg-white p-5 shadow-lg rounded-lg">
                        <img src={item.image} alt={item.itemName} className="w-full h-48 object-cover rounded-lg" />
                        <h3 className="text-xl font-semibold mt-4">{item.itemName}</h3>
                        <p className="text-gray-600">Category: {item.categoryName}</p>
                        <p className="text-gray-600">Price: ${item.price}</p>
                        <div className="flex justify-between mt-4">
                            <Link to={`/update/${item._id}`} className="btn bg-green-500 text-white px-3 py-2 rounded">Update</Link>
                            <button onClick={() => handleDelete(item._id)} className="bg-red-500 text-white px-4 py-2 rounded-lg">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyEquipmentList;
