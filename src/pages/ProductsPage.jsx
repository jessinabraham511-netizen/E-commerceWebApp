import { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import ProductFilters from "../components/ProductFilters";
import { useCart } from "../context/CartContext";
import { useProducts } from "../context/ProductsContext";

function ProductsPage() {
  const { products, categories } = useProducts();
  const { addToCart } = useCart();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("name-asc");

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    let result = products.filter((product) => {
      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query);

      const matchesCategory = category === "all" || product.category === category;
      return matchesSearch && matchesCategory;
    });

    result = [...result].sort((a, b) => {
      switch (sort) {
        case "name-desc":
          return b.name.localeCompare(a.name);
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "name-asc":
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return result;
  }, [products, search, category, sort]);

  return (
    <section>
      <div className="section-heading">
        <h2>Products</h2>
        <p>Search, filter, and sort to find what you need.</p>
      </div>

      <ProductFilters
        search={search}
        category={category}
        sort={sort}
        categories={categories}
        onSearchChange={setSearch}
        onCategoryChange={setCategory}
        onSortChange={setSort}
      />

      <p className="results-count">
        Showing {filteredProducts.length} of {products.length} products
      </p>

      {filteredProducts.length === 0 ? (
        <div className="empty-state">
          <h3>No products found</h3>
          <p>Try a different search term or category filter.</p>
        </div>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
          ))}
        </div>
      )}
    </section>
  );
}

export default ProductsPage;
