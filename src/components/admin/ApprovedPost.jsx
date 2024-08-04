import {useEffect, useState} from "react";
import {getApprovedPost} from "../../services/postApi.js";
import CardList from "./CardList.jsx";

const Post = () => {
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchListPosts = async () => {

            const {data} = await getApprovedPost();
            console.log(data);
            setPost(data);
        }

        fetchListPosts().catch(console.log);
    }, []);

    return (
        <div>
            <CardList data={post}/>
        </div>
    )
}

export default Post;