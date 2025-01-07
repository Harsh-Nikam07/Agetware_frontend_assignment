// Reducer for cart-related actions
export const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload }; // Update products

    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };

    case "REMOVE_FROM_CART":
      return { ...state, cart: state.cart.filter((c) => c.id !== action.payload.id) };

    default:
      return state;
  }
};

// Reducer for filtering or product state
export const productReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return { ...state, sort: action.payload };

    case "SORT_BY_RATING":
      return { ...state, byRating: action.payload };

    case "SORT_BY_SEARCH":
      return { ...state, searchQuery: action.payload };

    case "FILTER_BY_CATEGORY": {
      const { category, checked } = action.payload;
      const updatedCategories = checked
        ? [...state.selectedCategories, category]
        : state.selectedCategories.filter((cat) => cat !== category);
      return {
        ...state,
        selectedCategories: updatedCategories,
      };
    }

    case "CLEAR_FILTERS":
      return {
        sort: null,
        byRating: 0,
        searchQuery: "",
        selectedCategories: [], // Reset categories
      };

    default:
      return state;
  }
};
