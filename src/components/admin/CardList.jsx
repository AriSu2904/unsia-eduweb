import React from 'react';
import Card from "../../pages/Card.jsx";
import { approvePost } from "../../services/postApi.js";
import AlertDialog from "../shared/Alert.jsx";

const CardList = ({ data }) => {

    const getStatus = (status) => {
        if(status === "APPROVAL_PENDING") {
           return "PENDING"
        }
        return "";
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {data && data.map((item) => {
                return (
                    <Card
                        key={item.id}
                        image={item.materials[0].url}
                        title={item.title}
                        description={item.content}
                        onclick={() => {
                            approvePost(item.id).then(() => {
                                AlertDialog({
                                    title: 'Success',
                                    text: 'Successfully Approved',
                                    icon: 'success',
                                    confirmButtonText: 'OK'
                                }).then(() => {
                                    window.location.reload();
                                })
                            });
                        }}
                        footer={getStatus(item.approval)}
                    />
                );
            })}
        </div>
    );
};

export default CardList;
