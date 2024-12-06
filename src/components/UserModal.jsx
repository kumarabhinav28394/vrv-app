import React, { useState } from 'react';
import './UserModal.css';  // CSS for styling the modal

function UserModal({ isOpen, onClose, onSubmit }) {
  const [userData, setUserData] = useState({ name: '', email: '', role: 'User', status: 'Active' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(userData); // Pass the user data back to the parent
    setUserData({ name: '', email: '', role: 'User', status: 'Active' }); // Reset form
  };

  if (!isOpen) return null; // If the modal is not open, return null

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add New User</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleInputChange}
            placeholder="User Name"
            required
          />
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            placeholder="User Email"
            required
          />
          <select
            name="role"
            value={userData.role}
            onChange={handleInputChange}
          >
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
          <select
            name="status"
            value={userData.status}
            onChange={handleInputChange}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <div className="modal-actions">
            <button type="submit">Add User</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserModal;
