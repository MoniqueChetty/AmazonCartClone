import React from "react";
import "./CartItems.css";
import CartItem from "./CartItem";

function CartItems({ items, setCartItems }) {
  const changeItemQuantity = (e, index) => {
    // console.log(e.target.value, index);
    const newItems = [...items];
    newItems[index].quantity = e.target.value;
    setCartItems(newItems);
  };
  const deleteItem = (indexToDelete) => {
    // console.log("delete", index);
    const newItems = items.filter((value, index) => {
      return index !== indexToDelete;
    });
    setCartItems(newItems);
  };
  return (
    <div className="CartItems">
      <h2>Shopping Cart</h2>
      <hr />
      <div className="CartItems-items">
        {items.map((item, index) => (
          <CartItem
            key={index}
            index={index}
            item={item}
            changeItemQuantity={changeItemQuantity}
            deleteItem={deleteItem}
          />
        ))}
      </div>
    </div>
  );
}

export default CartItems;
