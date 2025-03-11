import React from 'react'
import { FaBed, FaUserCheck, FaFileAlt, FaMoneyBillWave, FaUser, FaPen, FaSignOutAlt } from "react-icons/fa";
import { FaBars, FaArrowUp, FaArrowDown, FaRegEdit, FaClipboardList } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import RevenueDetails from './RevenueDetails';
import { useState } from 'react';

function Report() {

  const navigator = useNavigate("");
  const [isModificationOpen, setIsModificationOpen] = useState(false);

  function revenue() {
    navigator("/RevenueDetails")
  }

  function bill() {
    navigator("/BillingDetails")
  }
  function signount() {
    navigator("/LoginForm")
  }

  return (

    <div className="bg-dark min-vh-100 text-light">
      <div className="d-flex">
        {/* Sidebar */}
        <div className="bg-dark text-light p-3 vh-300" style={{ width: "260px" }}>
          <div className='image d-flex align-items-center mb-4'>
            <img src='/img/grss.jpg' alt='GRSS Logo' className='img-fluid rounded-circle' style={{ width: '30px' }} />
            <h4 className='ms-2 mb-0'>GRSS</h4>
          </div>
          <ul className="list-unstyled">
            <li className="p-3">
              <a href="dashboard" className="text-light d-flex align-items-center">
                <FaUserCheck className="me-2" /> Dashboard
              </a>
            </li>
            <li className="p-3">
              <a href="/registration" className="text-light d-flex align-items-center">
                <FaUser className="me-2" /> Registration
              </a>
            </li>
            <li className="p-3">
              <a href="/transaction" className="text-light d-flex align-items-center">
                <FaMoneyBillWave className="me-2" /> Transaction
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="text-light d-flex align-items-center p-3"
                onClick={() => setIsModificationOpen(!isModificationOpen)}
              >
                <i> <FaPen className='me-2 ' /> Modification </i>
                <i
                  className={`bi ms-2 ${isModificationOpen ? "bi-chevron-down" : "bi-chevron-right"
                    }`}
                ></i>
              </a>
              {isModificationOpen && (
                <ul className="nav flex-column ps-4">
                  <li className="nav-item">
                    <a href="PackageNotification" className="nav-link text-light">
                      Package Modification
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="AttendantNotification" className="nav-link text-light">
                      Attendant Modification
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li className="p-3">
              <a href="checkin" className="text-light d-flex align-items-center">
                <FaUser className="me-2" /> Check In
              </a>
            </li>
            <li className="p-3">
              <a href="report" className="text-light d-flex align-items-center">
                <FaFileAlt className="me-2" /> Report
              </a>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-grow-1 p-4 bg-dark text-light">
          <div className="d-flex justify-content-between align-items-center">
            <h6><FaBars className="me-3" style={{ cursor: "pointer" }} />Report</h6>
            <FaSignOutAlt size={24} className="text-light" onClick={signount} style={{ cursor: "pointer" }} />
          </div>

          <div className="container mt-5">
            {/* Revenue & Billing Details */}
            <div className="row mb-4">
              <div className="col-md-6">
                <div className="card p-3 bg-dark text-light border-light rounded-4">
                  <h5>Revenue Details</h5>
                  <p>Report Details</p>
                  <button className="btn btn-info text-dark fw-bold rounded-pill" onClick={revenue}>
                    View Details
                  </button>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card p-3 bg-dark text-light border-light rounded-4">
                  <h5>Billing Details</h5>
                  <p>Monthwise billing report</p>
                  <button className="btn btn-info text-dark fw-bold rounded-pill" onClick={bill}>
                    View Details
                  </button>
                </div>
              </div>
            </div>

            {/* Patient Registration Table */}
            <div className="card p-4 bg-dark text-light border-light rounded-4">
              <h4 className="text-center">Patient Registration List</h4>
              <div className="table-responsive">
                <table className="table table-dark table-bordered border-light rounded-5 text-center ">
                  <thead>
                    <tr>
                      <th>Sr.No</th>
                      <th>Patient Name</th>
                      <th>Mobile No</th>
                      <th>Alternative No</th>
                      <th>Document</th>
                      <th>Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="6">No record..</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Report