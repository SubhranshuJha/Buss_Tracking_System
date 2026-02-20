import React, { useState } from "react";
import { Link } from "react-router-dom";

function RegisterPage() {
  const [nameUser, setNameUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [acceptedPolicy, setAcceptedPolicy] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  const inputStyle = `
    w-full px-4 py-3
    bg-slate-50 border-2 border-slate-200
    rounded-xl outline-none transition-all duration-200
    placeholder:text-slate-400
    focus:bg-white focus:border-indigo-500
    focus:ring-4 focus:ring-indigo-500/10
  `;

  return (
    <div className="min-h-auto flex items-center justify-center bg-[#f8fafc] px-6 py-3">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-slate-200">

        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-slate-900">
            Create Account
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Register to access dashboard
          </p>
        </div>

        {/* Form */}
        <div className="space-y-4">

          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1 uppercase tracking-wide">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={nameUser}
              onChange={(e) => setNameUser(e.target.value)}
              className={inputStyle}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1 uppercase tracking-wide">
              Email Address
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputStyle}
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-xs font-semibold text-slate-600 mb-1 uppercase tracking-wide">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={inputStyle}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-indigo-600"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <label className="block text-xs font-semibold text-slate-600 mb-1 uppercase tracking-wide">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showRePassword ? "text" : "password"}
                placeholder="Confirm password"
                value={repassword}
                onChange={(e) => setRePassword(e.target.value)}
                className={inputStyle}
              />
              <button
                type="button"
                onClick={() => setShowRePassword(!showRePassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-indigo-600"
              >
                {showRePassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
        </div>

        {/* Policy */}
        <div className="mt-5 flex items-start gap-2">
          <input
            id="policy"
            type="checkbox"
            checked={acceptedPolicy}
            onChange={(e) => setAcceptedPolicy(e.target.checked)}
            className="mt-1 w-4 h-4 text-indigo-600 border-slate-300 rounded"
          />
          <label htmlFor="policy" className="text-xs text-slate-500 leading-snug">
            I agree to the Privacy Policy
          </label>
        </div>

        {/* Register Button */}
        <button
          disabled={!acceptedPolicy}
          className={`
            w-full mt-6 py-3 rounded-xl font-semibold transition-all active:scale-[0.98]
            ${
              acceptedPolicy
                ? "bg-indigo-600 text-white hover:bg-indigo-700"
                : "bg-slate-200 text-slate-400 cursor-not-allowed"
            }
          `}
        >
          Register
        </button>

        {/* Footer */}
        <div className="mt-6 text-center text-sm">
          <p className="text-slate-500">
            Already have an account?{" "}
            <Link to="/login" className="text-indigo-600 font-semibold hover:underline">
              Sign In
            </Link>
          </p>

          <Link
            to="/"
            className="block mt-2 text-slate-500 hover:text-slate-700"
          >
            ← Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}

export default RegisterPage;