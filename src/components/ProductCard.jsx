function ProductCard({ product, onAddToCart }) {
  return (
    <article className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-content">
        <span className="product-category">{product.category}</span>
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <strong>Rs{product.price.toFixed(2)}</strong>
          <button type="button" onClick={() => onAddToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
