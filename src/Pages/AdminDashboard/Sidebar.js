import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any logout logic here (e.g., clearing user session, tokens, etc.)
    navigate('/'); // Redirect to the home page
  };

  return (
    <aside className="sidebar bg-gray-900 text-white w-64 min-h-screen">
      <ul className="p-4 space-y-4">
        <li>
          <Link to="/admin_dashboard">
            <button className="sidebar-button">My Dashboard</button>
          </Link>
        </li>
        <li>
          <Link to="/admin">
            <button className="sidebar-button">Add Tour Packages</button>
          </Link>
        </li>
        <li>
          <Link to="/admin">
            <button className="sidebar-button">View Bookings</button>
          </Link>
        </li>
        <li>
          <button className="sidebar-button logout-button" onClick={handleLogout}>Logout</button>
        </li>
      </ul>
      <style jsx>{`
        .sidebar {
          background-color: #1a202c; /* Tailwind gray-900 */
          color: white;
          width: 250px;
          padding: 16px; /* Tailwind p-4 */
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          height: 100vh;
        }

        .sidebar-button {
          width: 100%;
          text-align: left;
          padding: 12px 16px;
          background-color: transparent;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s ease;
          font-size: 16px;
        }

        .sidebar-button:hover {
          background-color: #2d3748; /* Tailwind gray-800 */
        }

        .sidebar-button:focus {
          outline: none;
          background-color: #4a5568; /* Tailwind gray-700 */
        }

        .logout-button {
          background-color: #e53e3e; /* Tailwind red-600 */
          color: white;
          font-weight: bold;
        }

        .logout-button:hover {
          background-color: #c53030; /* Tailwind red-700 */
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;
