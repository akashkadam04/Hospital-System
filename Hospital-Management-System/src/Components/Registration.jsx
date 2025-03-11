import React from 'react'
import { useState } from 'react';
import { FaBed, FaUserCheck, FaFileAlt, FaMoneyBillWave, FaUser, FaPen, FaSignOutAlt, FaPhone, FaIdCard, FaMapMarkerAlt } from "react-icons/fa";
import { FaBars, FaArrowUp, FaArrowDown, FaRegEdit, FaClipboardList } from "react-icons/fa";
import { SiNginx } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';

function Registration() {

  const [isModificationOpen, setIsModificationOpen] = useState(false);
  const navigator = useNavigate()

  const [formData, setFormData] = useState({
    firstName: "",
    gender: "",
    primaryContact: "",
    secondaryContact: "",
    idProof: "",
    address: "",
    attendantAssigned: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  function signount() {
    navigator("/LoginForm")
  }


  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="bg-dark text-light p-3 vh-100" style={{ width: "260px" }}>
        <div className='image d-flex align-items-center mb-4'>
          <img src='/img/grss.jpg' alt='GRSS Logo' className='img-fluid rounded-circle' style={{ width: '30px' }} />
          <h4 className='ms-2 mb-0'>GRSS</h4>
        </div>
        <ul className="list-unstyled">
          <li className="p-3">
            <a href="/dashboard" className="text-light d-flex align-items-center">
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
          <h6><FaBars className="me-3" style={{ cursor: "pointer" }} />Patient Registraion</h6>
          <FaSignOutAlt size={24} className="text-light" onClick={signount} style={{ cursor: "pointer" }}/>
        </div>

        <div className="container mt-5">
          <div className="card bg-dark text-light p-4 rounded">
            <h4 className="text-center mb-4">Personal Information</h4>

            <div className="row">
              {/* Patient Name */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Patient Name (as on Aadhaar) <span className="text-danger">*</span></label>
                <div className="input-group">
                  <span className="input-group-text bg-secondary text-light"><FaUser /></span>
                  <input type="text" className="form-control" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
                </div>
              </div>

              {/* Gender */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Gender <span className="text-danger">*</span></label>
                <select className="form-select" name="gender" value={formData.gender} onChange={handleChange} required style={{ cursor: "pointer" }}>
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Primary Contact */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Primary Contact Number <span className="text-danger">*</span></label>
                <div className="input-group">
                  <span className="input-group-text bg-secondary text-light"><FaPhone /></span>
                  <input type="tel" className="form-control" name="primaryContact" placeholder="Enter Mobile no" value={formData.primaryContact} onChange={handleChange} required />
                </div>
              </div>

              {/* Secondary Contact */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Secondary Contact Number</label>
                <div className="input-group">
                  <span className="input-group-text bg-secondary text-light"><FaPhone /></span>
                  <input type="tel" className="form-control" name="secondaryContact" placeholder="Enter Mobile no (Optional)" value={formData.secondaryContact} onChange={handleChange} />
                </div>
              </div>

              {/* Valid ID Proof */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Valid ID Proof <span className="text-danger">*</span></label>
                <div className="input-group">
                  <span className="input-group-text bg-secondary text-light"><FaIdCard /></span>
                  <select className="form-select" name="idProof" value={formData.idProof} onChange={handleChange} required style={{ cursor: "pointer" }}>
                    <option value="">Select Valid ID Proof</option>
                    <option value="Aadhaar">Aadhaar</option>
                    <option value="PAN Card">PAN Card</option>
                    <option value="Voter ID">Voter ID</option>
                    <option value="Driving License">Driving License</option>
                  </select>
                </div>
              </div>

              {/* Attendant Assigned */}
              <div className="col-md-6 mb-3">
                <label className="form-label">Is Attendant Assigned: <span className="text-danger">*</span></label>
                <div className="d-flex align-items-center">
                  <div className="form-check me-3">
                    <input type="radio" className="form-check-input" name="attendantAssigned" value="Yes" onChange={handleChange} required />
                    <label className="form-check-label">Yes</label>
                  </div>
                  <div className="form-check">
                    <input type="radio" className="form-check-input" name="attendantAssigned" value="No" onChange={handleChange} required />
                    <label className="form-check-label">No</label>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="col-12 mb-3">
                <label className="form-label">Address <span className="text-danger">*</span></label>
                <div className="input-group">
                  <span className="input-group-text bg-secondary text-light"><FaMapMarkerAlt /></span>
                  <input type="text" className="form-control" name="address" placeholder="Ex: house/flat number, floor number, street, area, etc." value={formData.address} onChange={handleChange} required />
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="d-flex justify-content-center mt-4">
              <button className="btn btn-success me-3" style={{ cursor: "pointer" }}>Cancel</button>
              <button className="btn btn-info" style={{ cursor: "pointer" }}>Save</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Registration