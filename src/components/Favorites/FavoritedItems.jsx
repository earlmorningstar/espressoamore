import { useContext } from "react";
import LikedItemsContext from "../../store/LikedItemsContext";
import { NavLink } from "react-router-dom";

function FavoritedItems() {
  const likedItemsCtx = useContext(LikedItemsContext);

  return (
    <div className="cart-parent">
        <div className="navlink-container" id="twin-nav-btn">
        <NavLink className="navlinkBtn" to="/homePage">
          <button className="all-back-btn">Home</button>
        </NavLink>
        <NavLink className="navlinkBtn" to="/purchasePage">
          <button className="all-back-btn">Back</button>
        </NavLink>
      </div>
      <h1>Favorited Items:</h1>
      {likedItemsCtx.items.length === 0 ? (
        <span>You don't have any Favorited items to view.</span>
      ) : (
        <>
          <ul>
            {likedItemsCtx.items.map((item) => (
              <li className="cart-list" key={item.id}>
                <div>
                    <h3>{item.name}</h3>
                </div>
                <div className="cart-twin-btn" id="cart-twin-btn-id">
                <button onClick={() => likedItemsCtx.removeLikedItem(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
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