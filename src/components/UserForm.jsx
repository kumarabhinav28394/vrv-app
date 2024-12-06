import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import UserModal from './UserModal';

function UserForm() {
  const { users, setUsers } = useContext(AppContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddUser = (userData) => {
    setUsers([...users, { ...userData, id: users.length + 1 }]);
    setIsModalOpen(false); // Close the modal after submission
  };

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Add New User</button>
      <UserModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleAddUser} />
    </div>
  );
}

export default UserForm;
