import { createContext, useReducer, useEffect } from "react";

const LikedItemsContext = createContext({
  items: [],
  addLikedItem: (item) => {},
  removeLikedItem: (id) => {},
  clearLikedItems: () => {},
  isItemLiked: (item) => false,
});

function LikedItemsReducer(state, action) {
  switch (action.type) {
    case "INIT_ITEMS":
      return { ...state, items: action.items };

    case "ADD_LIKED_ITEM":
      if (state.items.some((item) => item.id === action.item.id)) {
        return state;
      }
      return { ...state, items: [...state.items, action.item] };

    case "REMOVE_LIKED_ITEM":
      return { ...state, items: state.items.filter((item) => item.id !== action.id) };

    case "CLEAR_LIKED_ITEMS":
      return { ...state, items: [] };

    default:
      return state;
  }
}

export function LikedItemsContextProvider({ children }) {
  const [likedItems, dispatchLikedItemsAction] = useReducer(LikedItemsReducer, { items: [] });

  useEffect(() => {
    const storedLikedItems = localStorage.getItem("likedItems");
    if (storedLikedItems) {
      dispatchLikedItemsAction({ type: "INIT_ITEMS", items: JSON.parse(storedLikedItems) });
    }
  }, []);

  useEffect(() => {
    if (likedItems.items.length > 0) {
      localStorage.setItem("likedItems", JSON.stringify(likedItems.items));
    } else {
      localStorage.removeItem("likedItems");
    }
  }, [likedItems.items]);

  function addLikedItem(item) {
    dispatchLikedItemsAction({ type: "ADD_LIKED_ITEM", item: item });
  }

  function removeLikedItem(id) {
    dispatchLikedItemsAction({ type: "REMOVE_LIKED_ITEM", id: id });
  }

  function clearLikedItems() {
    dispatchLikedItemsAction({ type: "CLEAR_LIKED_ITEMS" });
  }

  function isItemLiked(item) {
    return likedItems.items.some((likedItem) => likedItem.id === item.id);
  }

  const likedItemsContext = {
    items: likedItems.items,
    addLikedItem,
    removeLikedItem,
    clearLikedItems,
    isItemLiked,
  };

  return (
    <LikedItemsContext.Provider value={likedItemsContext}>
      {children}
    </LikedItemsContext.Provider>
  );
}

export default LikedItemsContext;