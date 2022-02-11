import axios from "axios";
import React, { useReducer } from "react";
import Contexto from "./Contexto";
import Reducer from "./Reducer";
function UseContext(props) {
  // const [loading, setLoading] = false;
  const { children } = props;
  const initialState = {
    productos: [],
    carrito: [],
  };
  const [state, dispatch] = useReducer(Reducer, initialState);

  const getProducts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products?limit=30");
    // setLoading(true);
    dispatch({ type: "GET_PRODUCTS", payload: res.data });
  };
  const addToCart = (x) => {
    dispatch({ type: "ADD_CART", payload: x });
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
        productos: state.productos,
        carrito: state.carrito,
      }}
    >
      {children}
    </Contexto.Provider>
  );
}

export default UseContext;
