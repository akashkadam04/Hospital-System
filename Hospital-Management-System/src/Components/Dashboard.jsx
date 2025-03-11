import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FaBed, FaUserCheck, FaFileAlt, FaMoneyBillWave, FaUser, FaPen, FaSignOutAlt } from "react-icons/fa";
import { FaBars, FaArrowUp, FaArrowDown, FaRegEdit, FaClipboardList } from "react-icons/fa";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("General", "SemiSpecial", "Secial");
  const [selectedButton, setSelectedButton] = useState("Booking");
  const [isModificationOpen, setIsModificationOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigator = useNavigate();

  const bedsData = {
    General: Array.from({ length: 8 }, (_, i) => ({ id: i + 1 })),
    "Semi-Special": Array.from({ length: 8 }, (_, i) => ({ id: i + 1 })),
    Special: Array.from({ length: 8 }, (_, i) => ({ id: i + 1 }))
  };

  function signount() {
    navigator("/LoginForm")
  }




  return (
    <div className="bg-dark min-vh-100 text-light">
      <div className="d-flex">
        {/* Sidebar */}
        <div className="bg-dark text-light p-3 vh-300" style={{ width: "300px" }}>
          <div className='image d-flex align-items-center mb-4'>
            <img src='/img/grss.jpg' alt='GRSS Logo' className='img-fluid rounded-circle' style={{ width: '30px' }} />
            <h4 className='ms-2 mb-0'>GRSS</h4>
          </div>
          <ul className="list-unstyled">
            <li className="p-3">
              <a href="#" className="text-light d-flex align-items-center" >
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
                className="text-light d-flex align-items-center "
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
                  <li className="nav-item ">
                    <a href="PackageNotification" className="nav-link text-light ">
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
            <h6><FaBars className="me-3" style={{ cursor: "pointer" }} onClick={() => setIsSidebarOpen(!isSidebarOpen)} />Late Dr. M. V. Govilkar Rugna Seva Sadan</h6>
            <FaSignOutAlt size={24} className="text-light" onClick={signount} style={{ cursor: "pointer" }} />
          </div>

          {/* Bed Status Cards */}
          <div className="row my-3 mt-4">
            {[
              { label: "Total Beds", count: 24 },
              { label: "General Beds", count: 8 },
              { label: "Semi-Special Beds", count: 8 },
              { label: "Special Beds", count: 8 },
            ].map((item, index) => (
              <div key={index} className="col-md-3">
                <div className="card text-center text-light bg-secondary p-3">
                  <FaBed size={24} style={{ cursor: "pointer" }} />
                  <h6>{item.label}</h6>
                  <p className="mb-0 text-dark">
                    <FaArrowUp /> Available: {item.count}
                  </p>
                  <p className="mb-0 text-danger">
                    <FaArrowDown /> Occupied: 0
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="d-flex justify-content-center my-3 w-20 p-4" style={{ cursor: "pointer" }}>
            {["Booking", "Checked-In Patients", "Reserved Patients"].map((btn, index) => (
              <button
                key={index}
                className={`btn mx-2 ${selectedButton === btn ? "btn-info" : "btn-outline-light"
                  }`}
                onClick={() => setSelectedButton(btn)}
              >
                {btn}
              </button>
            ))}
          </div>

          {/* Bed Type Tabs */}
          <div className="d-flex justify-content-center my-3" style={{ cursor: "pointer" }}>
            {["General", "Semi-Special", "Special"].map((type) => (
              <button
                key={type}
                className={`btn mx-2 ${activeTab === type ? "btn-info" : "btn-outline-light"}`}
                onClick={() => setActiveTab(type)}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Bed Listings */}
          <div className="d-flex flex-wrap justify-content-center mt-3" style={{ cursor: "pointer" }}>
            {bedsData[activeTab].map((bed) => (
              <div key={bed.id} className="bed-card text-center m-2 p-3 border rounded bg-secondary text-light">
                <p className="mb-2">Bed No {bed.id}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
