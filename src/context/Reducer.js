//TYPES

const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_CART = "ADD_CART";
const INCREMENT_CART = "INCREMENT_CART";
const REDUCE_CART = "REDUCE_CART";

export default function Reducer(state, action) {
  const { payload, type } = action;
  switch (type) {
    case GET_PRODUCTS:
      return { ...state, productos: payload };
    case ADD_CART:
      let newProduct = state.productos.filter(
        (it) => it.id == parseInt(payload)
      );
      const productExistInCart = state.carrito.some(
        (el) => el[0].id === payload
      );
      if (!productExistInCart) {
        newProduct[0].quantity = 1;
        return {
          ...state,
          carrito: [...state.carrito, newProduct],
        };
      } else {
        // Obtengo el index del carrito
        const index = state.carrito.findIndex(
          (it) => it[0].id == parseInt(payload)
        );
        // obtengo el objeto entero
        const editProduct = state.carrito[index][0];
        // modifico la cantidad en +1
        editProduct.quantity = editProduct.quantity + 1;
        return {
          ...state,
          carrito: [...state.carrito],
        };
      }

    case INCREMENT_CART:
      // Obtengo el index del carrito
      const index = state.carrito.findIndex(
        (it) => it[0].id == parseInt(payload)
      );
      // obtengo el objeto entero
      const editProduct = state.carrito[index][0];
      // modifico la cantidad del producto
      editProduct.quantity = editProduct.quantity + 1;
      return {
        ...state,
        carrito: [...state.carrito],
      };
    case REDUCE_CART:
      // obtengo el index del elemento
      const i = state.carrito.findIndex((it) => it[0].id == parseInt(payload));
      // obytengo el elemento
      let element = state.carrito[i][0];
      if (element.quantity > 0) {
        element.quantity = element.quantity - 1;
        return {
          ...state,
          carrito: [...state.carrito],
        };
      } else {
        const cartReduced = state.carrito.filter(
          (item) => item[0].id !== payload
        );
        return {
          ...state,
          carrito: cartReduced,
        };
      }
  }
}
