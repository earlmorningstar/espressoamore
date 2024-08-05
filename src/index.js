import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { UserProgressContextProvider } from "./store/UserProgressContext";
import { LikedItemsContextProvider } from "./store/LikedItemsContext";
import { CartContextProvider } from "./store/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProgressContextProvider>
      <LikedItemsContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </LikedItemsContextProvider>
    </UserProgressContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
