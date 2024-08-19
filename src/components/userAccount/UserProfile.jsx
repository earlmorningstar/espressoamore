import { useEffect, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { readUserData } from "../../dataUtils";

function UserProfile() {
  const [userData, setUserData] = useState(null);

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

  if (!userData) {
    return <div>Loading...</div>;
  }

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
          <button className="user-info-btn">Delete my account</button>
        </div>
      </div>

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
          <button className="user-info-btn">Make an order</button>
        </div>

        <div className="status-dateCreated-holder">
          <div>
            <span>Status</span>
            <p>
              <FaCircle color="rgb(0, 255, 0)" size={10} /> Active
            </p>
          </div>
          <div>
            <span>Created</span>
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
