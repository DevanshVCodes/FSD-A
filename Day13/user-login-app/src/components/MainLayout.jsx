import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div style={styles.layout}>
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link to="./login" style={styles.link}>Login</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="./register" style={styles.link}>Register</Link>
          </li>
        </ul>
      </nav>
      <div style={styles.outlet}>
        <Outlet />
      </div>
    </div>
  );
};

const styles = {
  layout: {
    fontFamily: '"Arial", sans-serif',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#ffffff',
  },
  nav: {
    padding: '10px 20px',
    background: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
    margin: 0,
    padding: 0,
  },
  navItem: {
    fontSize: '16px',
  },
  link: {
    textDecoration: 'none',
    color: '#667eea',
    fontWeight: 'bold',
    transition: 'color 0.3s ease',
  },
  linkHover: {
    color: '#764ba2',
  },
  outlet: {
    padding: '20px',
  },
};

export default MainLayout;