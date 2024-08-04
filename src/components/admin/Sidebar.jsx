import React from 'react';
import {BsClipboardMinus, BsClipboardPlus, BsPersonLinesFill, BsUpload, BsViewList} from "react-icons/bs";
import {Link} from 'react-router-dom';
import '../styles/styles.css'

const Sidebar = ({sidebarToggle, closeSideBar}) => {
    const role = localStorage.getItem("role");


    return (
        <div
            className={`${sidebarToggle ? "sidebar-closed" : "sidebar-open"} sidebar w-64 bg-gray-600 fixed h-full px-4 py-2`}>
            <div className="my-2 mb-4">
                {role === "ROLE_ADMIN" ? (
                    <h1 className="text-2xl text-white font-bold">
                        Admin Dashboard
                    </h1>
                ) : (
                    <h1 className="text-2xl text-white font-bold">
                        Dashboard
                    </h1>
                )}
            </div>
            <hr/>
            <ul className="mt-3 text-white font-bold">
                <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
                    <Link to="" onClick={closeSideBar}>
                        <p className="px-3">
                            <BsViewList className="inline-block w-6 h-6 mr-2 -mt-2"></BsViewList>
                            Monitoring
                        </p>
                    </Link>
                </li>
                <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
                    {
                        role === "ROLE_ADMIN" ? (
                            <Link to="posts" onClick={closeSideBar}>
                                <p className="px-3">
                                    <BsClipboardMinus className="inline-block w-6 h-6 mr-2 -mt-2"/>
                                    Pending Approval
                                </p>
                            </Link>
                        ) : (
                            <Link to="posts-published" onClick={closeSideBar}>
                                <p className="px-3">
                                    <BsClipboardPlus className="inline-block w-6 h-6 mr-2 -mt-2"/>
                                    Newest Posts
                                </p>
                            </Link>
                        )
                    }
                </li>
                <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
                    <Link to={"create-posts"} onClick={closeSideBar}>
                        <p className="px-3">
                            <BsUpload className="inline-block w-6 h-6 mr-2 -mt-2"></BsUpload>
                            Create Post
                        </p>
                    </Link>
                </li>
                {
                    role === "ROLE_ADMIN" ? (
                        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
                            <Link to="users" onClick={closeSideBar}>
                                <p className="px-3">
                                    <BsPersonLinesFill
                                        className="inline-block w-6 h-6 mr-2 -mt-2"></BsPersonLinesFill>
                                    List User
                                </p>
                            </Link>
                        </li>
                    ) : ""
                }

            </ul>
        </div>
    )
}

export default Sidebar;