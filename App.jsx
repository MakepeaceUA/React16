import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import CategoryProducts from './CategoryProducts';
import ProductDetail from './ProductDetail';
import NewsDetail from './NewsDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/category/:categoryId" element={<CategoryProducts />} />
        <Route path="/news/:newsId" element={<NewsDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;