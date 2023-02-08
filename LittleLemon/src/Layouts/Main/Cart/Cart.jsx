import React, { useEffect, useReducer, useState } from "react";
import { useCart } from "react-use-cart";

function Cart() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, isLoading);
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty)
    return (
      <div>
        <h1>Your cart is Empty</h1>
      </div>
    );
  return (
    <section>
      <div>
        <h2>THe total is ({totalItems})</h2>
      </div>
      <div>
        <div>
          <h5>
            Cart ({totalUniqueItems}) total Items: ({totalItems})
          </h5>
          <table>
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img src={item.image} style={{ height: "6rem" }} />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>Quantity ({item.quantity})</td>
                    <td>
                      <button
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <button
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                      <button onClick={() => removeItem(item.id)}>
                        cancel
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div>
          <h2>Total price: $ {cartTotal}</h2>
          <button onClick={() => emptyCart()}>Clear cart</button>
          <button>Buy now</button>
        </div>
      </div>
    </section>
  );
}

export default Cart;
