import { useContext, useState } from "react";
import { CartContext } from "../store/Shopping-cart-context.jsx";
import Toast from "./Toast.jsx";

export default function Product({ id, image, title, price, description }) {
  const { addItemsToCart } = useContext(CartContext);
  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = () => {
    addItemsToCart(id);
    setShowToast(true);
  };

  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className="product-price">₹{price}</p>
          <p>{description}</p>
        </div>
        <p className="product-actions">
          <button onClick={handleAddToCart}>Add to Cart</button>
        </p>
      </div>
      <Toast message="Item added to cart!" show={showToast} />
    </article>
  );
}
