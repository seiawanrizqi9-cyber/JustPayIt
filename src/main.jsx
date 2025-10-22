// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Simpan fungsi untuk membuka keranjang
let openCartSidebarFn = null;

// Ekspor global agar CartSidebar bisa mendaftar
window.registerOpenCartSidebar = (fn) => {
  openCartSidebarFn = fn;
};

// Dengarkan event dari Navbar
window.addEventListener('open-cart-sidebar', () => {
  if (openCartSidebarFn) openCartSidebarFn();
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);