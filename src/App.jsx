// src/App.jsx
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductsList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import Profile from "./pages/Profile"; 
import NotFound from "./pages/NotFound";
import CartSidebar from "./components/CartSidebar";
import Checkout from "./pages/Checkout";
import ErrorBoundary from "./components/ErrorBoundary";
import DashboardLayout from "./pages/dashboard/DashboardLayout";

import "./App.css";

function LoginRequiredModal({ onLogin, onCancel }) {
  return (
    <>
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50" />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-lg max-w-md w-full text-center">
          <p className="text-gray-800 mb-6">
            Anda belum resmi menjadi user, silahkan login terlebih dahulu.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={onLogin}
              className="px-4 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition"
            >
              Login Dahulu
            </button>
            <button
              onClick={onCancel}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300 transition"
            >
              Batalkan
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function DashboardAccessDeniedModal({ onClose }) {
  return (
    <>
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50" />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-lg max-w-md w-full text-center">
          <p className="text-gray-800 mb-6">Selain admin dilarang masuk.</p>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition"
          >
            Mengerti
          </button>
        </div>
      </div>
    </>
  );
}

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showLoginRequired, setShowLoginRequired] = useState(false);
  const [showDashboardAccessDenied, setShowDashboardAccessDenied] = useState(false);
  const [isCheckoutPending, setIsCheckoutPending] = useState(false);

  const handleDashboardClick = () => {
    const auth = JSON.parse(localStorage.getItem("auth"));
    if (!auth?.isAuthenticated) {
      setShowLoginRequired(true);
    } else if (auth.role !== "Admin") {
      setShowDashboardAccessDenied(true);
    } else {
      window.location.href = "/dashboard";
    }
  };

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Navbar
            onOpenCart={() => setIsCartOpen(true)}
            onDashboardClick={handleDashboardClick}
          />

          {isCartOpen && (
            <CartSidebar
              isOpen={isCartOpen}
              onClose={() => setIsCartOpen(false)}
              onCheckout={() => {
                const auth = JSON.parse(localStorage.getItem("auth"));
                if (auth?.isAuthenticated) {
                  setIsCartOpen(false);
                  localStorage.setItem("openCheckout", "true");
                  window.dispatchEvent(new Event("storage"));
                } else {
                  setIsCartOpen(false);
                  setIsCheckoutPending(true);
                  setShowLoginRequired(true);
                }
              }}
            />
          )}

          {showLoginRequired && (
            <LoginRequiredModal
              onLogin={() => {
                if (isCheckoutPending) {
                  localStorage.setItem("shouldOpenCheckoutAfterLogin", "true");
                }
                setShowLoginRequired(false);
                window.location.href = "/login";
              }}
              onCancel={() => {
                localStorage.removeItem("cart");
                window.dispatchEvent(new Event("storage"));
                setShowLoginRequired(false);
                window.location.href = "/";
              }}
            />
          )}

          {showDashboardAccessDenied && (
            <DashboardAccessDeniedModal
              onClose={() => setShowDashboardAccessDenied(false)}
            />
          )}

          <main className="flex-grow py-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/products"
                element={
                  <ErrorBoundary>
                    <ProductsList />
                  </ErrorBoundary>
                }
              />
              <Route
                path="/products/:productId"
                element={
                  <ErrorBoundary>
                    <ProductDetail />
                  </ErrorBoundary>
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard/*" element={<DashboardLayout />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<Navigate to="/404" replace />} />
            </Routes>
          </main>

          <Checkout />
        </div>
      </Router>
    </CartProvider>
  );
}