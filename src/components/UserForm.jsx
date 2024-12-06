import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

function UserForm({ closeModal }) {
  const { users, setUsers } = useContext(AppContext);

  // Initial state for the form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('User'); // Default role as 'User'
  const [permissions, setPermissions] = useState('Read'); // Default permission as 'Read'

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the inputs
    if (!name || !email) {
      alert('Please fill in all fields');
      return;
    }

    // Create a new user object
    const newUser = {
      id: users.length + 1, // Simple ID generation, adjust as needed
      name,
      email,
      role,
      permissions,
    };

    // Add the new user to the users state
    setUsers([...users, newUser]);

    // Reset the form fields
    setName('');
    setEmail('');
    setRole('User');
    setPermissions('Read');

    // Close the modal
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="role">Role:</label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>
      </div>
      <div>
        <label htmlFor="permissions">Permissions:</label>
        <select
          id="permissions"
          value={permissions}
          onChange={(e) => setPermissions(e.target.value)}
        >
          <option value="Read">Read</option>
          <option value="Write">Write</option>
          <option value="Delete">Delete</option>
        </select>
      </div>
      <button type="submit">Add User</button>
    </form>
  );
}

export default UserForm;
