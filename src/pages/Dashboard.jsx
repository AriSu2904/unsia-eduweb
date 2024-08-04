import React, {useEffect, useState} from 'react';
import Sidebar from "../components/admin/Sidebar.jsx";
import Dashboard from "../components/admin/Dashboard.jsx";

const DashboardPage = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const closeSideBar = () => {
        setSidebarOpen(!sidebarOpen);
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setSidebarOpen(!sidebarOpen);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
            <div className="flex">
                <Sidebar sidebarToggle={sidebarOpen} closeSideBar={closeSideBar}/>
                <Dashboard sidebarToggle={sidebarOpen} setSidebarToggle={setSidebarOpen} />
            </div>
    )
}

export default DashboardPage;