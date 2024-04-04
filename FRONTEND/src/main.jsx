import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

export const Context = createContext({ isAuthorized: false });

export AppWrapper = ()=> {
  const [isAuthorized, serIsAuthorized] = useState();
  const [user,setUser] = useState();
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
