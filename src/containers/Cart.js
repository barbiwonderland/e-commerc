import React, { useContext } from "react";
import Contexto from "../context/Contexto";
import ItemCarrito from "../components/ItemCarrito";
import "../assets/css/Cart.css";
function Cart() {
  const { carrito } = useContext(Contexto);
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
        {(!carrito.length )? (
          <div className="row d-flex justify-content-center mx-auto mt-3">
            <h5 className="text-center">Aún no agrego ningun producto :[ </h5>
          </div>
        ) : (
          <>
            <div className="main-cart">
              {carrito.map((item) => (
                <ItemCarrito {...item} key={item.id} />
              ))}
            </div>
            <div className="total text-center fw-bold mt-3">
              <u>TOTAL: $ {totalCarrito}</u>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Cart;
