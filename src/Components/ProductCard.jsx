/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const ProductCard = ({ product }) => {
    const { _id, image, itemName, price, rating } = product;

    return (
        <div className="border rounded-lg shadow-md p-4 bg-white">
            <img src={image} alt={itemName} className="w-full h-48 object-cover rounded-md" />
            <h3 className="text-lg font-bold mt-2">{itemName}</h3>
            <p className="text-gray-600">Price: ${price}</p>
            <p className="text-yellow-500">Rating: ⭐{rating}</p>
            <Link to={`/equipments/${_id}`}>
                <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    View Details
                </button>
            </Link>
        </div>
    );
};

export default ProductCard;
