import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { readUserData } from "../../dataUtils";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { FaCircle, FaUserAlt } from "react-icons/fa";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "rgb(205, 196, 189)",
  color: "#000000",
  p: 3,
};

function UserProfile() {
  const [userData, setUserData] = useState(null);
  const [openParentModal, setOpenParentModal] = useState(false);
  const [openChildModal, setOpenChildModal] = useState(false);
  const { handleLogout } = useOutletContext();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const loggedInUsername = localStorage.getItem("loggedInUser");
      const users = await readUserData();
      const currentUser = users.find(
        (user) => user.username === loggedInUsername
      );

      if (currentUser) {
        setUserData(currentUser);
        localStorage.setItem("accountCreationDate", currentUser.createdDate);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const saveUserData = localStorage.getItem("users");
    if (saveUserData) {
      setUserData(JSON.parse(saveUserData));
    }
  }, []);

  const handleDeleteAccount = () => {
    localStorage.removeItem("users");
    localStorage.setItem("isLoggedIn", "false");
    handleLogout();
  };

  const handleShopNow = () => {
    navigate("/purchasePage");
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  const handleParentModalOpen = () => setOpenParentModal(true);
  const handleParentModalClose = () => setOpenParentModal(false);

  const handleChildModalOpen = () => {
    setOpenChildModal(true);
    handleParentModalClose();
  };
  const handleChildModalClose = () => {
    setOpenChildModal(false);
    handleParentModalClose();
  };

  return (
    <div className="user-profile-parent">
      <div className="user-profile-info-part-i">
        <div className="user-image-username-holder">
          <span>
            <FaUserAlt size={70} />
          </span>
          <h3>{userData.username}</h3>
        </div>
        <div className="user-info-section">
          <span>
            <h4>First Name:</h4>
            <p>{userData.firstname}</p>
          </span>
          <span>
            <h4>Last Name:</h4>
            <p>{userData.lastname}</p>
          </span>
          <span>
            <h4>Email:</h4>
            <p>{userData.email}</p>
          </span>
          <span>
            <h4>Age:</h4>
            <p>{userData.age}</p>
          </span>
          <span>
            <h4>Mobile:</h4>
            <p>{userData.mobile}</p>
          </span>
          <button className="user-info-btn" onClick={handleParentModalOpen}>
            Delete my account
          </button>
        </div>
      </div>

      <Modal
        open={openParentModal}
        onClose={handleParentModalClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box className="modal-modal-title" sx={modalStyle}>
          <h2 id="parent-modal-title">Do you want to delete your account?</h2>
          <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
            <button className="modal-button" onClick={handleParentModalClose}>
              No
            </button>
            <button className="modal-button" onClick={handleChildModalOpen}>
              Yes
            </button>
          </Box>
        </Box>
      </Modal>

      <Modal
        open={openChildModal}
        onClose={handleChildModalClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box className="modal-modal-title" sx={{ ...modalStyle, width: 400 }}>
          <h2 id="child-modal-title">Permanent Removal Warning</h2>
          <p className="child-modal-description">
            1. <b>Permanent Removal:</b> Deleting your account will result in
            the permanent removal of all your account details and associated
            information from our system.
          </p>
          <p className="child-modal-description">
            2. <b>Data Erasure:</b> All personal data, including your profile
            information, purchase history, and any saved preferences, will be
            erased and cannot be recovered.
          </p>
          <p className="child-modal-description">
            3. <b>Irreversible Action:</b> Once your account is deleted, this
            action cannot be undone. You will lose access to any services or
            features linked to your account.
          </p>
          <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
            <button className="modal-button" onClick={handleChildModalClose}>
              Abort
            </button>
            <button
              className="modal-button"
              onClick={() => {
                handleDeleteAccount();
                handleChildModalClose();
              }}
            >
              Proceed
            </button>
          </Box>
        </Box>
      </Modal>

      <div className="user-profile-info-part-ii">
        <div className="completion-holder">
          <div className="percentage-holder">
            <span>100%</span>
            <p>of the profile is completed.</p>
          </div>
          <div className="percentage-holder">
            <span>100%</span>
            <p>of your orders is completed.</p>
          </div>
        </div>

        <div className="user-notice">
          <p>You should note...</p>
          <h3>You have no pending order at the moment.</h3>
          <button onClick={handleShopNow} className="user-info-btn">
            Make an order
          </button>
        </div>

        <div className="status-dateCreated-holder">
          <div>
            <span>Status</span>
            <p>
              <FaCircle color="rgb(0, 255, 0)" size={10} /> Active
            </p>
          </div>
          <div>
            <span>Account Created</span>
            <p>
              {localStorage.getItem("accountCreationDate") || "No date stored."}
            </p>
          </div>
          <div>
            <span>Last Updated</span>
            <p>
              {localStorage.getItem("accountCreationDate") || "No date stored."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
