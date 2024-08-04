import React, {useEffect, useState} from 'react';
import Card from "../../pages/Card.jsx";
import CardList from "./CardList.jsx";
import {getPendingPosts} from "../../services/postApi.js";

const Monitoring = () => {
    const role = localStorage.getItem("role");

    const [posts, setPosts] = useState(null);

    useEffect(() => {
        const fetchListPosts = async () => {

            const { data } = await getPendingPosts();
            setPosts(data);
        }

        fetchListPosts().catch(console.log);
    }, []);


    return (
        <div className="container mx-auto">
            {role === "ROLE_ADMIN" ? (
                <div />
            ) : (
                <CardList data={posts} />
            )}
        </div>
    )
}

export default Monitoring;