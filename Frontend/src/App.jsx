import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  LoginPage,
  RegisterPage,
} from "./pages";

function App() {
  return (
      <div className="min-h-screen flex flex-col">
        <main className="grow">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/privacy" element={<PrivacyPolicy />} /> */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            {/* <Route path="/forgot-password" element={<ForgotPass />} /> */}

            {/* Protected Routes */}
            {/* <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashBoard />
                </ProtectedRoute>
              }
            /> */}

            

            {/* 404 Not Found - Catch all undefined routes */}
            <Route 
              path="*" 
              element={
                <div className="min-h-[80vh] flex flex-col items-center justify-center bg-[#f8fafc] text-center px-6">
                  <h1 className="text-9xl font-black text-indigo-100">404</h1>
                  <h2 className="text-3xl font-bold text-slate-900 -mt-12 mb-4">Page Not Found</h2>
                  <p className="text-slate-500 font-medium max-w-sm mb-8">
                    The page you are looking for doesn't exist or has been moved.
                  </p>
                  <a 
                    href="/" 
                    className="bg-indigo-600 text-white px-8 py-3 rounded-2xl font-bold hover:bg-indigo-700 transition-all active:scale-95 shadow-lg shadow-indigo-100"
                  >
                    Back to Home
                  </a>
                </div>
              } 
            />
          </Routes>
        </main>
      </div>
    
  );
}

export default App;