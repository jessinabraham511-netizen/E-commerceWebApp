function CartItem({ item, onUpdateQuantity, onRemove }) {
  return (
    <article className="cart-item">
      <img src={item.image} alt={item.name} className="cart-image" />
      <div className="cart-details">
        <h3>{item.name}</h3>
        <p>Rs.{item.price.toFixed(2)}</p>
      </div>
      <div className="cart-actions">
        <label htmlFor={`qty-${item.id}`}>Qty</label>
        <input
          id={`qty-${item.id}`}
          type="number"
          min="1"
          value={item.quantity}
          onChange={(event) => onUpdateQuantity(item.id, Number(event.target.value))}
        />
        <button type="button" className="secondary" onClick={() => onRemove(item.id)}>
          Remove
        </button>
      </div>
      <div className="cart-total">Rs.{(item.price * item.quantity).toFixed(2)}</div>
    </article>
  );
}

export default CartItem;
