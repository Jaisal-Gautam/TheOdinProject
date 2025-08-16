import { useEffect, useState } from "react";
import "./homeItems.css";
import ItemCard from "./itemCard";

export default function HomeItems() {
  const [allitems, setAllitems] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setAllitems(data));
  }, []);
  console.log(cart);
  const items = allitems.map((data) => (
    <ItemCard
      id={data.id}
      key={data.id}
      image={data.image}
      title={data.title}
      price={data.price}
      description={data.category}
      cart={cart}
      setCart={setCart}
    />
  ));

  return <div className="homeItems">{items}</div>;
}
