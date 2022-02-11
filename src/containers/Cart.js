import React, { useContext } from "react";
import Contexto from "../context/Contexto";
import ItemCarrito from "../components/ItemCarrito";
import "../assets/css/Cart.css";
function Cart() {
  const { carrito, deleteCart } = useContext(Contexto);
  const totalCarrito = carrito
    .reduce(
      (total, currentvalue) =>
        (total = total + currentvalue[0].quantity * currentvalue[0].price),
      0
    )
    .toFixed(2);
  return (
    <>
      <div className="container">
        <div className="main-cart">
          {carrito.map((item) => (
            <ItemCarrito {...item} key={item.id} />
          ))}
        </div>
        <div className="total text-center fw-bold mt-3">
          <u>TOTAL: $ {totalCarrito}</u>
        </div>
      </div>
    </>
  );
}

export default Cart;
