// src/App.js
import React from 'react';
import { ProductProvider } from './ProductContext';
import Header from './Header';
import ProductList from './ProductList';
import './App.css';

const App = () => {
  return (
    <ProductProvider>
      <div className="App">
        <Header />
        <ProductList />
      </div>
    </ProductProvider>
  );
};

export default App;

