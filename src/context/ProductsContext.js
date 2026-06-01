import { createContext, useContext, useEffect, useState } from "react";
import initialProducts from "../data/products";

const ProductsContext = createContext(null);
const STORAGE_KEY = "shopsphere_products";

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : initialProducts;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  }, [products]);

  const addProduct = (product) => {
    const newProduct = {
      ...product,
      id: Date.now(),
      price: Number(product.price),
    };
    setProducts((current) => [...current, newProduct]);
    return newProduct;
  };

  const updateProduct = (id, updates) => {
    setProducts((current) =>
      current.map((product) =>
        product.id === id
          ? { ...product, ...updates, price: Number(updates.price ?? product.price) }
          : product
      )
    );
  };

  const deleteProduct = (id) => {
    setProducts((current) => current.filter((product) => product.id !== id));
  };

  const categories = [...new Set(products.map((product) => product.category))].sort();

  return (
    <ProductsContext.Provider
      value={{ products, addProduct, updateProduct, deleteProduct, categories }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProducts must be used inside ProductsProvider");
  }
  return context;
}
