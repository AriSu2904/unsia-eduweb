import {useEffect, useState} from "react";
import {getPendingPosts} from "../../services/postApi.js";
import CardList from "./CardList.jsx";

const Post = () => {
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchListPosts = async () => {

            const { data } = await getPendingPosts();
            console.log(data);
            setPost(data);
        }

        fetchListPosts().catch(console.log);
    }, []);

    return (
        <div>
            <CardList data={post} />
        </div>
    )
}

export default Post;