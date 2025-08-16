import "./header.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <nav>
       
          <div className="logo">
            <img src="../src/assets/shopping_cart.svg" alt="" />
             <Link to="/">
            <h4>Shopping Cart</h4>
            </Link>
          </div>

        <div className="cart">
          <Link to="Cart">
            <button>View Cart</button>
          </Link>
        </div>
      </nav>
    </>
  );
}
