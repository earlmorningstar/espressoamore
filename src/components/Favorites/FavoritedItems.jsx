import { useContext } from "react";
import LikedItemsContext from "../../store/LikedItemsContext";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function FavoritedItems() {
  const likedItemsCtx = useContext(LikedItemsContext);

  const gridContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const gridSquareVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <div className="cart-parent">
      <div className="navlink-container" id="twin-nav-btn">
        <NavLink className="navlinkBtn" to="/homePage">
          <button className="all-back-btn">Home</button>
        </NavLink>
        <NavLink className="navlinkBtn" to="/purchasePage">
          <button className="all-back-btn">Add an item</button>
        </NavLink>
      </div>
      <h1>Favorited Items:</h1>
      {likedItemsCtx.items.length === 0 ? (
        <span>You don't have any Favorited items to view.</span>
      ) : (
        <>
          <motion.ul
            variants={gridContainerVariants}
            initial="hidden"
            animate="show"
          >
            {likedItemsCtx.items.map((item) => (
              <motion.li
                variants={gridSquareVariants}
                className="cart-list"
                key={item.id}
              >
                <div>
                  <h3>{item.name}</h3>
                </div>
                <div className="cart-twin-btn" id="cart-twin-btn-id">
                  <button
                    onClick={() => likedItemsCtx.removeLikedItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </motion.li>
            ))}
          </motion.ul>
          {likedItemsCtx.items.length > 0 && (
            <div className="cart-twin-btn" id="cart-twin-btn-id">
              <button onClick={likedItemsCtx.clearLikedItems}>Clear All</button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default FavoritedItems;
