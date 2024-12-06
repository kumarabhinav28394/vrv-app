import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

function RoleTable() {
  const { users, setUsers } = useContext(AppContext);
  const [editingUser, setEditingUser] = useState(null);
  const [editedRole, setEditedRole] = useState('');
  const [editedPermissions, setEditedPermissions] = useState('');

  const handleRoleChange = (e, userId) => {
    setEditedRole(e.target.value);
    setEditingUser(userId);
  };

  const handlePermissionsChange = (e, userId) => {
    setEditedPermissions(e.target.value);
    setEditingUser(userId);
  };

  const handleSaveChanges = (userId) => {
    const updatedUsers = users.map((user) => {
      if (user.id === userId) {
        return {
          ...user,
          role: editedRole || user.role,
          permissions: editedPermissions || user.permissions,
        };
      }
      return user;
    });

    setUsers(updatedUsers);
    setEditingUser(null); // Exit editing mode
  };

  const handleRemoveUser = (userId) => {
    if (window.confirm('Are you sure you want to remove this user?')) {
      const updatedUsers = users.filter((user) => user.id !== userId);
      setUsers(updatedUsers);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Permissions</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>

            {/* Editable Role */}
            <td>
              {editingUser === user.id ? (
                <select
                  value={editedRole || user.role}
                  onChange={(e) => handleRoleChange(e, user.id)}
                >
                  <option value="Admin">Admin</option>
                  <option value="User">User</option>
                </select>
              ) : (
                user.role
              )}
            </td>

            {/* Editable Permissions */}
            <td>
              {editingUser === user.id ? (
                <select
                  value={editedPermissions || user.permissions}
                  onChange={(e) => handlePermissionsChange(e, user.id)}
                >
                  <option value="Read">Read</option>
                  <option value="Write">Write</option>
                  <option value="Delete">Delete</option>
                </select>
              ) : (
                user.permissions
              )}
            </td>

            {/* Actions: Save and Remove */}
            <td>
              {editingUser === user.id ? (
                <button onClick={() => handleSaveChanges(user.id)}>Save</button>
              ) : (
                <button onClick={() => setEditingUser(user.id)}>Edit</button>
              )}
              <button onClick={() => handleRemoveUser(user.id)}>Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default RoleTable;
