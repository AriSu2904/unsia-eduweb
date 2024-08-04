import React, {useState} from 'react';
import {BsList, BsPersonCircle} from "react-icons/bs";
import {useNavigate} from "react-router-dom";
import Loading from "../shared/Loading.jsx";

const Navbar = ({sidebarToggle, setSidebarToggle}) => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const logoutAction = () => {
        setIsLoading(true);
        localStorage.clear();
        setTimeout(() => {
            navigate('/');
            setIsLoading(false);
        },1000)
    }

    if(isLoading){
        return <Loading />
    }

    return (
        <nav className="bg-gray-600 px-4 py-3 flex justify-between">
            <div className="flex items-center text-xl">
                <BsList size={32} className="me-4 cursor-pointer text-white"
                        onClick={() => setSidebarToggle(!sidebarToggle)}
                />
                <h1>Welcome {localStorage.getItem("email")}</h1>
            </div>
            <div className="relative">
                <button className="text-white group mr-4">
                <BsPersonCircle size={32}/>
                <div className="z-10 hidden absolute bg-white rounded-lg shadow w-32 group-focus:block top-full right-0">
                    <ul className="py-2 text-sm text-gray-950">
                        <li  className="hover:bg-gray-300"><a href="">Profile</a></li>
                        <li className="hover:bg-gray-300"><a onClick={logoutAction}>Logout</a></li>
                    </ul>
                </div>
                </button>
            </div>
        </nav>
    )
}

export default Navbar;