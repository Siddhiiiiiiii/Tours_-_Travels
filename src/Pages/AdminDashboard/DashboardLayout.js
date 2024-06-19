import React from 'react';
import Sidebar from './Sidebar';

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <header className="header">Admin Dashboard</header>
        <main className="main">{children}</main>
      </div>
      <style jsx>{`
        .dashboard-container {
          display: flex;
          height: 100vh; /* Full height to cover the entire viewport */
        }

        .main-content {
          display: flex;
          flex-direction: column;
          flex: 1;
          overflow-y: auto; /* Allow content to be scrollable */
        }

        .header {
          background-color: #2d3748; /* Tailwind gray-800 */
          color: white;
          padding: 16px; /* Tailwind p-4 */
        }

        .main {
          padding: 16px; /* Tailwind p-4 */
        }
      `}</style>
    </div>
  );
};

export default DashboardLayout;
