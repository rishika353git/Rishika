import React from "react";
import ShowAccessories from "./ShowAccessories";
import Sidebar from "./Sidebar";


const AccessoriesPage2 = () => {
  return (
    <div className="d-flex">
    {/* Sidebar - Fixed width and proper border */}
    <div className="sidebar-container" style={{ width: "250px" }}>
      <Sidebar />
    </div>

    {/* Dashboard - Flexible layout */}
    <div className="flex-grow-1 bg-light">
      <ShowAccessories />
    </div>
  </div>
  );
};

export default AccessoriesPage2;
