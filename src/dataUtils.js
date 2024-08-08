import axios from 'axios';

const API_URL = 'http://localhost:5000/users';

export const readUserData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error reading user data:', error);
    return [];
  }
};

export const saveUserData = async (users) => {
  try {
    const response = await axios.post(API_URL, users);
    return response.data;
  } catch (error) {
    console.error('Error saving user data:', error);
  }
};




// export const readUserData = () => {
//     const users = localStorage.getItem("users");
//     return users ? JSON.parse(users) : [];
//   };
  
//   export const saveUserData = (users) => {
//     localStorage.setItem("users", JSON.stringify(users));
//   };
