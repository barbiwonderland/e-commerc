import axios from "axios";
import React, { useReducer, useState } from "react";
import { toast } from "react-toastify";
import Contexto from "./Contexto";
import Reducer from "./Reducer";
function UseContext(props) {
  const [loading, setLoading] = useState(false);
  const { children } = props;
  const initialState = {
    productos: [],
    carrito: [],
  };
  const [state, dispatch] = useReducer(Reducer, initialState);

  const getProducts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products?limit=30");
    setLoading(true);
    dispatch({ type: "GET_PRODUCTS", payload: res.data });
  };
  const addToCart = (x) => {
    dispatch({ type: "ADD_CART", payload: x });
    toast.success("Producto agregado al carrito", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  const incrementCart = (x) => {
    dispatch({ type: "INCREMENT_CART", payload: x });
  };
  const reduceCart = (x) => {
    dispatch({ type: "REDUCE_CART", payload: x });
  };

  return (
    <Contexto.Provider
      value={{
        getProducts,
        addToCart,
        incrementCart,
        reduceCart,
        loading,
        productos: state.productos,
        carrito: state.carrito,
      }}
    >
      {children}
    </Contexto.Provider>
  );
}

export default UseContext;
