import React from "react";
import Minus from "./../../../assets/Icons/minus.png";
import Plus from "./../../../assets/Icons/add.png";
import { useCart } from "react-use-cart";
import Swal from "sweetalert2";
import "./Cart.css";

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

  const TheAlert = () => {
    Swal.fire({
      title: "Your delivery is on the way ",
      text: `Get ready, total is $${cartTotal}`,
      icon: "success",
      confirmButtonText: "Confirm",
      confirmButtonColor: "#F4CE14",
    });

    setTimeout(() => {
      emptyCart();
    }, 1500);
  };

  if (isEmpty)
    return (
      <div>
        <h1 id="NoOrder">
          Your cart is <span className="Special">Empty</span>
        </h1>
      </div>
    );
  return (
    <section>
      <div>
        <h2>
          {totalItems}
          {totalItems == 1 ? (
            <span className="Special"> dish</span>
          ) : (
            <span className="Special"> dishes</span>
          )}
        </h2>
      </div>
      <div>
        <div>
          <h5>
            {totalUniqueItems > 1
              ? `(total different dishes ${totalUniqueItems})`
              : ""}
          </h5>
          <table className="table">
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index} className="accordion">
                    <td>
                      <img src={item.image} style={{ height: "6rem" }} />
                    </td>
                    <td id="TheNameOfDish">{item.name}</td>
                    <td id="TheQuintity">Price ${item.price}</td>
                    <td id="TheQuintity">Quantity - {item.quantity}</td>
                    <td id="theTotal">Total ${item.itemTotal}</td>
                    <td>
                      <button
                        className="Close-bth2"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        <img
                          className="IncDec"
                          src={Minus}
                          alt="remove a dish"
                        />
                      </button>
                      <button
                        className="Close-bth2"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        <img className="IncDec" src={Plus} alt="add a dish " />
                      </button>
                      <button
                        className="cancelB"
                        onClick={() => removeItem(item.id)}
                      >
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
          <h2 className="Fasty">Total price: ${cartTotal}</h2>
          <button className="ClearingCart" onClick={() => emptyCart()}>
            Clear cart
          </button>
          <button className="ClearingCart" onClick={TheAlert}>
            Buy now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Cart;
