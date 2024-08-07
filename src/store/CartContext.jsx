import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
  toggleItem: (item) => {},
});

function CartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEMS":
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const updatedItems = [...state.items];

      if (existingCartItemIndex > -1) {
        const existingItem = state.items[existingCartItemIndex];
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems.push({ ...action.item, quantity: 1 });
      }
      return { ...state, items: updatedItems };

    case "REMOVE_ITEMS":
      const removeCartItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const updatedRemoveItems = [...state.items];

      if (updatedRemoveItems[removeCartItemIndex].quantity === 1) {
        updatedRemoveItems.splice(removeCartItemIndex, 1);
      } else {
        const updatedItem = {
          ...updatedRemoveItems[removeCartItemIndex],
          quantity: updatedRemoveItems[removeCartItemIndex].quantity - 1,
        };
        updatedRemoveItems[removeCartItemIndex] = updatedItem;
      }
      return { ...state, items: updatedRemoveItems };

    case "TOGGLE_ITEM":
      const toggleItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      if (toggleItemIndex > -1) {
        return CartReducer(state, { type: "REMOVE_ITEMS", id: action.item.id });
      } else {
        return CartReducer(state, { type: "ADD_ITEMS", item: action.item });
      }

    case "CLEAR_CART":
      return { ...state, items: [] };

    default:
      return state;
  }
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(CartReducer, { items: [] });

  function addItem(item) {
    dispatchCartAction({ type: "ADD_ITEMS", item: item });
  }

  function removeItem(id) {
    dispatchCartAction({ type: "REMOVE_ITEMS", id: id });
  }

  function toggleItem(item) {
    dispatchCartAction({ type: "TOGGLE_ITEM", item: item });
  }

  function clearCart() {
    dispatchCartAction({ type: "CLEAR_CART" });
  }

  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
    toggleItem,
    clearCart,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;