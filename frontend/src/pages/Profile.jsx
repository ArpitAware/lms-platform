import React, { useState } from 'react'
import "./Profile.css"
import { FaUserCircle, FaBookOpen, FaWallet, FaCog, FaSignOutAlt, FaEdit } from "react-icons/fa";

function Profile() {

  const [editMode, setEditMode] = useState(false);

  const [user, setUser] = useState({
    name: "Jasika Roy",
    email: "jskroy968@gmail.com",
    phone: "+91 9826732323"
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className='profile-container'>

      <div className='sidebar'>
        <div className='profile-top'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&s" alt="profile"/>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>

        <div className='menu'>
          <div className='menu-item active'><FaUserCircle /> Profile</div>
          <div className='menu-item'><FaBookOpen /> My Courses</div>
          <div className='menu-item'><FaWallet /> Payments</div>
          <div className='menu-item'><FaCog /> Settings</div>
        </div>

        <div className='logout'>
          <FaSignOutAlt /> Logout
        </div>
      </div>

      {/* Main */}
      <div className='main'>

        <div className='profile-header'>
          <h2>My Profile</h2>
          <button onClick={() => setEditMode(!editMode)} className='edit-btn'>
            <FaEdit /> {editMode ? "Cancel" : "Edit Profile"}
          </button>
        </div>

        {!editMode ? (
          <div className='profile-info'>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
          </div>
        ) : (
          
          <div className='edit-form'>
            <input type="text" name="name" value={user.name} onChange={handleChange}/>
            <input type="email" name="email" value={user.email} onChange={handleChange}/>
            <input type="text" name="phone" value={user.phone} onChange={handleChange}/>
            <button className='save-btn'>Save Changes</button>


          </div>

          
        )}
<div className='extra-section'>

  <div className='analytics'>
    <h3>Profile Analytics</h3>

    <div className='analytics-cards'>
      <div className='box'>
        <h4>Courses</h4>
        <p>12</p>
      </div>

      <div className='box'>
        <h4>Certificates</h4>
        <p>5</p>
      </div>

      <div className='box'>
        <h4>Completion</h4>
        <p>78%</p>
      </div>
    </div>
  </div>

  
  <div className='certifications'>
    <h3>My Certifications</h3>

    <ul>
      <li>Full Stack Development</li>
      <li>JavaScript Advanced</li>
      <li>React Developer</li>
      <li>MongoDB Basics</li>
    </ul>
  </div>

</div>

      </div>
    </div>
  )
}

export default Profile