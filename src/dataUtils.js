export const readUserData = () => {
    const users = localStorage.getItem("users");
    return users ? JSON.parse(users) : [];
  };
  
  export const saveUserData = (users) => {
    localStorage.setItem("users", JSON.stringify(users));
  };
