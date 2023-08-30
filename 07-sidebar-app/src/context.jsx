import React, { createContext, useContext, useState } from "react";

const contextApp = createContext();

const AppProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openSideBar = () => {
    setIsSideBarOpen(true);
  };
  const closeSideBar = () => {
    setIsSideBarOpen(false);
  };

  return (
    <contextApp.Provider
      value={{
        isSideBarOpen,
        isModalOpen,
        openModal,
        closeModal,
        openSideBar,
        closeSideBar,
      }}
    >
      {children}
    </contextApp.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(contextApp);
};

export { useGlobalContext, AppProvider };
