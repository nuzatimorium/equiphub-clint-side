import { useState, useContext } from "react";
import { authContext } from "../Components/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import loginAnimation from "../../public/login.json";

const Login = () => {
  const { handelLogin, handelGoogleLogin } = useContext(authContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handelLogin(email, password);
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error.message,
      });
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await handelGoogleLogin();
      Swal.fire({
        icon: "success",
        title: "Google Login Successful",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Google Login Failed",
        text: error.message,
      });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Login
        </h2>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <div className="text-center my-4 text-gray-600">OR</div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center bg-red-500 text-white p-3 rounded-md hover:bg-red-600 transition"
        >
          <img
            src="https://img.icons8.com/color/24/google-logo.png"
            alt="Google"
            className="mr-2"
          />
          Login with Google
        </button>

        <p className="text-center text-gray-600 mt-4">
          Don&#39;t have an account?{" "}
          <a href="/register" className="text-blue-500 font-semibold">
            Register
          </a>
        </p>
      </div>
      <div>
          <Lottie animationData={loginAnimation} loop={true} />
      </div>
    </div>
  );
};

export default Login;
