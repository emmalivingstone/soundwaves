import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Layout = props => {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 900);

  const onToggleSidebar = () => {
    setSidebarOpen(isOpen => {
      return !isOpen;
    });
  };

  const onWindowResize = () => {
    setSidebarOpen(window.innerWidth > 900);
  };

  useEffect(() => {
    window.addEventListener('resize', onWindowResize);

    return () => {
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

  return (
    <div className="layout">
      <Sidebar open={sidebarOpen} onToggleSidebar={onToggleSidebar} />
      <div className="layout__content">{props.children}</div>
    </div>
  );
};

export default Layout;
