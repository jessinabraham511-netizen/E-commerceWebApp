import CartItem from "../components/CartItem";
import { useCart } from "../context/CartContext";

function CartPage() {
  const { cartItems, subtotal, updateQuantity, removeFromCart, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <section className="empty-state">
        <h2>Your cart is empty</h2>
        <p>Add products from the catalog to see them here.</p>
      </section>
    );
  }

  const shipping = subtotal > 100 ? 0 : 9.99;
  const total = subtotal + shipping;

  return (
    <section className="cart-page">
      <h2>Your Cart</h2>
      <div className="cart-list">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onUpdateQuantity={updateQuantity}
            onRemove={removeFromCart}
          />
        ))}
      </div>

      <aside className="cart-summary">
        <h3>Order Summary</h3>
        <p>
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </p>
        <p>
          <span>Shipping</span>
          <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
        </p>
        <p className="summary-total">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </p>
        <button type="button">Checkout</button>
        <button type="button" className="secondary" onClick={clearCart}>
          Clear Cart
        </button>
      </aside>
    </section>
  );
}

export default CartPage;
