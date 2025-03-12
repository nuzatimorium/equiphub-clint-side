import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-5">
            <h1 className="text-6xl font-bold text-red-500">404</h1>
            <h2 className="text-3xl font-semibold mt-3">Oops! Page Not Found</h2>
            <p className="text-gray-600 mt-2">
                The page you&#39;re looking for doesn&#39;t exist or has been moved.
            </p>
            <Link to="/" className="mt-5 bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                Go Back Home
            </Link>
        </div>
    );
};

export default NotFound;
