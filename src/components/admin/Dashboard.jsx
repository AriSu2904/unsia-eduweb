import React from 'react';
import Navbar from "./Navbar.jsx";
import {Outlet} from "react-router-dom";
import '../styles/styles.css';

const Dashboard = ({sidebarToggle, setSidebarToggle}) => {
    return (
            <div className={`${sidebarToggle ? "" : "ml-64"} navbar w-full`}>
                <Navbar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />
                <Outlet />
            </div>
    )
}

export default Dashboard;