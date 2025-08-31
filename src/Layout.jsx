import React, { useState } from "react";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import styles from './Layout.module.scss'

const Layout = ({ children }) => {
  const [activeItem, setActiveItem] = useState("home");

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className={`flex ${styles.sidebarAndDataContianer}`}>
          <SideBar activeItem={activeItem} setActiveItem={setActiveItem} />
          <div className={styles.dataContainer}>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
