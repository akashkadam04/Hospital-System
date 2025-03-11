import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import LoginForm from './Components/LoginForm'
import Dashboard from './Components/Dashboard'
import Registration from './Components/Registration'
import Modification from './Components/Modification'
import Transaction from './Components/Transaction'
import CheckIn from './Components/CheckIn'
import Report from './Components/Report'
import RevenueDetails from './Components/RevenueDetails'
import BillingDetails from './Components/BillingDetails'
import PackageNotification from './Components/PackageModification'
import AttendantNotification from './Components/AttendantModification'





function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/modification' element={<Modification />} />
        <Route path='/transaction' element={<Transaction />} />
        <Route path='/checkin' element={<CheckIn />} />
        <Route path='/report' element={<Report />} />
        <Route path='/revenuedetails' element={<RevenueDetails />} />
        <Route path='/billingdetails' element={<BillingDetails />} />
        <Route path='/packagenotification' element={<PackageNotification />} />
        <Route path='/attendantnotification' element={<AttendantNotification />} />




      </Routes>


    </div>
  )
}

export default App
