import React, { useState } from "react";
import "./sass/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

export const AppContext = React.createContext(null);

export function App() {
  const [firstDrop, setFirstDrop] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <AppContext.Provider
        value={{ showDropdown, setFirstDrop, setShowDropdown, firstDrop }}
      >
        <div className="container-fluid p-0 vh-100">
          <Navbar />
          <div className="container mt-2 ">
            <Main />
          </div>
        </div>
      </AppContext.Provider>
    </>
  );
}
