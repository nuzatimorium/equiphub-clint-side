import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        {/* Logo & Website Name */}
        <div className="flex flex-col items-center">
          <img src="https://i.ibb.co.com/5hrXn760/Gemini-Generated-Image-6f73gl6f73gl6f73.jpg" alt="EquipHub Logo" className="w-[70px] h-[70px] rounded-full" />
          <h2 className="text-xl font-bold">EquipHub</h2>
        </div>

        {/* Copyright */}
        <p className="mt-2 text-sm">© 2025 EquipHub. All rights reserved.</p>

        {/* Contact Information */}
        <p className="text-sm mt-2">Email: support@equiphub.com | Phone: +123 456 7890</p>

        {/* Quick Links */}
        <div className="flex space-x-4 mt-3">
          <a href="/" className="hover:underline">Home</a>
          <a href="/all-sports-equipment" className="hover:underline">All Equipment</a>
          <a href="/add-equipment" className="hover:underline">Add Equipment</a>
          <a href="/contact" className="hover:underline">Contact Us</a>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4 mt-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={24} /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={24} /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
