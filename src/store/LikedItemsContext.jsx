import { createContext, useReducer, } from "react";
  
  const LikedItemsContext = createContext({
    items: [],
    addLikedItem: (items) => {},
    removeLikedItem: (id) => {},
    clearLikedItem: () => {},
    isItemLiked: (item) => false,
  });
  
  function LikedItemsReducer(state, action) {
    if (action.type === "ADD_LIKED_ITEMS") {
      const existingLikedItemsIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
  
      const updatedItems = [...state.items];
  
      if (existingLikedItemsIndex > -1) {
        const existingItem = state.items[existingLikedItemsIndex];
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };
        updatedItems[existingLikedItemsIndex] = updatedItem;
      } else {
        updatedItems.push({ ...action.item, quantity: 1 });
      }
  
      return { ...state, items: updatedItems };
    }
  
    if (action.type === "REMOVE_LIKED_ITEMS") {
      const existingLikedItemsIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
  
      const existingLikedItem = state.items[existingLikedItemsIndex];
      const updatedItems = [...state.items];
  
      if (existingLikedItem.quantity === 1) {
        updatedItems.splice(existingLikedItemsIndex, 1);
      } else {
        const updatedItem = {
          ...existingLikedItem,
          quantity: existingLikedItem.quantity - 1,
        };
        updatedItems[existingLikedItemsIndex] = updatedItem;
      }
      return { ...state, items: updatedItems };
    }
  
    if (action.type === "CLEAR_LIKED_ITEMS") {
      return { ...state, items: [] };
    }
    return state;
  }
  
  export function LikedItemsContextProvider({ children }) {
  
    const [likedItems, dispatchLikedItemsAction] = useReducer(LikedItemsReducer, {
      items: [],
    });  
  
    function addLikedItem(item) {
      dispatchLikedItemsAction({ type: "ADD_LIKED_ITEMS", item: item });
    }
  
    function removeLikedItem(id) {
      dispatchLikedItemsAction({ type: "REMOVE_LIKED_ITEMS", id: id });
    }
  
    function clearLikedItem() {
      dispatchLikedItemsAction({ type: "CLEAR_LIKED_ITEMS" });
    }
  
    function isItemLiked(item) {
      return likedItems.items.some((likedItem) => likedItem.id === item.id);
    }
  
    const likedItemsContext = {
      items: likedItems.items,
      addLikedItem: addLikedItem,
      removeLikedItem: removeLikedItem,
      clearLikedItem: clearLikedItem,
      isItemLiked: isItemLiked,
    };
  
    return (
      <LikedItemsContext.Provider value={likedItemsContext}>
        {children}
      </LikedItemsContext.Provider>
    );
  }
  export default LikedItemsContext;
  