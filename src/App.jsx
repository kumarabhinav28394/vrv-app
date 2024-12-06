import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import UserTable from './components/UserTable'
import RoleTable from './components/RoleTable'
import UserForm from './components/UserForm'
import { AppContext } from './context/AppContext'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  
  return (
    <AppContext.Provider value={{ users, setUsers, roles, setRoles }}>
      <div className="App">
        <h1>RBAC User Interface</h1>
        
        <h2>Manage Users</h2>
        <UserTable />
        
        <h2>Manage Roles</h2>
        <RoleTable />
        
        <h2>Add New User</h2>
        <UserForm />
      </div>
    </AppContext.Provider>
  );
}


export default App
