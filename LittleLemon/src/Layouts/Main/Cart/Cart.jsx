import React from "react";
import { useCart } from "react-use-cart";
import './Cart.css'

function Cart() {
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
        <h1 id="NoOrder">Your cart is <span>Empty</span></h1>
      </div>
    );
  return (
    <section>
      <div>
        <h2>{totalItems == 1 ? `${(totalItems)} dish` : `${(totalItems)} dishes`}</h2>
      </div>
      <div>
        <div>
          <h5>
            {totalUniqueItems > 1 ? `(total different dishes ${(totalUniqueItems)})` : ''}
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
                    <td>${item.price}</td>
                    <td>Quantity ({item.quantity})</td>
                    <td>Total{item.itemTotal}</td>
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
