import React from 'react';

const Card = ({ image, title, author, description, footer, onclick }) => {
    const role = localStorage.getItem("role");

    return (
        <div className="p-2 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            {image && (
                <img src={image} alt={title} className="w-full h-48 object-cover" />
            )}
            <div className="p-4">
                {author && (
                    <h2 className="text-lg font-semibold mb-2 text-gray-800">{author}</h2>
                )}
                {title && (
                    <h2 className="text-lg font-semibold mb-2 text-gray-800">{title}</h2>
                )}
                {description && (
                    <p className="text-gray-600 mb-4">{description}</p>
                )}
                {
                    role === "ROLE_ADMIN" && (
                        <button className="bg-green-500 p-2 rounded-xl" onClick={onclick}>
                            Approve
                        </button>
                    )
                }
                {footer && (
                    <div className="mt-4 p-2 bg-red-400 w-fit rounded-xl">
                        Status: {footer}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Card;
