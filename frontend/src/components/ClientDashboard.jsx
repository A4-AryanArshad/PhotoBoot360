import React, { useState, useEffect } from 'react';
import './Client.css'; 
import axios from 'axios';
import ANavbar from './ANavbar';

const ClientDashboard = () => {
    const [clients, setClients] = useState([]);
    const [sidebarActive, setSidebarActive] = useState(false);

    const toggleSidebar = () => setSidebarActive(!sidebarActive);

    // Function to format date
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toISOString().split('T')[0]; // Extract date part
    };

    // Fetch clients' data when the component mounts
    useEffect(() => {
        const fetchClients = async () => {
            try {
                const response = await axios.get('/api/users');
                setClients(response.data);
            } catch (error) {
                console.error('Error fetching clients data:', error);
            }
        };

        fetchClients();
    }, []);

    // Handle the delete action
    const handleDelete = async (clientId) => {
        try {
            await axios.delete(`https://photoboot360.vercel.app/api/users/${clientId}`);
            setClients(clients.filter(client => client._id !== clientId));
            
        } catch (error) {
            console.error('Error deleting user:', error);

        }
    };

    return (
        <>
        <ANavbar/>
        <div className={`app ${sidebarActive ? 'main-width' : ''}`}>
            <div className="main">
              

                <div className="table-box">
                    <table>
                        <thead>
                            <tr>
                                <th scope="col" width="150px">First Name</th>
                                <th scope="col" width="150px">Last Name</th>
                                <th scope="col" width="270px">Email</th>
                                <th scope="col" width="150px">Phone Number</th>
                                <th scope="col" width="150px">Event Date</th>
                                <th scope="col" width="150px">Event Time</th>
                                <th scope="col" width="150px">Location</th>
                                <th scope="col" width="150px">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clients.map(client => (
                                <tr key={client._id}>
                                    <td data-label="First Name">{client.firstName}</td>
                                    <td data-label="Last Name">{client.lastName}</td>
                                    <td data-label="Email">{client.email}</td>
                                    <td data-label="Phone Number">{client.phoneNumber}</td>
                                    <td data-label="Event Date">{formatDate(client.eventDate)}</td>
                                    <td data-label="Event Time">{client.eventTime}</td>
                                    <td data-label="Location">{client.eventLocation}</td>
                                    <td data-label="Delete">
                                        <button onClick={() => handleDelete(client._id)} className="delete-button">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    );
};

export default ClientDashboard;
