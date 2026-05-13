import React, { useState } from 'react';
import './AccountPage.css';

const AccountPage = () => {
  // 1. Create a state to track which tab is active
  const [activeTab, setActiveTab] = useState('User Info');

  // 2. Function to render content based on activeTab
  const renderContent = () => {
    switch (activeTab) {
      case 'User Info':
        return (
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
        );
      case 'Orders':
        return (
          <div className="tab-content">
            <h3>Your Recent Orders</h3>
            <p style={{ color: '#888', marginTop: '20px' }}>You haven't placed any orders yet.</p>
          </div>
        );
      case 'Settings':
        return (
          <div className="tab-content">
            <h3>Account Settings</h3>
            <div className="form-group" style={{marginTop: '20px'}}>
              <label>Email Notifications</label>
              <input type="checkbox" style={{width: 'auto'}} /> Receive order updates
            </div>
            <button className="save-button">Update Preferences</button>
          </div>
        );
      case 'Logout':
        return (
          <div className="tab-content">
            <h3>Are you sure you want to logout?</h3>
            <button className="save-button" style={{marginTop: '20px'}} onClick={() => window.location.href = '/'}>
              Yes, Logout
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="account-page-container">
      {/* Sidebar Navigation */}
      <aside className="account-sidebar">
        <h2 className="sidebar-title">Account</h2>
        <ul className="sidebar-menu">
          {/* 3. Update buttons to change the activeTab state */}
          {['User Info', 'Orders', 'Settings', 'Logout'].map((item) => (
            <li 
              key={item} 
              className={`menu-item ${activeTab === item ? 'active' : ''}`}
              onClick={() => setActiveTab(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content Area */}
      <main className="account-main-content">
        <h1 className="page-header">ACCOUNT PAGE</h1>
        
        <div className="info-card">
          <h2 className="info-title">{activeTab}</h2>
          {activeTab === 'User Info' && <p className="info-subtitle">(Update your details below)</p>}
          
          {/* 4. Display the content based on the function */}
          <div className="content-area">
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AccountPage;