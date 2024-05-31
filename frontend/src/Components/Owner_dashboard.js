import React, { useEffect, useState } from 'react';
import '../css/Owner_dashboard.css';
// import 'https://unicons.iconscout.com/release/v4.0.0/css/line.css';

const OwnerDashboard = () => {

    const [pendingUsers, setPendingUsers] = useState([]);


    const handleApprove = async (index) => {
        try {
            const userToUpdate = pendingUsers[index];
            const response = await fetch(`http://localhost:4000/admin/status`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: userToUpdate._id, status: 'APPROVED' }) // send user id and status
            });
    
            if (!response.ok) {
                throw new Error('Failed to update user status');
            }
    
            const updatedUser = await response.json();
            const updatedUsers = [...pendingUsers];
            updatedUsers[index] = updatedUser;
            setPendingUsers(updatedUsers);
            alert("Status : Approved Successfully");
        } catch (error) {
            console.error(error);
        }
    };
    
    const handleReject = async (index) => {
        try {
            const userToUpdate = pendingUsers[index];
            const response = await fetch(`http://localhost:4000/admin/status`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: userToUpdate._id, status: 'REJECTED' }) // send user id and status
            });
    
            if (!response.ok) {
                throw new Error('Failed to update user status');
            }
    
            const updatedUser = await response.json();
            const updatedUsers = [...pendingUsers];
            updatedUsers[index] = updatedUser;
            setPendingUsers(updatedUsers);
            alert("Status : Reject Successfully");
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await fetch('http://localhost:4000/admin', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                if (!response.ok) {
                    throw new Error('Failed to fetch pending users by frontend');
                }

                const data = await response.json();
                setPendingUsers(data.data);
                // console.log(pendingUsers);
                // console.log(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    
    
    

    return (
        <div style={{ width: '100%', paddingTop: '0px' }}>
            <section className="owner-dashboard">
                <div className="owner-top">
                    <i className="uil uil-bars owner-sidebar-toggle"></i>
                    <div className="owner-search-box">
                        <i className="uil uil-search"></i>
                        <input type="text" placeholder="Search here..." />
                    </div>
                </div>

                <div className="owner-dash-content">
                    <div className="owner-overview">
                        <div className="owner-title">
                            <i className="uil uil-tachometer-fast-alt"></i>
                            <span className="owner-text">Dashboard</span>
                        </div>
                        <div className="owner-boxes">
                            <div className="owner-box owner-box1">
                                <i className="uil uil-thumbs-up"></i>
                                <span className="owner-text">Total Likes</span>
                                <span className="owner-number">50,120</span>
                            </div>
                            <div className="owner-box owner-box2">
                                <i className="uil uil-comments"></i>
                                <span className="owner-text">Comments</span>
                                <span className="owner-number">20,120</span>
                            </div>
                            <div className="owner-box owner-box3">
                                <i className="uil uil-share"></i>
                                <span className="owner-text">Total Share</span>
                                <span className="owner-number">10,120</span>
                            </div>
                        </div>
                    </div>

                    {pendingUsers.length >= 0 ? (
                        <div className="owner-activity">
                            <div className="owner-title">
                                <i className="uil uil-clock-three"></i>
                                <span className="owner-text">Recent Pending Users</span>
                            </div>
                            <div className="owner-activity-data">
                                <table>
                                    <thead>
                                        <tr>
                                            <th className="owner-table-header">BOXNAME</th>
                                            <th className="owner-table-header">BOXADDRESS</th>
                                            <th className="owner-table-header">Sports</th>
                                            <th className="owner-table-header">STATUS</th>
                                            <th className="owner-table-header">PINCODE</th>
                                            <th className="owner-table-header">Edit Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {pendingUsers.map((user,index) => (
                                            <tr key={user._id}>
                                                <td className="owner-table-data">{user.boxName}</td>
                                                <td className="owner-table-data">{user.boxAddress}</td>
                                                <td className="owner-table-data">{user.sports.join(', ')}</td>
                                                <td className="owner-table-data">{user.status}</td>
                                                <td className="owner-table-data">{user.pincode}</td>
                                                <td className="owner-table-data">
                                                    <button className="approve-btn" onClick={() => handleApprove(index)}>Approve</button>
                                                    <button className="reject-btn" onClick={() => handleReject(index)}>Reject</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ) : (
                        <p>No pending users found.</p>
                    )}



                </div>
            </section>
        </div>
    );
};

export default OwnerDashboard;