function ProductFilters({
  search,
  category,
  sort,
  categories,
  onSearchChange,
  onCategoryChange,
  onSortChange,
}) {
  return (
    <div className="product-filters">
      <input
        type="search"
        placeholder="Search products..."
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
        aria-label="Search products"
      />
      <select value={category} onChange={(event) => onCategoryChange(event.target.value)}>
        <option value="all">All categories</option>
        {categories.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <select value={sort} onChange={(event) => onSortChange(event.target.value)}>
        <option value="name-asc">Name (A-Z)</option>
        <option value="name-desc">Name (Z-A)</option>
        <option value="price-asc">Price (Low to High)</option>
        <option value="price-desc">Price (High to Low)</option>
      </select>
    </div>
  );
}

export default ProductFilters;
