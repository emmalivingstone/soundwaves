import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './Layout.scss';

const Layout = props => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="layout__content">{props.children}</div>
    </div>
  );
};

export default Layout;
