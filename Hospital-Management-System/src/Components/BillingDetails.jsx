import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FaBed, FaUserCheck, FaFileAlt, FaMoneyBillWave, FaUser, FaPen, FaSignOutAlt, FaHome, FaDownload, FaArrowCircleLeft } from "react-icons/fa";
import { FaBars, FaArrowUp, FaArrowDown, FaRegEdit, FaClipboardList } from "react-icons/fa";

function BillingDetails() {

  const [isModificationOpen, setIsModificationOpen] = useState(false);
  const navigator = useNavigate();

  function backicon() {
    navigator("/Report")
  }
  function home() {
    navigator("/Dashboard")
  }
  function download() {

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
              <a href="Dashboard" className="text-light d-flex align-items-center">
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
            <li className="p-3">
              <a
                href="#"
                className="text-light d-flex align-items-center p-2"
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
            <h6><FaBars className="me-3" />Billing Details</h6>
            <FaSignOutAlt size={24} className="text-light" onClick={signount} style={{ cursor: "pointer" }} />
          </div>
          <div className="container mt-5">
            {/* Header Section */}
            <div className="d-flex justify-content-between align-items-center mb-3" >
              <h4 className="text-light">Reservation Details</h4>
              <div className="d-flex align-items-center">
                <FaArrowCircleLeft size='150' className='text-light me-2' onClick={backicon} style={{ cursor: "pointer" }} />
                <select className="form-select form-select-sm bg-dark text-light border-light me-2" style={{ cursor: "pointer" }}>
                  <option>2025</option>
                  <option>2024</option>
                  <option>2023</option>
                </select>
                <select className="form-select form-select-sm bg-dark text-light border-light me-2" style={{ cursor: "pointer" }}>
                  <option>All Months</option>
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                </select>
                <select className="form-select form-select-sm bg-dark text-light border-light me-2" style={{ cursor: "pointer" }}>
                  <option>Ascending</option>
                  <option>Descending</option>
                </select>
                <select className="form-select form-select-sm bg-dark text-light border-light me-2" style={{ cursor: "pointer" }}>
                  <option>All</option>
                  <option>Reservation ID</option>
                  <option>Patient Name</option>
                  <option>From Name</option>
                  <option>Room Category</option>
                </select>
                <FaHome size='150' className='text-light ms-2' onClick={home} style={{ cursor: "pointer" }} />
                <FaDownload size='150' className='text-light ms-2' style={{ cursor: "pointer" }} />
              </div>
            </div>

            {/* Reservation Details Table */}
            <div className="card p-4 bg-dark text-light border-light rounded-4">
              <div className="table-responsive">
                <table className="table table-dark table-bordered border-light text-center">
                  <thead>
                    <tr>
                      <th>Sr.No <i className="bi bi-hash"></i></th>
                      <th>Reservation Id <i className="bi bi-card-list"></i></th>
                      <th>Patient Name <i className="bi bi-person"></i></th>
                      <th>From Date <i className="bi bi-calendar"></i></th>
                      <th>To Date <i className="bi bi-calendar2"></i></th>
                      <th>Room Type <i className="bi bi-building"></i></th>
                      <th>Bed Number <i className="bi bi-hospital"></i></th>
                      <th>Charges(₹) <i className="bi bi-cash"></i></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="8">No record..</td>
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

export default BillingDetails