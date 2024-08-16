import { FaUserAlt } from "react-icons/fa";

function UserProfile() {
  return (
    <div className="user-profile-parent">
      <div className="user-profile-info-part-i">
        <div className="user-image-username-holder">
          <span><FaUserAlt size={70}/></span>
          <h3>My Username</h3>
        </div>
        <div className="user-info-section">
        <span>
            <h4>First Name:</h4>
            <p>Earl</p>
          </span>
          <span>
            <h4>Last Name:</h4>
            <p>Morningstar</p>
          </span>
          <span>
            <h4>Email:</h4>
            <p>javascriptforpractice@gmail.com</p>
          </span>
          <span>
            <h4>Age:</h4>
            <p>28</p>
          </span>
          <span>
            <h4>Mobile:</h4>
            <p>+123 456 789 0</p>
          </span> 
          <button className="user-info-btn">Delete my account</button> 
        </div>
      </div>



      <div className="user-profile-info-part-ii">
        <div className="completion-holder">
          <div className="percentage-holder">
          <span>100%</span>
          <p>of the profile is completed</p>
        </div>
        <div className="percentage-holder">
          <span>100%</span>
          <p>of the profile is completed</p>
        </div>
        </div>
        
        <div className="user-notice">
          <p>You should note...</p>
          <h3>You have no pending order at the moment.</h3>
          <button className="user-info-btn">Make and order</button>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
