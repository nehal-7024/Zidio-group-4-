import React, { useState } from "react";
import bgImage from "./assets/login_bg.jpg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    alert(`Logging in with Username: ${username} and Password: ${password}`);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg w-96 text-white border border-white/20">
        <h2 className="text-center text-2xl font-semibold mb-4">Login</h2>
        <div className="mb-4">
          <label className="block text-sm mb-1">Username</label>
          <div className="relative">
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-white/20 outline-none border border-white/30 placeholder-white"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <span className="absolute right-3 top-3 text-white">🔑</span>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-1">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full p-3 rounded-lg bg-white/20 outline-none border border-white/30 placeholder-white"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <span
              className="absolute right-3 top-3 text-white cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁"}
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center text-sm mb-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" /> Remember me
          </label>
          <a href="#" className="text-blue-300 hover:underline">
            Forgot password?
          </a>
        </div>
        <button
          className="w-full p-3 bg-[#E8E2DA] text-black rounded-lg font-semibold hover:bg-gray-200"
          onClick={handleLogin}
        >
          Login
        </button>
        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <a href="#" className="text-blue-300 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
