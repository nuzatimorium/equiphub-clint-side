import { useContext, useState } from "react";
import { authContext } from "./AuthProvider";

const Navbar = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const { user, handelLogOut } = useContext(authContext);

  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3 text-gray-900 font-bold text-2xl">
            <img
              src="https://i.ibb.co.com/5hrXn760/Gemini-Generated-Image-6f73gl6f73gl6f73.jpg"
              alt="EquipHub Logo"
              className="w-10 h-10 rounded-full"
            />
            <span>EQUIPHUB</span>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-8 text-gray-700 font-medium">
            <li>
              <a href="/" className="hover:text-blue-600">Home</a>
            </li>
            <li>
              <a href="/all-sports-equipment" className="hover:text-blue-600">Equipments</a>
            </li>
            <li>
              <a href="/add-equipment" className="hover:text-blue-600">Add Equipment</a>
            </li>
            <li>
              <a href="/my-equipment" className="hover:text-blue-600">My Equipment</a>
            </li>
          </ul>

          {/* User Profile & Login/Logout */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3">
                <img
                  src={user.photoURL || "/default-avatar.png"}
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-gray-300"
                />
                <span className="hidden lg:block font-medium">{user.displayName}</span>
                <button
                  onClick={handelLogOut}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <a href="/login" className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700">
                Login
              </a>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsToggleOpen(!isToggleOpen)}
            className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            <svg
              className="w-6 h-6 text-gray-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isToggleOpen && (
          <ul className="lg:hidden flex flex-col space-y-4 p-4 bg-gray-100 rounded-md">
            <li><a href="/" className="block text-gray-800 hover:text-blue-600">Home</a></li>
            <li><a href="/all-sports-equipment" className="block text-gray-800 hover:text-blue-600">Equipments</a></li>
            <li><a href="/add-equipment" className="block text-gray-800 hover:text-blue-600">Add Equipment</a></li>
            <li><a href="/my-equipment" className="block text-gray-800 hover:text-blue-600">My Equipment</a></li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Navbar;
