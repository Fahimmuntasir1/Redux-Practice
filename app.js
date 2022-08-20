const { createStore, combineReducers } = require("redux");

// productsConstants
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";
// cartConstants
const GET_CART_ITEMS = "GET_CART_ITEMS";
const ADD_CART_ITEMS = "ADD_CART_ITEMS";

const initialProductState = {
  products: ["mouse", "remote"],
  numberOfProducts: 2,
};
const initialCartState = {
  items: ["Keyboard"],
  numberOfItems: 1,
};

// productsActions
const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};
const addProducts = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};
// CartActions
const getCartItems = () => {
  return {
    type: GET_CART_ITEMS,
  };
};
const addCartItems = (product) => {
  return {
    type: ADD_CART_ITEMS,
    payload: product,
  };
};

// productsReducer
const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload],
        numberOfProducts: [state.numberOfProducts + 1],
      };

    default:
      return state;
  }
};
// cartReducer
const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case GET_CART_ITEMS:
      return {
        ...state,
      };
    case ADD_CART_ITEMS:
      return {
        items: [...state.items, action.payload],
        numberOfItems: [state.numberOfItems + 1],
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  productsR: productReducer,
  cartR: cartReducer,
});

const store = createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProducts());
store.dispatch(addProducts("mobile"));
store.dispatch(getCartItems());
store.dispatch(addCartItems("camera"));
