import React from 'react';
import './AccountPage.css';

const AccountPage = () => {
  return (
    <div className="account-page-container">
      {/* Sidebar Navigation */}
      <aside className="account-sidebar">
        <h2 className="sidebar-title">Account</h2>
        <ul className="sidebar-menu">
          <li className="menu-item active">User Info</li>
          <li className="menu-item">Orders</li>
          <li className="menu-item">Settings</li>
          <li className="menu-item">Logout</li>
        </ul>
      </aside>

      {/* Main Content Area */}
      <main className="account-main-content">
        <h1 className="page-header">ACCOUNT PAGE</h1>
        
        <div className="info-card">
          <h2 className="info-title">User Information</h2>
          <p className="info-subtitle">(Update your details below)</p>
          
          <form className="user-info-form">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your full name" />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input type="text" placeholder="Enter your phone number" />
            </div>

            <div className="form-group">
              <label>Address</label>
              <textarea placeholder="Enter your delivery address" rows="4"></textarea>
            </div>

            <button type="submit" className="save-button">Save Changes</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AccountPage;