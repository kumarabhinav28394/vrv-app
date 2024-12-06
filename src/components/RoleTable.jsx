import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function RoleTable() {
  const { users, setUsers } = useContext(AppContext);

  const editUserPermissions = (id, permissions) => {
    setUsers(users.map(user => user.id === id ? { ...user, permissions } : user));
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Role</th>
            <th>Permissions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>
                <button onClick={() => editUserPermissions(user.id, ['Read', 'Write'])}>
                  Edit Permissions
                </button>
              </td>
              <td>
                <button onClick={() => {}}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RoleTable;
