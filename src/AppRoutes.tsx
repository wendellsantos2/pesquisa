import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 

import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Brands from './pages/Brands';
import Categories from './pages/Categories';
import { SearchProvider } from './components/SearchContext';

const AppRoutes: React.FC = () => {
  return (
    <SearchProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </Router>
    </SearchProvider>
  );
};

export default AppRoutes;
