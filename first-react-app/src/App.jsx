import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EmployeeList from './Components/EmployeeList'
import AddEmployee from './Components/AddEmployee'


function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element={<EmployeeList />} />
        <Route path='add-emp' element={<AddEmployee />} />
        <Route path='update-emp/:id' element={<AddEmployee />} />
      </Routes>
    </div>
  )
}

export default App