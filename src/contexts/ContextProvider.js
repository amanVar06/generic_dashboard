import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);

  return (
    // whatever values we passed here they will pass to all the components
    // of our entire application
    <StateContext.Provider
      value={{
        // activeMenu: activeMenu
        activeMenu,
        setActiveMenu,
      }}
    >
      {children}
      {/* we always return children from inside of it  */}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
