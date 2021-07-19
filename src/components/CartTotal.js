import React from "react";
import "./CartTotal.css";
import NumberFormat from "react-number-format";

function CartTotal({ items }) {
  let total = 0;
  let totalQuantity = 0;

  const getTotalPrice = () => {
    total = 0;
    totalQuantity = 0;
    items.forEach((item) => {
      total += item.price * item.quantity;
      totalQuantity += parseInt(item.quantity, 10);
    });
    // return total, cartTotal;
  };
  getTotalPrice();

  return (
    <div className="CartTotal">
      <h3>
        SubTotal ({totalQuantity} Items):
        <span className="CartTotal-price">
          <NumberFormat
            value={total}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            decimalScale={2}
          />
        </span>
      </h3>
      <button>Proceed to Checkout </button>
    </div>
  );
}

export default CartTotal;
