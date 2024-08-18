import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ANavbar from './ANavbar';
import './Client.css';

const Admin = () => {
    const [admins, setAdmins] = useState([]);
    const [newAdmin, setNewAdmin] = useState({ name: '', email: '' });

    useEffect(() => {
        // Fetch all admins on component mount
        axios.get('http://localhost:8080/api/admins')
            .then(response => setAdmins(response.data))
            .catch(error => console.error('Error fetching admins:', error));
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/admins/${id}`);
            setAdmins(admins.filter(admin => admin._id !== id));
        } catch (error) {
            console.error('Error deleting admin:', error);
        }
    };

    const handleAddAdmin = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/admins', newAdmin);
            setAdmins([...admins, response.data]);
            setNewAdmin({ name: '', email: '' });
        } catch (error) {
            console.error('Error adding admin:', error);
        }
    };

    return (
        <>
            <ANavbar />

            <div className="main">
            <div className="add-admin">
                    <input
                    id='io'
                        type="text"
                        placeholder="Name"
                        value={newAdmin.name}
                        onChange={(e) => setNewAdmin({ ...newAdmin, name: e.target.value })}
                    />
                    <input
                        id='io'
                        type="email"
                        placeholder="Email"
                        value={newAdmin.email}
                        onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })}
                    />
                    <button onClick={handleAddAdmin}>Add Admin</button>
                </div>
                <div className="table-box">
                    <table>
                        <thead>
                            <tr>
                                <th scope="col" width="150px">Name</th>
                                <th scope="col" width="270px">Email</th>
                                <th scope="col" width="100px">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {admins.map(admin => (
                                <tr key={admin._id}>
                                    <td>{admin.name}</td>
                                    <td>{admin.email}</td>
                                    <td>
                                        <button onClick={() => handleDelete(admin._id)} className="delete-button">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
              
            </div>
        </>
    );
};

export default Admin;
