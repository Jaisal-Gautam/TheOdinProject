import { useState } from "react";
import "./itemCard.css";

export default function ItemCard({ id, image, title, price, description, cart, setCart }) {
  const [itemNo, setItemNo] = useState(0);

  function updateCart(newQuantity) {
    if (newQuantity <= 0) {
      setCart(cart.filter(item => item.id !== id));
    } else {
      const existingItem = cart.find(item => item.id === id);
      if (existingItem) {
        setCart(cart.map(item =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        ));
      } else {
        setCart([...cart, { id, quantity: newQuantity }]);
      }
    }
  }

  function cartBtnClicked() {
    const newQty = 1;
    setItemNo(newQty);
    updateCart(newQty);
  }

  function itemDec() {
    const newQty = itemNo - 1;
    setItemNo(newQty);
    updateCart(newQty);
  }

  function itemInc() {
    const newQty = itemNo + 1;
    setItemNo(newQty);
    updateCart(newQty);
  }

  return (
    <div className="itemCard">
      <div className="img">
        <img src={image} alt={title} />
      </div>
      <div className="itemDisc">
        <ul>
          <li id="itemTitle">
            <strong>{title}</strong>
          </li>
          <li>Price: {price}$</li>
          <li>Category: {description}</li>
        </ul>
      </div>
      <div className="addCartBtn">
        {itemNo > 0 && <button onClick={itemDec}>-</button>}

        <button onClick={cartBtnClicked}>
          {itemNo > 0 ? itemNo : "Add to Cart"}
        </button>

        {itemNo > 0 && <button onClick={itemInc}>+</button>}
      </div>
    </div>
  );
}