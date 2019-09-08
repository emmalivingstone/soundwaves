import { Link } from '@reach/router';
import React from 'react';
import './Sidebar.scss';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__branding">
        <Link to="/" className="site-logo sidebar__home-link">
          sound<span className="site-logo__waves">waves</span>
        </Link>
      </div>
      <div className="sidebar__content">
        <div className="sidebar__sublist">
          <h2 className="sidebar__sublist-title">Listening Statistics</h2>
          <ul className="sidebar__sublist-items">
            <li className="sidebar__sublist-item">
              <Link to="/top-tracks/all-time">
                Spotify Top Tracks (all time)
              </Link>
            </li>
            <li className="sidebar__sublist-item">
              <Link to="/top-artists/all-time">
                Spotify Top Artists (all time)
              </Link>
            </li>
            <li className="sidebar__sublist-item">
              <Link to="/top-tracks/6-months">
                Spotify Top Tracks (past 6 months)
              </Link>
            </li>
            <li className="sidebar__sublist-item">
              <Link to="/top-artists/6-months">
                Spotify Top Artists (past 6 months)
              </Link>
            </li>
            <li className="sidebar__sublist-item">
              <Link to="/top-tracks/4-weeks">
                Spotify Top Tracks (past 4 weeks)
              </Link>
            </li>
            <li className="sidebar__sublist-item">
              <Link to="/top-artists/4-weeks">
                Spotify Top Artists (past 4 weeks)
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
