import { useState } from 'react';
import { AppContext } from './context/AppContext';
import './App.css';
import UserTable from './components/UserTable';
import RoleTable from './components/RoleTable';
import UserForm from './components/UserForm';

function App() {
  const [users, setUsers] = useState([]);  // Stores the list of users
  const [roles, setRoles] = useState([]);  // Stores the list of roles
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  
  return (
    <AppContext.Provider value={{ users, setUsers, roles, setRoles }}>
      <div className="App">
        <h1>RBAC User Interface</h1>

        {/* All Users Table */}
        <h2>All Users</h2>
        <UserTable />  {/* This table only displays users, no edit functionality */}

        {/* Manage Users & Roles Table */}
        <h2>Manage Users & Roles</h2>
        <RoleTable />  {/* This table allows user management with roles, permissions, and removal options */}

        {/* Button to open the modal */}
        <button onClick={() => setShowModal(true)}>Add New User</button>
        
        {/* Modal for adding new user */}
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <button className="close" onClick={() => setShowModal(false)}>X</button>
              <UserForm closeModal={() => setShowModal(false)} />
            </div>
          </div>
        )}
      </div>
    </AppContext.Provider>
  );
}

export default App;
