import { useState } from "react";
import { useProducts } from "../context/ProductsContext";

const emptyForm = {
  name: "",
  price: "",
  category: "",
  image: "",
  description: "",
};

function AdminPage() {
  const { products, addProduct, updateProduct, deleteProduct } = useProducts();
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const resetForm = () => {
    setForm(emptyForm);
    setEditingId(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editingId) {
      updateProduct(editingId, form);
    } else {
      addProduct(form);
    }
    resetForm();
  };

  const handleEdit = (product) => {
    setEditingId(product.id);
    setForm({
      name: product.name,
      price: String(product.price),
      category: product.category,
      image: product.image,
      description: product.description,
    });
  };

  return (
    <section className="admin-page">
      <div className="section-heading">
        <h2>Admin Panel</h2>
        <p>Add, edit, or remove products from the catalog.</p>
      </div>

      <form className="admin-form" onSubmit={handleSubmit}>
        <h3>{editingId ? "Edit Product" : "Add Product"}</h3>
        <div className="form-grid">
          <label>
            Name
            <input name="name" value={form.name} onChange={handleChange} required />
          </label>
          <label>
            Price
            <input
              name="price"
              type="number"
              min="0"
              step="0.01"
              value={form.price}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Category
            <input name="category" value={form.category} onChange={handleChange} required />
          </label>
          <label>
            Image URL
            <input name="image" value={form.image} onChange={handleChange} required />
          </label>
          <label className="full-width">
            Description
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form-actions">
          <button type="submit">{editingId ? "Update Product" : "Add Product"}</button>
          {editingId && (
            <button type="button" className="secondary" onClick={resetForm}>
              Cancel
            </button>
          )}
        </div>
      </form>

      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>
                  <div className="admin-product-cell">
                    <img src={product.image} alt={product.name} />
                    <span>{product.name}</span>
                  </div>
                </td>
                <td>{product.category}</td>
                <td>Rs{product.price.toFixed(2)}</td>
                <td>
                  <div className="table-actions">
                    <button type="button" className="secondary" onClick={() => handleEdit(product)}>
                      Edit
                    </button>
                    <button type="button" onClick={() => deleteProduct(product.id)}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default AdminPage;
