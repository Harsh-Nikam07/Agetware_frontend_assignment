// Reducers.js

export const cartReducer = (state, action) => {
    switch (action.type) {
      case "SET_PRODUCTS":
        return { ...state, products: action.payload }; // Update products

      case "ADD_TO_CART":
        return { ...state, cart: [...state.cart, { ...action.payload, qty: 1}]}

      case "REMOVE_FROM_CART":
        return { ...state, cart: state.cart.filter((c) => c.id !== action.payload.id) }
      default:
        return state;
    }
  };
  
  // Add this if you want a reducer for filtering or product state
  export const productReducer = (state, action) => {
    switch (action.type) {
      case "FILTER_BY_STOCK":
        return { ...state, byStock: !state.byStock };
      case "FILTER_BY_DELIVERY":
        return { ...state, byFastDelivery: !state.byFastDelivery };
      case "FILTER_BY_RATING":
        return { ...state, byRating: action.payload };
      case "FILTER_BY_SEARCH":
        return { ...state, searchQuery: action.payload };
      case "CLEAR_FILTERS":
        return {
          byStock: false,
          byFastDelivery: false,
          byRating: 0,
          searchQuery: "",
        };
      default:
        return state;
    }
  };
  