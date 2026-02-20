import React, { useState } from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const inputStyle = `
    w-full px-5 py-4
    bg-slate-50 border-2 border-slate-200
    rounded-2xl outline-none transition-all duration-200
    placeholder:text-slate-400
    focus:bg-white focus:border-indigo-500
    focus:ring-4 focus:ring-indigo-500/10
  `;

  return (
    <div className="min-h-auto flex items-center justify-center bg-[#f8fafc] px-6 py-12">
      <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-xl border border-slate-200">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">
            Welcome
          </h1>
          <p className="text-slate-500 font-medium mt-2">
            Login to Bus Monitoring Dashboard
          </p>
        </div>

        {/* Form */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2 ml-1 uppercase tracking-wider">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputStyle}
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2 ml-1 uppercase tracking-wider">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={inputStyle}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-500 hover:text-indigo-600"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
        </div>

        {/* Button */}
        <button
          className="
            w-full mt-8 py-4
            bg-indigo-600 hover:bg-indigo-700
            text-white font-bold text-lg
            rounded-2xl transition-all active:scale-[0.98]
            shadow-md
          "
        >
          Sign In
        </button>

        <div className="mt-6 text-center">
          <p className="text-sm text-slate-500">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-indigo-600 hover:underline"
            >
              Register here
            </Link>
          </p>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <Link
            to="/"
            className="text-sm font-semibold text-slate-500 hover:text-slate-700 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}

export default LoginPage;