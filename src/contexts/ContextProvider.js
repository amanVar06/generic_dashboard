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
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03c9d7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);

  const setMode = (e) => {
    setCurrentMode(e.target.value);

    //store the theme set by the user to local storage
    //so that when user comes back again theme wont get changed
    localStorage.setItem("themeMode", e.target.value);

    setThemeSettings(false);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
  };

  const handleClick = (clicked) => {
    setIsClicked({
      ...initialState,
      [clicked]: true,
    });
  };

  return (
    // whatever values we passed here they will pass to all the components
    // of our entire application
    <StateContext.Provider
      value={{
        // activeMenu: activeMenu
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        currentMode,
        setMode,
        setColor,
        themeSettings,
        setThemeSettings,
      }}
    >
      {children}
      {/* we always return children from inside of it  */}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
