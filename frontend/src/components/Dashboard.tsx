import React, { useState, useEffect } from 'react';

const Dashboard = (props: any) => {
    const [newRequests, setNewRequests] = useState([]);

    useEffect(() => {
        // get the new requests
    }, []);

    const handleAcceptRequest = (request: any) => {
        // mint a Soulbond NFT with expiry date
        // encrypted data like name, email, and ID number
    }
    
    return (
        // JSX markup goes here
        <div>
            <h2>Dashboard</h2>
            <p>View and manage new requests.</p>
            <div>
                <h5>* New Requests</h5>
                <ul>
                    {newRequests.map((request: any, index: number) => (
                        <li key={index}>
                            <h4>{request.title}</h4>
                            <p>{request.description}</p>
                            <button>View</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;