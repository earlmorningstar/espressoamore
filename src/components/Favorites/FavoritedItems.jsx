import { useContext, useState } from "react";
import LikedItemsContext from "../../store/LikedItemsContext";
import { NavLink } from "react-router-dom";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "rgb(205, 196, 189)",
  color: "rgb(111, 66, 56)",
  boxShadow: 24,
  p: 2,
};


function FavoritedItems() {
  const likedItemsCtx = useContext(LikedItemsContext);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
              <button onClick={handleOpen}>Clear All</button>
            </div>
          )}
        </>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography className="modal-modal-title" variant="h6" component="h2">
            Do you want to clear your list of favorited items?
          </Typography>
          <Typography className="modal-modal-title" id="modal-modal-title-id" variant="h6" component="h2">
            Selected items will be removed from this list.
          </Typography>
          <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
            <button className="modal-button" onClick={handleClose}>
              No
            </button>
            <button
              className="modal-button"
              onClick={() => {
                likedItemsCtx.clearLikedItems();
                handleClose();
              }}
            >
              Yes
            </button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default FavoritedItems;
