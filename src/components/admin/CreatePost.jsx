import React, {useState} from 'react';
import {createPost} from "../../services/postApi.js";
import AlertDialog from '../shared/Alert.jsx'
import {useNavigate} from "react-router-dom";

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState([]);
    const navigate = useNavigate();

    const handleFileChange = (e) => {
        setFiles(e.target.files);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const post = JSON.stringify({title, content});

        const blob = new Blob([post], {
            type: 'application/json'
        })


        const formData = new FormData();
        formData.append('post', blob);

        for (let i = 0; i < files.length; i++) {
            formData.append('files', files[i]);
        }

        try {
            await createPost(formData);
            AlertDialog({
                title: 'Success',
                text: 'Successfully Approved',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(() => {
                navigate('/dashboard');
            })
        } catch (error) {
            console.error('There was an error creating the post!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md mt-10">
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Content</label>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Upload Images</label>
                <input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                />
            </div>
            <button
                type="submit"
                className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition duration-300"
            >
                Create Post
            </button>
        </form>
    );
};

export default CreatePost;
